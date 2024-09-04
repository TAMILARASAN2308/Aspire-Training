// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    cardHolder: { type: String, required: true },
    expirationMM: { type: Number, required: true },
    expirationYY: { type: Number, required: true },
    CVV: { type: Number, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);
