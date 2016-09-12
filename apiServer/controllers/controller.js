var axios = require('axios');
var cache = require('../cache/cache');
var config = require('../config');

module.exports = {
  getAllRovers: getAllRovers
};

function getAllRovers(callback) {
  if(cache['allRovers']){
     return callback(null, cache['allRovers'])
  }

  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${config.key}`)

    .then(function (data) {
      console.log(data.data);
      config['allRovers'] = data.data;
      callback(null, data.data)
    })
    .catch(function (err) {

      callback(err);
    })

}

function roverPicsBySol (roverName, sol) {
  
}