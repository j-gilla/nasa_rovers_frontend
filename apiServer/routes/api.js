var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/rovers', function (req, res) {
  controller.getAllRovers(function (err ,data) {
    if(err){
      return res.json(400, err)
    }
    res.json(200, data)
  });
});

module.exports = router;