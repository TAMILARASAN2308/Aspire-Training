// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please Enter a Username"],
        trim: true,
        maxLength: [100, "Username exceeds the maximum length of 100 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter an Email"],
        trim: true,
        maxLength: [100, "Email exceeds the maximum length of 100 characters"]
    },
    password: {
        type: String,
        required: [true, "Please Enter a Password"],
        trim: true,
        maxLength: [100, "Password exceeds the maximum length of 100 characters"]
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


