// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const mongoose =  require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    ratings: Number,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: Number,
    numOfReviews: String,
    createdAt: Date

})

const productModel = mongoose.model('product',productSchema);
module.exports = productModel;