// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['cod', 'card'],
        required: true
    },
    cardDetails: {
        cardNumber: {
            type: String,
            required: function() {
                return this.paymentMethod === 'card';
            }
        },
        expiryDate: {
            type: String,
            required: function() {
                return this.paymentMethod === 'card';
            }
        },
        cvv: {
            type: String,
            required: function() {
                return this.paymentMethod === 'card';
            }
        }
    }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = Checkout;
