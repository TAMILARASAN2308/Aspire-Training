// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const checkoutController = require('../controllers/checkoutController');

router.post('/order',orderController.createOrder);
router.post('/checkout',checkoutController.checkoutDetails);

module.exports = router;