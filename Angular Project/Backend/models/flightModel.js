// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const flightSchema = new mongoose.Schema({
    flightId: { type: Number }, 
    flightNumber: {
        type: String,
        required: true
    },
    airline: {
        type: String,
        required: true
    },
    fromLocation: {
        type: String,
        required: true
    },
    toLocation: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date
    },
    classType: {
        type: String,
        enum: ['Economy Class', 'Business Class', 'First Class'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    }
});

flightSchema.plugin(AutoIncrement, { inc_field: 'flightId' });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
