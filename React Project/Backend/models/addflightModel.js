// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const addFlightSchema = new mongoose.Schema({
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    departureDate: { type: String, required: true },
    returnDate: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    flightName: { type: String, required: true },
    ticketPrice: { type: Number, required: true },
    classType: { type: String, default: "Economy Class" }
});

const AddFlight = mongoose.model('addedflight', addFlightSchema);
module.exports = AddFlight ;