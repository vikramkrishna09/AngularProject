const mongoose = require('mongoose');

const Register = new mongoose.Schema({
    Userref: String,
    Eventref: String,
    Email: String,
    FirstName: String,
    LastName: String,
    Address: String,
    PhoneNumber: String,
    NumofAdultTickets: Number,
    NumofChildTickets: Number



})

module.exports = mongoose.model('EventRegistration',Register);