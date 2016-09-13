var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cache = new Schema({
  input: String,
  body: Object
});

module.exports = mongoose.model('Cache', Cache );
