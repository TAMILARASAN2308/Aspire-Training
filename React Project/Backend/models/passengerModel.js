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
    passenger2: {
        fullname: { type: String, default: "" },
        dob: { type: String, default: "" },
        gender: { type: String, default: "" },
        email: { type: String, default: "" },
        phoneNumber: { type: String, default: "" },
        bookingClass: { type: String, default: "" },
        alternatePhone: { type: String, default: "" },
        passengerAge: { type: Number, default: null }
    },
    fromlocation: { type: String, required: true },
    tolocation: { type: String, required: true },
    departuredate: { type: Date, required: true },
    returndate: { type: Date, required: true },
    class: { type: String, required: true },
    price: { type: String},
    fid: { type: Number, required: true } 
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
