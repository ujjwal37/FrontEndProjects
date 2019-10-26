var express = require('express');
var app = express();
var router = express.Router();
var mongodb = require('mongodb');
var bodyparser = require('body-parser');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var url = "mongodb:localhost:27017/Booking";
var path = require('path');
app.use(bodyparser.json());
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
router.get('/submit',(req , resp)=>{
  resp.sendFile(path.join(__dirname + '/Confirm.html'))
})
   app.use(router);
   app.listen(3000);
console.log("app is running at 3000 port");
