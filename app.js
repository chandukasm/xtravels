var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/test', function (req, res) {
  res.send({
    "Output": "this is the testing page!"
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
