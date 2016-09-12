var express = require('express');
var apiRouter = require('./routes/api');
var app = express();

app.use('/api', apiRouter);

app.listen(4000, function () {
  console.log('listing on port 4000');
});