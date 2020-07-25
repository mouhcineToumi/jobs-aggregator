var express = require('express');
var router = express.Router();
const offersService = require('../services/offersService');


  /* GET offers listing. */
  router.get('/locations', function(req, res, next) {
    offersService.getLocations().then(cities => {
      console.log(cities);
      res.send(cities);
    });

  });




module.exports = router;
