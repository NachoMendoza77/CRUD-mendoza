const mongoose = require('mongoose');

//Schema
const Player = mongoose.model('Player', {
    name: {
        type:String,
        required: true
    },
    country: {
        type:String,
        required: true
    },
    team: {
        type:String,
        required: true
    },
});

module.exports = { Player }