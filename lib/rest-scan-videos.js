/**
 * Login with password
 * curl -i -H 'Content-Type: application/json' -X PUT http://localhost:5000/scan/videos/  -d '{"videos":[{"video_name": "VID001", "employee_pk": 3, "incident_count": 5}, {"video_name": "VID002", "employee_pk": 3, "incident_count": 3}]}'
 */
'use strict';
var Rx = require('rxjs');
module.exports = function(pool, app, helper) {
    app.options('/scan/videos', cors());
    app.put('/scan/videos',cors(), (request, response) => {
      let sQuery = 'INSERT INTO video (`video_name`, `employee_pk`, `datetimestamp`, `incident_count`) VALUES (?, ?, ?, ?);'
      let body = [];
      let t = 1;
      body = request.body.videos;

      const observer = {
        error: error => {
          response.status(500);
          response.end(error.toString());        },
        complete: () => {
          const obj = {"total":t};
          response.end(JSON.stringify(obj));
        }
      };

      function putVideos(){
        return Rx.Observable.create(observer => {
          for (let i=0; i<body.length; i++){
            let params = [body[i].video_name, body[i].employee_pk, helper.mySqlDateNow(),body[i].incident_count];
              pool.query(sQuery, params, (err, rows) => { 
                if (err){
                  observer.error(err);
                }else{
                  if(t == (body.length)){
                    observer.complete();
                  } 
                  t++;
                }
              })
          }
        })
      }

      const source = putVideos();
      source.subscribe(observer);

    });
}
