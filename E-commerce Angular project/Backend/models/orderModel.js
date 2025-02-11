// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const mongoose = require('mongoose');

const orderSchemma = new mongoose.Schema({
    cartItems: Array,
    amount: Number,
    status: String,
    createdAt: Date
})

const orderModel = mongoose.model('order',orderSchemma);
module.exports = orderModel;