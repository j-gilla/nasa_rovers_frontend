var express = require('express');
var apiRouter = require('./routes/api');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/marsRovers');




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api', apiRouter);

app.listen(4000, function () {
  console.log('listing on port 4000');
});