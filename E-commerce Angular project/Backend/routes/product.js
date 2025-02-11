// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const express = require('express');
const router = express.Router(); // This creates a new router object using the router module from Express, which allows us to define routes for our application.

const productController = require('../controllers/productController');

router.get('/products',productController.getProducts);
router.get('/product/:id',productController.getSingleProduct);
router.get('/all-products', productController.getAllProducts);

module.exports = router;