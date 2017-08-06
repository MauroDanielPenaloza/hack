var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('client', new Schema({ 
    firstName: String, 
    lastName: String, 
    dni: String, 
    master: String, 
    gender: String,
    ultFechaPago: Date,
    active: Boolean
}));