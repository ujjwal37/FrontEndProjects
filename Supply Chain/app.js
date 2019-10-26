var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
app.use(express.static("public"));
router.get('/',(req,resp)=>{
    resp.sendFile(path.join(__dirname + '/index.html'));
})

router.get('/project', (req, resp)=>{
    resp.sendFile(path.join(__dirname + '/Home.html'))
})

router.get('/form' , (req, resp)=>{
    resp.sendFile(path.join(__dirname + '/form.html'))
})

router.get('/develop', (req, resp) =>{
     resp.sendFile(path.join(__dirname + '/Develop.html'))
})
router.get('/trial', (req , resp)=>{
    resp.sendFile(path.join(__dirname + '/trial.html'))
})

app.use(router);
app.listen(3000);
console.log("app is running at 3000 port");