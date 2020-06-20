
////////////////////////////////////////////////////////////////  Patient Service  //////////////////////////////////////////////////////////////////////

const db = require("../db/connection");



////////////////////////////////////////////////////////////Classes////////////////////////////////////////////////////////////////////////////////////////

class Offer {

}

////////////////////////////////////////////////////////////Functions///////////////////////////////////////////////////////////////////////////////////////
db.initialize("jobs-aggregator", "offers", function(dbCollection) { // successCallback
    function getOffers() {
        return new Promise(resolve => {
            dbCollection.find().toArray()
                .then(offers =>{ resolve(offers)})

        })


    }

    function getOffersByDomain(domain) {
        return new Promise(resolve => {
            dbCollection.find().toArray()
                .then(offers =>{ resolve(offers)})

        })


    }
    function getOffersByTitle(title) {
        return new Promise(resolve => {
            const pattern = "/"+title+"/";
            dbCollection.find({title: new RegExp(title)}).toArray()
                .then(offers =>{ resolve(offers)})

        })


    }
    function getOffersByLocation(location) {
        return new Promise(resolve => {
            dbCollection.find({ location: location }).toArray()
                .then(offers =>{ resolve(offers)})

        })


    }
    function getOffersByDate(date) {
        return new Promise(resolve => {
            dbCollection.find().toArray()
                .then(offers =>{ resolve(offers)})

        })


    }
    function getOffersByType(type) {

        return new Promise((resolve, reject) => {
            dbCollection.find().toArray()
                .then(offers =>{ resolve(offers)})
        });
    }
    function getOffersByAllCriteria(type,location,domain,date){
        return new Promise((resolve, reject) => {

        });
    }


///////////////////////////////////////////////////////////////Exports///////////////////////////////////////////////////////////////////////////////////

    exports.getOffers = getOffers;
    exports.getOffersByLocation = getOffersByLocation;
    exports.getOffersByAllCriteria = getOffersByAllCriteria;
    exports.getOffersByDate = getOffersByDate;
    exports.getOffersByTitle = getOffersByTitle;
    exports.getOffersByType = getOffersByType;
    exports.getOffersByDomain = getOffersByDomain;

    }, function(err) { // failureCallback
    throw (err);
});








