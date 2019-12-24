// bookingDetailsController.js

BookingDetails = require('./bookingDetailsModel');
var path = require('path');

// Handle create bookingDetails actions
exports.new = function (req, res) {
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
    var bookingDetail = new BookingDetails();
    bookingDetail.firstname = req.body.firstname;
    bookingDetail.lastname = req.body.lastname;
    bookingDetail.email = req.body.email;
    bookingDetail.phonenumber= req.body.phonenumber;
    bookingDetail.arrivaldate= req.body.arrivaldate;
    bookingDetail.departuredate= req.body.departuredate;
    bookingDetail.numberofperson= req.body.numberofperson;
    bookingDetail.places= req.body.places;
    bookingDetail.touristguide= req.body.touristguide;
    bookingDetail.bus= req.body.bus;

// save the contact and check for errors
bookingDetail.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else{
            res.sendFile(path.join(__dirname + '/Confirm.html'));
            res.json({
                message: 'New booking detail created!',
                data: bookingDetail
            });
        }
    });
};