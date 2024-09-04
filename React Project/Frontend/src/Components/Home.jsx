// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css'; 
import Nav from './Nav';

const Home = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const navigate = useNavigate();

    const handleClassType = (className) => {
        setSelectedClass(className);

        document.getElementById('classInput').value = className;

        const buttons = document.getElementsByClassName('cbnt');
        Array.from(buttons).forEach((btn) => {
            btn.style.backgroundColor = '';
            btn.style.color = '#64748b'; 
        });

        const classMap = {
            'Business Class': 0,
            'Economy Class': 1,
            'First Class': 2
        };

        const selectedIndex = classMap[className];
        if (buttons[selectedIndex]) {
            buttons[selectedIndex].style.backgroundColor = '#3d5cb8';
            buttons[selectedIndex].style.color = '#ffffff';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const fromLocation = document.getElementById("fromLocation").value;
        const toLocation = document.getElementById("toLocation").value;
        const departureDate = document.getElementById("departuredate").value;
        const returnDate = document.getElementById("returndate").value;
        const classType = document.getElementById("classInput").value;
    
        if (!fromLocation || !toLocation || !departureDate) {
            alert("Please fill in all required fields before submitting.");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/auth/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fromLocation, toLocation, departureDate, returnDate, classType })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const flights = await response.json();
    
            navigate('/search', { state: { flights, fromLocation, toLocation, departureDate, returnDate, classType } });
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };

    return (
        <div className="Home">
            <Nav />
            <header className="section__container header__container">
                <h1 className="section__header">FLIGHT BOOKING</h1>
            </header>
            <section className="section__container booking__container">
                <div className="booking__nav">
                    <span 
                        className={`cbnt ${selectedClass === 'Business Class' ? 'selected' : ''}`} 
                        onClick={() => handleClassType('Business Class')}
                    >
                        Business Class
                    </span>
                    <span 
                        className={`cbnt ${selectedClass === 'Economy Class' ? 'selected' : ''}`} 
                        onClick={() => handleClassType('Economy Class')}
                    >
                        Economy Class
                    </span>
                    <span 
                        className={`cbnt ${selectedClass === 'First Class' ? 'selected' : ''}`} 
                        onClick={() => handleClassType('First Class')}
                    >
                        First Class
                    </span>
                </div>
                <form className="flight_form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div className="input__content">
                            <div className="input__group">
                                <select id="fromLocation" name="fromLocation" className="location-select" required>
                                    <option value="" disabled selected>Select From Location</option>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Houston">Houston</option>
                                </select>
                            </div>
                            <p>What is your current location?</p>
                        </div>
                    </div>
                    <div className="form__group">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div className="input__content">
                            <div className="input__group">
                                <select id="toLocation" name="toLocation" className="location-select" required>
                                    <option value="" disabled selected>Select To Location</option>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Houston">Houston</option>
                                </select>
                            </div>
                            <p>Where are you going?</p>
                        </div>
                    </div>
                    <div className="form__group">
                        <span><i className="ri-calendar-line"></i></span>
                        <div className="input__content">
                            <div className="input__group">
                                <input type="date" name="departureDate" id="departuredate" required />
                                <label>Departure</label>
                            </div>
                            <p>Add date</p>
                        </div>
                    </div>
                    <div className="form__group">
                        <span><i className="ri-calendar-line"></i></span>
                        <div className="input__content">
                            <div className="input__group">
                                <input type="date" name="returnDate" id="returndate" />
                                <label>Return</label>
                            </div>
                            <p>Add date (optional)</p>
                        </div>
                    </div>
                    <input type="hidden" name="classType" id="classInput" />
                    <button type="submit" className="btn" id="search-submit">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
            </section>
            <div className="home_content">
                <img src="/images/flight_world.jpg" alt="flight image" style={{ width: '500px', height: 'fit-content', margin: '10%', borderRadius: '30%' }} />
                <div className="terms_condition">
                    <h1>Terms and Conditions</h1>
                    <h3>Reservation Process</h3>
                    <p>Users must provide accurate information during booking, and confirmation emails serve as proof of transactions.</p>
                    <h3>Cancellation and Refunds</h3>
                    <p>Users can cancel bookings according to specified policies, with refunds subject to applicable fees.</p>
                    <h3>Privacy and Security</h3>
                    <p>User data is handled securely and used only for booking purposes, in compliance with the privacy policy.</p>
                </div>
            </div>
            <footer className="footer" id="about_footer">
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <h3>FLIGHT BOOKING</h3>
                        <p>
                            Where Excellence Takes Flight. With a strong commitment to customer
                            satisfaction and a passion for air travel, Airlines offers
                            exceptional service and seamless journeys.
                        </p>
                        <p>
                            From friendly smiles to state-of-the-art aircraft, we connect the
                            world, ensuring safe, comfortable, and unforgettable experiences.
                        </p>
                    </div>
                    <div className="footer__col">
                        <h4>INFORMATION</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Popular Destinations</p>
                    </div>
                    <div className="footer__col">
                        <h4>CONTACT</h4>
                        <p>Support</p>
                        <p>Media</p>
                        <p>Socials</p>
                    </div>
                </div>
                <div className="section__container footer__bar">
                    <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
                    <div className="socials">
                        <span><i className="ri-facebook-fill"></i></span>
                        <span><i className="ri-twitter-fill"></i></span>
                        <span><i className="ri-instagram-line"></i></span>
                        <span><i className="ri-youtube-fill"></i></span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
