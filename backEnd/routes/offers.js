var express = require('express');
var router = express.Router();
const offersService = require('../services/offersService');


  /* GET offers listing. */
  router.get('/', function(req, res, next) {
    offersService.getOffers().then(offers => {
      console.log(offers);
      res.send(offers);
    });

  })

  .get('/by-location/:location', function(req, res, next) {
    offersService.getOffersByLocation(req.params.location).then(offers => {
      res.send(offers);
    })
  })

  .get('/by-domain/:domain', function(req, res, next) {
      offersService.getOffersByDomain(req.params.domain).then(offers => {
        res.send(offers);
      });

    })

 .get('/by-date/:date', function(req, res, next) {
      offersService.getOffersByDate(req.params.date).then(offers => {
        res.send(offers);
      });

    })
      .get('/by-title/:title', function(req, res, next) {
        offersService.getOffersByTitle(req.params.title).then(offers => {
          res.send(offers);
        });

      });


module.exports = router;
