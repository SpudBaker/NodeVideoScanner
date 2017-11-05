/**
 * Login with password
 * curl http://localhost:5000/auth/validate/:key
 */
'use strict';
module.exports = function(pool, app, helper) {
  app.get('/auth/validate/:key',(request, response) => {

    let sQuery = 'SELECT e.employee_pk as employee_pk, e.first_name as first_name, e.last_name as last_name,' + 
	'e.organisation_pk as organisation_pk, o.name as organisation_name, l.datetimestamp as datetimestamp, l.keyString as keyString ' +   
    'FROM employee e ' + 
    'INNER JOIN organisation o ON o.organisation_pk = e.organisation_pk ' + 
    'INNER JOIN login l ON l.employee_pk = e.employee_pk ' +
    'WHERE l.keystring = ?;'
    let params = [request.params.key];
    let JSONdata = '';
    let message = '';
  
    pool.query(sQuery, params, (err, rows) => {
  
      // something has broken
      if (err){
        response.status(500);
        message = err.message;
        JSONdata = JSON.stringify(message);
        response.end(JSONdata);
      } 
      else {
        switch (rows.length){       
            case rows.length > 1:
                // key has a unique index on the database - this should never happen;
                response.status(500);
                message = {
                  message : 'Mutiple password matches'
                }
                JSONdata = JSON.stringify(message);
                response.end(JSONdata);
                break;
            case 0:
                // key not found
                response.status(401);
                message = {
                    message : 'No key match'
                }
                JSONdata = JSON.stringify(message);
                response.end(JSONdata);
                break;
            case 1:
                // successful - establish if today or not
                const r = rows[0];
                const today = new Date();
                if (r.datetimestamp.setHours(0,0,0,0) == today.setHours(0,0,0,0)){
                    message = {
                        "employee_pk" : r.employee_pk,
                        "first_name" : r.first_name,
                        "last_name" : r.last_name,
                        "organisation_pk" : r.organisation_pk,
                        "organisation_name" : r.organisation_name,
                        "keyString" : r.keyString
                    }
                } else {
                    response.status(401);
                    message = {
                      message : 'key expired'
                    }
                }
                JSONdata = JSON.stringify(message);
                response.end(JSONdata);
            }
      }
    
    });

  });
}

