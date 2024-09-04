// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-07-2024
// Reviewed By :
// Review Date : 


const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/register',userControllers.register);
router.post('/login',userControllers.login);
router.post('/index',userControllers.index);
router.post('/passenger',userControllers.passenger);
router.post('/payment',userControllers.payment);
router.post('/addflights', userControllers.addflights);
//post:When you want to send data to the server to create or update a resource.

module.exports=router;
