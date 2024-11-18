// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-07-2024
// Reviewed By :
// Review Date : 

const mysql = require('mysql');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).render('login', { msg: 'Please Enter Your Username and Password', msg_type: 'error' });
        }

        if (userName === "admin" && password === "admin") {
            return res.redirect('/admin');
        }

        // Check if user exists in the DB.
        db.query('SELECT * FROM users WHERE USERNAME = ?', [userName], async (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render('login', { msg: 'Internal server error', msg_type: 'error' });
            }

            if (result.length === 0) {
                return res.status(401).render('login', { msg: 'User does not exist!', msg_type: 'error' });
            }

            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.PASS);
            if (!passwordMatch) {
                return res.status(401).render('login', { msg: 'Incorrect password!', msg_type: 'error' });
            }

            req.session.userId = user.ID; 
            // console.log('User logged in. Session userId:', req.session.userId);
            // Render 'index.hbs' after successful login
            return res.render('index', { userName: user.USERNAME, userId: user.ID });
        });

    } catch (error) {
        console.log(error);
        return res.status(500).render('login', { msg: 'Internal server error', msg_type: 'error' });
    }
};

exports.register = async (req, res) => {
    try {
        const { userName, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.render('register', { msg: 'Passwords do not match', msg_type: 'error' });
        }

        // Check if username or email already exists
        db.query('SELECT * FROM users WHERE USERNAME = ? OR EMAIL = ?', [userName, email], async (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render('register', { msg: 'Internal server error', msg_type: 'error' });
            }

            if (result.length > 0) {
                // Check if username already exists
                const existingUser = result.find(user => user.USERNAME === userName);
                const existingEmail = result.find(user => user.EMAIL === email);

                if (existingUser) {
                    return res.render('register', { msg: 'Username already exists!', msg_type: 'error' });
                } else if (existingEmail) {
                    return res.render('register', { msg: 'Email already exists!', msg_type: 'error' });
                }
            }

            // Hash password
            let hashedPassword = await bcrypt.hash(password, 8);

            db.query('INSERT INTO users SET ?', { USERNAME: userName, EMAIL: email, PASS: hashedPassword }, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).render('register', { msg: 'Failed to register user', msg_type: 'error' });
                } else {
                    return res.render('register', { msg: 'User registration successful', msg_type: 'good' });
                }
            });
        });

    } catch (error) {
        console.log(error);
        return res.status(500).render('register', { msg: 'Internal server error', msg_type: 'error' });
    }
};

exports.passenger = (req, res) => {
    console.log(req.body);
    const {
        Pass_UserId,
        flight_price,
        fullname_1, dob_1, gender_1, email_1, phoneNumber_1, bookingClass_1, alternatePhone_1, passengerAge_1,
        fullname_2, dob_2, gender_2, email_2, phoneNumber_2, bookingClass_2, alternatePhone_2, passengerAge_2
    } = req.body;

    const passengerData = {
        USER_ID: Pass_UserId[0] || null,
        PRICE:flight_price || null,
        FULLNAME: fullname_1,
        DOB: dob_1,
        GENDER: gender_1,
        EMAIL: email_1,
        PHONENUMBER: phoneNumber_1,
        BOOKINGCLASS: bookingClass_1,
        ALTERNATEPHONE: alternatePhone_1,
        PASSENGERAGE: passengerAge_1,

        PAS_2_FULLNAME: fullname_2 || '',
        PAS_2_DOB: dob_2 || '',
        PAS_2_GENDER: gender_2 || '',
        PAS_2_EMAIL: email_2 || '',
        PAS_2_PHONENUMBER: phoneNumber_2 || '',
        PAS_2_BOOKINGCLASS: bookingClass_2 || '',
        PAS_2_ALTERNATEPHONE: alternatePhone_2 || '',
        PAS_2_PASSENGERAGE: passengerAge_2 || ''
    };

    db.query("INSERT INTO passengerinfo SET ?", passengerData, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).render("passenger", {
                msg: "An error occurred, please try again later.",
                msg_type: "error"
            });
        } else {
            return res.redirect("/payment");
        }
    });
};

exports.payment = (req, res) => {
    console.log(req.body);
    const {Card_UserId , CardNumber, CardHolder,ExpirationMM,Expirationyy,CVV} = req.body;

    db.query(
        "INSERT INTO  cardinfo SET ?",
        { USER_ID: Card_UserId || null ,CARDNUMBER: CardNumber, CARDHOLDER: CardHolder, EXPIRATIONMM: ExpirationMM, EXPIRATIONYY: Expirationyy, CVV: CVV},
        (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render("payment", {
                    msg: "An error occurred, please try again later.",
                    msg_type: "error"
                });
            } else {
                console.log(result);
                return res.redirect("/confirm");
            }
        }
    );
};

exports.index = (req, res) => {
    console.log(req.body);
    const { FROMLOCATION, TOLOCATION,DEPARTUREDATE,RETURNDATE,CLASS} = req.body;

    db.query(
        "INSERT INTO flightinfo  SET ?",
        { FROMLOCATION: FROMLOCATION, TOLOCATION: TOLOCATION, DEPARTUREDATE: DEPARTUREDATE, RETURNDATE: RETURNDATE,CLASS:CLASS},
        (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render("index", {
                    msg: "An error occurred, please try again later.",
                    msg_type: "error"
                });
            } else {
                console.log(result);
                return res.redirect("/search");
            }
        }
    );
};

exports.addflights = (req, res) => {
    console.log(req.body);
    const { FROM_LOCATION,  TO_LOCATION,DEPARTURE_DATE , RETURN_DATE ,DEPARTURE_TIME,ARRIVAL_TIME,FLIGHT_NAME, TICKET_PRICE} = req.body;

    db.query(
        "INSERT INTO flight  SET ?",
        { FROM_LOCATION: FROM_LOCATION,  TO_LOCATION:  TO_LOCATION, DEPARTURE_DATE : DEPARTURE_DATE ,  RETURN_DATE:  RETURN_DATE ,DEPARTURE_TIME:DEPARTURE_TIME,ARRIVAL_TIME:ARRIVAL_TIME,FLIGHT_NAME:FLIGHT_NAME, TICKET_PRICE: TICKET_PRICE},
        (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render("addflights", {
                    msg: "An error occurred, please try again later.",
                    msg_type: "error"
                });
            } else {
                console.log(result);
                return res.redirect("/admin");
            }
        }
    );
};


