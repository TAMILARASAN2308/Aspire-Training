// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bookingClass: { type: String, required: true },
    alternatePhone: { type: String, required: true },
    passengerAge: { type: Number, required: true },
    fid: { type: Number, required: true }, 
});

module.exports = mongoose.model('Passenger', passengerSchema);
