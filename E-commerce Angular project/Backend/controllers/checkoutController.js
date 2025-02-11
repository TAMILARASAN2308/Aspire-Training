// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const Checkout = require("../models/checkoutModel");

exports.checkoutDetails = async (req, res) => {
    try {
        const userDetails = req.body;

        const newCheckout = new Checkout({
            address: userDetails.address,
            paymentMethod: userDetails.paymentMethod,
            cardDetails: userDetails.paymentMethod === 'card' ? {
                cardNumber: userDetails.cardDetails.cardNumber,
                expiryDate: userDetails.cardDetails.expiryDate,
                cvv: userDetails.cardDetails.cvv
            } : {}
        });

        await newCheckout.save();

        res.status(201).json({
            success: true,
            message: "Checkout details saved successfully",
            data: newCheckout
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving checkout details",
            error: error.message
        });
    }
};
