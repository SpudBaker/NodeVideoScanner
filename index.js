var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/auth/login/:uniqueIdentifier', function (request, response) {
  var user = {
    firstName: 'Richard',
    lastName: 'Baker'
  }
  var JSONdata = JSON.stringify(user);
  response.end(JSONdata);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
