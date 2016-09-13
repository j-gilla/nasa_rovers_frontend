var axios = require('axios');
var cache = require('../cache/cache');
var config = require('../config');

var CacheModel = require('../Model/cache');

// add.
// var newDoc = new cacheModel({input: xxx, {body}})
// newDoc.save();


module.exports = {
  getAllRovers: getAllRovers,
  roverPicsBySol: roverPicsBySol
};

function getAllRovers(callback) {
  CacheModel.findOne({input: 'getAll'}, function (err, data) {
    if(data){
      return callback(null, data.body);
    }

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${config.key}`)
      .then(function (data) {
        console.log(data.data);
        var newDoc = new CacheModel({input: 'getAll', body: data.data});
        newDoc.save();
        callback(null, data.data)
      })
      .catch(function (err) {
        callback(err);
      })


  });


}

function roverPicsBySol (roverName, sol, callback) {
  if(cache['rover'+'sol']){
    callback(null, cache['rover'+'sol'])
  }
  axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${config.data}`)
    .then(function (data) {
        cache['rover'+'sol'] = data.data;
        callback(null, data.data)

    })
    .catch(function (err) {
      callback(err);
    })

}

