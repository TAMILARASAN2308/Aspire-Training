// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI)
        .then((con) => {
            console.log(`MongoDB is connected to the host: ${con.connection.host}`);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDatabase;
