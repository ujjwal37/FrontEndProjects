// UsersModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
   
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber:{
        type: String,
        required: true
    }
});
// Export Users model
var users = module.exports = mongoose.model('users', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}