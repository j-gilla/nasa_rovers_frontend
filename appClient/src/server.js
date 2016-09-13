var path =require('path');
var express = require ('express');
var React = require('react');
var renderToString =require ('react-dom/server').renderToString;
var match = require ('react-router').match;
var RouterContext = require ('react-router').RouteContext
var routes = require ('./routes');

var app = express();



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
console.log(path.join(__dirname,'static'));
app.use(express.static(path.join(__dirname, 'static')));



app.get('*', function (req,res) {
  match({routes, location: req.url}, function (err, redirectLocation, renderProps){
    if(err){
      res.status(500).send(err.message)
    }
    let markup;
      if (renderProps){
        markup = renderToString(<RouterContext {...renderProps}/> )
      }
  return res.render('index', {markup});

  })
});

app.listen(4001, function () {
  console.log('listing on port 4001');
});