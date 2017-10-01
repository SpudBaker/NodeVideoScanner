/**
 * Login with password
 * curl http://localhost:5000/auth/login/:password
 */
'use strict';
module.exports = function(pool, app, helper) {
  app.get('/auth/login/:password', (request, response) => {
    
      let sQuery = 'SELECT * FROM employee WHERE password = ?'
      let params = [request.params.password];
      let JSONdata = '';
      let message = '';
    
      pool.query(sQuery, params, (err, rows) => {
    
        // something has broken
        if (err){
          response.status(500);
          message = err.message;
          JSONdata = JSON.stringify(message);
          response.end(JSONdata);
        } else {

          switch (rows.length){

            case 0:
                // password does not match
                response.status(401);
                message = {
                  message : 'No password match'
                }
                JSONdata = JSON.stringify(message);
                response.end(JSONdata);
                break;

            case rows.length > 1:
                // password has a unique index on the database - this should never happen;
                response.status(500);
                message = {
                  message : 'Mutiple password matches'
                }
                JSONdata = JSON.stringify(message);
                response.end(JSONdata);
                break;
                

            case 1:

                // successful login
                  sQuery = "INSERT INTO login (employee_pk, datetimestamp, keyString) VALUES (?, ?, ?)";
                  let employee_pk = rows[0].employee_pk;
                  let first_name = rows[0].first_name;
                  let last_name = rows[0].last_name;
                  let organisation_pk = rows[0].organisation_pk;
                  let dts = helper.mySqlDateNow();
                  let keyString = helper.randomString(10,'32Blue');
                  params = [employee_pk, dts, keyString];
          
                  pool.query(sQuery, params, (err, rows, message) => {
                    if (err){
                      response.status(500);
                      message = err.message;
                    }else{
                      message = {
                        "employee_pk" : employee_pk,
                        "first_name" : first_name,
                        "last_name" : last_name,
                        "organisation_pk" : organisation_pk,
                        "keyString" : keyString
                      }
                    }
                    JSONdata = JSON.stringify(message);
                    response.end(JSONdata);
                  });
            }
        }
      });
    });
};
