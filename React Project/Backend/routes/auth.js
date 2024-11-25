// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.post('/passenger', userControllers.passenger);
router.post('/payment', userControllers.payment);
router.post('/search', userControllers.search);
router.get('/flightbookings', userControllers.mybookings);
router.get('/ticket/:id', userControllers.getTicketDetails);
router.put('/cancel/:id', userControllers.updateBookingStatus);
router.post('/addflights', userControllers.addflight);
router.get('/addedflights', userControllers.addedflights);
router.delete('/addedflights/delete/:id',userControllers.AddFlightDelete);
module.exports = router;
