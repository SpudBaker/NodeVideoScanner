/**
 * Login with password
 * curl http://localhost:5000/auth/login/:password
 */
'use strict';
module.exports = function(pool, app) {
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
                  sQuery = "INSERT INTO login (employee_pk, datetimestamp) VALUES (?, ?)";
                  let userId = rows[0].employee_pk;
                  let dts = Date.now;
                  params = [userId, dts];

                  // store the employee details  
                  JSONdata = JSON.stringify(rows[0]);
          
                  pool.query(sQuery, params, (err, rows) => {
                    if (err){
                      response.status(500);
                      message = err.message;
                      JSONdata = JSON.stringify(message);
                      response.end(JSONdata);
                    } else {
                      response.end(JSONdata);
                    }
                  });

            }
        }

      });

    });

};
