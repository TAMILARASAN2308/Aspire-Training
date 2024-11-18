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
    
    const handleSubscribe = (event) => {
        event.preventDefault();
        const email = document.getElementById('subscribe_email').value;
        if (!email) {
          alert('Please enter an email address');
        } else {
          alert('Thank you for subscribing!');
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
                        &nbsp;&nbsp;&nbsp;&nbsp;First Class&nbsp;&nbsp;&nbsp;&nbsp;
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
                            <p>Add date </p>
                        </div>
                    </div>
                    <input type="hidden" name="classType" id="classInput" />
                    <button type="submit" className="btn" id="search-submit">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
            </section>
            <div className="top-destinations">
        <h1>Top Destinations</h1>
        <div className="destinations_container">
          <div>
            <img src="/images/paris.jpg" alt="Paris" />
            <h2>Paris</h2>
          </div>
          <div>
            <img src="/images/new_york.jpg" alt="New York" />
            <h2>New York</h2>
          </div>
          <div>
            <img src="/images/tokyo.jpg" alt="Tokyo" />
            <h2>Tokyo</h2>
          </div>
          <div>
            <img src="/images/dubai.jpg" alt="Dubai" />
            <h2>Dubai</h2>
          </div>
          <div>
            <img src="/images/australia.jpg" alt="Australia" />
            <h2>Australia</h2>
          </div>
          <div>
            <img src="/images/korea.jpg" alt="Korea" />
            <h2>Korea</h2>
          </div>
        </div>
      </div>

      <div className="home_content">
        <img src="/images/flight_world.jpg" alt="flight image" style={{ width: '500px', height: 'auto', marginLeft: '10%', marginRight: '10%', borderRadius: '30%' }} />
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

      <div className="feedback_container">
        <h1>Clients Feedback</h1>
        <div className="feedback">
          <div className="feedback_item">
            <img src="/images/profile1.jpg" alt="Profile 1" className="profile_pic" />
            <h2>Elon Musk</h2>
            <p>"Amazing experience! The booking process was incredibly smooth, and the support team was very helpful."</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="feedback_item">
            <img src="/images/profile2.jpg" alt="Profile 2" className="profile_pic" />
            <h2>Cristiano Ronaldo</h2>
            <p>"I love how user-friendly the platform is. I booked my flight in minutes. Will definitely use it again!"</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="feedback_item">
            <img src="/images/profile3.jpg" alt="Profile 3" className="profile_pic" />
            <h2>David Goggins</h2>
            <p>"Hands down the best booking experience I’ve had! Quick, efficient, and great prices. Highly recommend!"</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
      <section className="subscribe">
        <div className="section__container subscribe__container">
          <h2 className="section__header">Subscribe & Get Latest Information </h2>
          <form className="subscribe__form">
            <input type="text" placeholder="Enter your email here" id="subscribe_email" />
            <button className="btn" type="submit" onClick={handleSubscribe}>Subscribe</button>
          </form>
        </div>
     </section> 
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
