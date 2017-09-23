/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
/**
 * search for books by a given field (author or subject)
 * curl http://localhost:3000/api/search/book/by_author?q=Giles,%20Lionel
 * curl http://localhost:3000/api/search/book/by_subject?q=War
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
