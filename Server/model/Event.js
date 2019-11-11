const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    EventName: String,
    EventDescription: String,
    EventCategory: String,
    EventStartDate: Date,
    EventEndDate:Date,
    EventStartTime:String,
    EventEndTime:String,
    EventLocation:String,
    AllowRegistration:Boolean,
    EventImage:String,
    AdultTicketPrice:String,
    ChildTicketPrice:String,



})

module.exports = mongoose.model('Event',EventSchema);