// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-07-2024
// Reviewed By :
// Review Date : 


const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/',(req,res)=>{
    res.render("landingpage");
});
router.get('/login',(req,res)=>{
    res.render("login");
});
router.get('/register',(req,res)=>{
    res.render("register");
});

router.get('/index',(req,res)=>{
    res.render("index");
});

// router.get('/search',(req,res)=>{
//     res.render("search");
// });

router.get('/passenger',(req,res)=>{
    res.render("passenger");
});

router.get('/payment',(req,res)=>{
    res.render("payment");
});

router.get('/confirm',(req,res)=>{
    res.render("confirm");
});

router.get('/destinations',(req,res)=>{
    res.render("destinations");
});

router.get('/admin',(req,res)=>{
    res.render("admin");
});

router.get('/addflights',(req,res)=>{
    res.render("addflights");
});

// router.get('/mybookings',(req,res)=>{
//     res.render("mybookings");
// });

// router.get('/ticket',(req,res)=>{
//     res.render("ticket");
// });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});



router.get('/mybookings', (req, res) => {
    const mybookings_UserId = req.session.userId;
    console.log(mybookings_UserId);
    console.log('Session userId:', req.session.userId);

    db.query('SELECT * FROM flightinfo  WHERE USER_ID = ?', [mybookings_UserId], (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        console.log(results); 
        res.render('mybookings', { rows: results });
    });
});

router.get('/mybookings', (req, res) => {
    const mybookings_UserId = req.session.userId;
    console.log('Session userId:', mybookings_UserId);

    db.query('SELECT * FROM flightinfo WHERE ID = ?', [mybookings_UserId], (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        console.log(results); 
        res.render('mybookings', { rows: results });
    });
});


// router.post('/booking/delete/:id', (req, res) => {
//     const bookingId = req.params.id;
//     db.query('DELETE FROM flightinfo WHERE ID = ?', [bookingId], (error, results) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).render('error', {
//                 msg: 'An error occurred, please try again later.'
//             });
//         }
//         res.redirect('/mybookings');
//     });
// });

router.get('/bookingsdetails', (req, res) => {
    db.query('SELECT * FROM flightinfo', (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        console.log(results); 
        res.render('bookingsdetails', { rows: results });
    });
});




router.post('/addedflights/delete/:id', (req, res) => {
    const bookingId = req.params.id;
    db.query('DELETE FROM flight WHERE ID = ?', [bookingId], (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        res.redirect('/addedflights');
    });
});



router.get('/ticket/:id', (req, res) => {
    const passengerId = req.params.id;
    const query = `
        SELECT f.USER_ID, f.ID, f.FROMLOCATION, f.TOLOCATION, f.DEPARTUREDATE, f.RETURNDATE, f.CLASS, f.STATUS, 
        p.FULLNAME, p.GENDER, p.EMAIL, p.PHONENUMBER, p.PAS_2_FULLNAME, p.PRICE
        FROM flightinfo f
        JOIN passengerinfo p ON f.ID = p.ID
        WHERE f.ID = ?`;
    
    db.query(query, [passengerId], (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        if (results.length === 0) {
            return res.status(404).render('error', {
                msg: 'Booking not found.'
            });
        }
        res.render('ticket', { rows: results });
    });
});

router.get('/search', (req, res) => {
    const UserId = req.query.UserId || null;
    const userName=req.query.userName || null;
    const fromLocation = req.query.fromLocation;
    const toLocation = req.query.toLocation;
    const departureDate = req.query.departureDate;
    const returnDate = req.query.returnDate || null;  
    const classType = req.query.classType || '';  

    // SQL query to check if the provided search data exists in the flight table
    let checkQuery = `
        SELECT 
            FROM_LOCATION, TO_LOCATION, DEPARTURE_DATE, RETURN_DATE, 
            DEPARTURE_TIME, ARRIVAL_TIME, FLIGHT_NAME, TICKET_PRICE
        FROM 
            flight
        WHERE 
            FROM_LOCATION = ?
            AND TO_LOCATION = ?
            AND DEPARTURE_DATE = ?
    `;

    const queryParams = [fromLocation, toLocation, departureDate];
    if (returnDate) {
        checkQuery += ` AND RETURN_DATE = ?`;
        queryParams.push(returnDate);
    }

    db.query(checkQuery, queryParams, (error, results) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).render('error', { msg: 'An error occurred, please try again later.' });
        }

        if (results.length > 0) {
            // Match found, insert the search data into the flightinfo table
            const insertQuery = `
                INSERT INTO flightinfo (USER_ID,USER_NAME, FROMLOCATION, TOLOCATION, DEPARTUREDATE, RETURNDATE, CLASS)
                VALUES (?, ?, ?, ?, ?,?,?);
            `;

            const insertParams = [UserId, userName, fromLocation, toLocation, departureDate, returnDate, classType];

            db.query(insertQuery, insertParams, (insertError) => {
                if (insertError) {
                    console.error("Database error:", insertError);
                    return res.status(500).render('error', { msg: 'An error occurred, please try again later.' });
                }

                // Render the search results page with matched flights
                res.render('search', { rows: results });
            });
        } else {
            res.render('search', { rows: [], msg: 'No flights found matching your criteria.' });
        }
    });
});

router.get('/addedflights', (req, res) => {
    db.query('SELECT * FROM flight', (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        res.render('addedflights', { flights: results });
    });
});

 router.post('/bookingsdetails/cancel/:id', (req, res) => {
        const bookingId = req.params.id;
        db.query('UPDATE flightinfo SET STATUS = "Cancelled" WHERE ID = ?', [bookingId], (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).render('error', {
                    msg: 'An error occurred, please try again later.'
                });
            }
            res.redirect('/bookingsdetails');
        });
});


router.post('/mybookings/cancel/:id', (req, res) => {
    const bookingId = req.params.id;
    db.query('UPDATE flightinfo SET STATUS = "Cancelled" WHERE ID = ?', [bookingId], (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).render('error', {
                msg: 'An error occurred, please try again later.'
            });
        }
        res.redirect('/mybookings');
    });
});

module.exports=router;