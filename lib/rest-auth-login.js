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
    
      pool.query(sQuery, params, (err, rows) => {
    
        // something has broken
        if (err){
          response.status(500);
          let message = err.message;
          JSONdata = JSON.stringify(message);
          response.end(JSONdata);
        }
    
        // password does not match
        if (rows.length < 1){
          response.status(401);
          let message = {
            message : 'No password match'
          }
          JSONdata = JSON.stringify(message);
          response.end(JSONdata);
        }
    
        // password has a unique index on the database - this should never happen;
        if (rows.length > 1){
          response.status(500);
          let message = {
            message : 'Mutiple password matches'
          }
          JSONdata = JSON.stringify(message);
          response.end(JSONdata);
        }
    
        JSONdata = JSON.stringify(rows[0]);
        response.end(JSONdata);
      });
    });
};
