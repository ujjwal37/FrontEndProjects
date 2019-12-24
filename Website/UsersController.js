// usersController.js
// Import contact model
Users = require('./usersModel');
var path = require('path');
// Handle view contact info
exports.authenticate = function (req, res) {
    console.log("email"+req.body.email );
    console.log("password" +req.body.password )
    Users.find({$and:[{email:req.body.email},{password:req.body.password},{phonenumber:req.body.phonenumber}]}, function (err, user) {

        if (err)
            res.send(err);
        else if(user.length !=0)
            res.sendFile(path.join(__dirname + '/Jaipur.html'))
        else
            res.json({
                message: 'invalid credential',
                data: user
            });
            
    });
}
// Handle create user actions
exports.new = function (req, res) {
    var user = new Users();
    user.phonenumber = req.body.phonenumber;
    user.email = req.body.email;
    user.password = req.body.password;
// save the user and check for errors
    user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New user created!',
                data: user
            });
    });
};
