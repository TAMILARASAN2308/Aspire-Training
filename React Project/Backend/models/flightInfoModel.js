// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const flightInfoSchema = new mongoose.Schema({
    FROMLOCATION: {
        type: String,
        required: true
    },
    TOLOCATION: {
        type: String,
        required: true
    },
    DEPARTUREDATE: {
        type: Date,
        required: true
    },
    RETURNDATE: {
        type: Date,
        required: true
    },
    CLASS: {
        type: String,
        required: true
    }
});


const FlightInfo = mongoose.model('FlightInfo', flightInfoSchema);

module.exports = FlightInfo;