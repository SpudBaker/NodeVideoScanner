'use strict';

var express = require('express');
var app = express();
var mySql = require('mysql');
var helper = require('./lib/helperFunctions.js');
var pool = mySql.createPool({
  connectionLimit : 5,
  host : 'ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user : 'j5nv7dz9hml1izuv',
  password : 'pbz0yd5zfhj5qx8x',
  database : 'q1uc6zz7ywr1i8n8'
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index');
});

require('./lib/rest-auth-login.js')(pool, app, helper);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
