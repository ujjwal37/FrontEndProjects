var express = require('express');
var app = express();
var router = express.Router();
var mongodb = require('mongodb');
// Import Mongoose
let mongoose = require('mongoose');
var bodyparser = require('body-parser');
//var assert = require('assert');
//var MongoClient = mongodb.MongoClient;
//var url = "mongodb:localhost:27017/Booking";
var path = require('path');
//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});

var db = mongoose.connection;

// Added check for DB connection

if(!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")

app.use(express.static("public"));
router.get('/',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/Login.html'));
})
router.get('/signup',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/signup.html'));
})
router.get('/login',(req  ,resp)=>{
  resp.sendFile(path.join(__dirname + '/Jaipur.html'));
})
router.get('/jaipur',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/dk.html'))
})
router.get('/jodhpur',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/dk5.html'))
})
router.get('/udaipur',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/dk2.html'))
})
router.get('/pushkar',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/dk3.html'))
})
router.get('/submit',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/Confirm.html'))
})

// Import user controller
var UsersController = require('./UsersController');
router.route('/submit').post(UsersController.new);
router.route('/authenticate').post(UsersController.authenticate);
// app.post('/submit', (req,res)=>{
// console.log('req', req.body);
// console.log("hi i am in")});
//Import Booking Controller 
var BookingController= require('./bookingDetailsController');
router.route('/booking').post(BookingController.new);
   app.use(router);
   app.listen(3000);
console.log("app is running at 3000 port");
