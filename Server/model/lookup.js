const mongoose = require('mongoose');



const lookupSchema = new mongoose.Schema(
    {
        eventid:{type: mongoose.Schema.Types.ObjectId,ref: 'Event'},
        userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }
)

module.exports = mongoose.model('lookup',lookupSchema);
