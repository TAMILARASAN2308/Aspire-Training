// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const User = require('../models/loginModel'); 
const Passenger = require('../models/passengerModel'); 


exports.register = async (req, res) => {
    try {
        const { userName, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ msg: 'Passwords do not match', msg_type: 'error' });
        }

        const existingUser = await User.findOne({ $or: [{ userName }, { email }] });

        if (existingUser) {
            if (existingUser.userName === userName) {
                return res.status(400).json({ msg: 'Username already exists!', msg_type: 'error' });
            } else if (existingUser.email === email) {
                return res.status(400).json({ msg: 'Email already exists!', msg_type: 'error' });
            }
        }

        const newUser = new User({
            userName,
            email,
            password
        });

        await newUser.save();

        return res.status(201).json({ msg: 'User registration successful', msg_type: 'success' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json({ msg: 'Please enter your username and password', msg_type: 'error' });
        }

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(401).json({ msg: 'User does not exist!', msg_type: 'error' });
        }

        if (password !== user.password) {
            return res.status(401).json({ msg: 'Incorrect password!', msg_type: 'error' });
        }

        return res.status(200).json({ msg: 'Login successful', msg_type: 'success', userName: user.userName });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

// exports.passenger = async (req, res) => {
//     try {
//         const passengerData = req.body;

//         const passengers = passengerData.map((data) => ({
//             fullname: data.fullname,
//             dob: data.dob,
//             gender: data.gender,
//             email: data.email,
//             phoneNumber: data.phoneNumber,
//             bookingClass: data.bookingClass,
//             alternatePhone: data.alternatePhone,
//             passengerAge: data.passengerAge
//         }));

//         await Passenger.insertMany(passengers);

//         res.status(201).json({ msg: 'Passenger details saved successfully!', msg_type: 'success' });
//     } catch (error) {
//         console.error('Error saving passenger details:', error);
//         res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
//     }
// };

const Counter = require('../models/counterModel');

const getNextSequenceValue = async (sequenceName) => {
    const counter = await Counter.findByIdAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return counter.sequence_value; // This will be a number
};

exports.passenger = async (req, res) => {
    try {
        const passengerData = req.body;

        // Generate `fid` for each passenger
        const passengersWithFid = await Promise.all(passengerData.map(async (data) => {
            const fid = await getNextSequenceValue('passengerId');
            return { ...data, fid }; // `fid` will be a number
        }));

        // Save passengers with the assigned `fid`
        await Passenger.insertMany(passengersWithFid);

        res.status(201).json({ msg: 'Passenger details saved successfully!', msg_type: 'success' });
    } catch (error) {
        console.error('Error saving passenger details:', error);
        res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

const Payment = require('../models/paymentModel');

exports.payment = async (req, res) => {
    try {
        const { cardNumber, cardHolder, expirationMM, expirationYY, CVV } = req.body;

        const newPayment = new Payment({
            cardNumber,
            cardHolder,
            expirationMM,
            expirationYY,
            CVV
        });

        await newPayment.save();
        
        res.status(201).json({ msg: 'Payment details saved successfully!', msg_type: 'success' });
    } catch (error) {
        console.error('Error saving payment details:', error);
        res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};



const Flight = require('../models/flightModel');
const FlightInfo = require('../models/flightInfoModel'); 


exports.search = async (req, res) => {
    try {
        const { fromLocation, toLocation, departureDate, returnDate, classType } = req.body;
        let query = {
            fromLocation,
            toLocation,
            departureDate: new Date(departureDate),
        };

        if (returnDate) {
            query.returnDate = new Date(returnDate);
        }

        if (classType) {
            query.classType = classType;
        }

        console.log('Search Query:', query);

        const flights = await Flight.find(query);

        await saveFlightSearch({ fromLocation, toLocation, departureDate, returnDate, classType });

        console.log('Found Flights:', flights);
        res.status(200).json(flights);
    } catch (error) {
        console.error('Error fetching flights:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};


const saveFlightSearch = async (flightData) => {
    try {
        const { fromLocation, toLocation, departureDate, returnDate, classType } = flightData;

        const flightInfo = new FlightInfo({
            FROMLOCATION: fromLocation,
            TOLOCATION: toLocation,
            DEPARTUREDATE: new Date(departureDate),
            RETURNDATE: returnDate ? new Date(returnDate) : null, 
            CLASS: classType || 'Not Specified' 
        });

        
        await flightInfo.save();

        console.log('Flight search details saved successfully!');
    } catch (error) {
        console.error('Error saving flight search details:', error);
    }
};



exports.mybookings = async (req, res) => {
    try {
        const flights = await FlightInfo.find({});
        res.status(200).json(flights);
    } catch (error) {
        console.error('Error fetching flight bookings:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

exports.getTicketDetails = async (req, res) => {
    const ticketId = req.params.id;

    try {
        // Fetch passenger details based on the ticket ID
        const passengers = await Passenger.find({ fid: ticketId }).exec();
        if (!passengers || passengers.length === 0) {
            return res.status(404).json({ msg: 'No passengers found for this ticket.' });
        }

        // Return the list of passengers
        res.status(200).json(passengers);
    } catch (error) {
        console.error('Error fetching passenger details:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await FlightInfo.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ msg: 'Booking not found.' });
        }

        res.status(200).json({ msg: 'Booking canceled successfully.' });
    } catch (error) {
        console.error('Error canceling booking:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

