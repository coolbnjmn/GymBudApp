// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello Everyone. GymBud is currently under construction, please come back soon! With pressing needs, please send an email to ben@gymbudapp.com...Thanks!');
  });

  var port = Number(process.env.PORT || 5000);
  app.listen(port, function() {
    console.log("Listening on " + port);
    });
