// bookingDetail.js
var mongoose = require('mongoose');
// Setup schema
var bookingDetailSchema = mongoose.Schema({
    /*"firstname" : "abc",
    "lastname" : "arya",
    "email" : "abc@gmail.com",
    "phonenumber" : "1234567890",
    "arrivaldate" : "11-22-2019",
    "departuredate" : "11-25-2019",
    "numberofperson" : 4,
    "places" : "jaipur",
    "touristguide" : "yes",
    "bus" : "AC"*/
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        
    },
    phonenumber: {
        type: String,
        required: true
    },

    arrivaldate: {
        type: String,
        required: true
    },
    departuredate: {
        type: String,
        required: true
    },
    numberofperson: {
        type: String,
        required: true
    },
    places: {
        type: String,
        required: true
    },
    touristguide: {
        type: String,
        required: true
    },
    bus: {
        type: String,
        required: true
    },
});
// Export bookingDetails model
var bookingDetails = module.exports = mongoose.model('bookingDetails', bookingDetailSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}