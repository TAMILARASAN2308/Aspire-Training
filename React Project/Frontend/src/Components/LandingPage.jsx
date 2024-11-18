// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState } from 'react';
import '../styles/landingPage.css';

const FlightBooking = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [classType, setClassType] = useState('');

  const handleClassType = (count) => {
    if (count === 0) {
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[1].style.color="#64748b";
        document.getElementsByClassName("cbnt")[2].style.color="#64748b";
        document.getElementsByClassName("cbnt")[1].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[2].style.backgroundColor="";
        setClassType('Business Class');
    } else if (count === 1) {
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[0].style.color="#64748b";
        document.getElementsByClassName("cbnt")[2].style.color="#64748b";
        document.getElementsByClassName("cbnt")[0].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[2].style.backgroundColor="";
        setClassType('Economy Class');
    } else if (count === 2) {
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[1].style.color="#64748b";
        document.getElementsByClassName("cbnt")[0].style.color="#64748b";
        document.getElementsByClassName("cbnt")[1].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[0].style.backgroundColor="";
        setClassType('First Class');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fromLocation || toLocation || departureDate || returnDate|| !fromLocation || !toLocation || !departureDate || !returnDate) {
        alert('Please login to continue!');
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

  const handleLoginAlert = () => {
    alert('Please login to continue!');
  };

  return (
    <div className="Home">
      <nav className='nav_bar'>
        <div className="nav__logo">FLIGHT BOOKING</div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a onClick={handleLoginAlert}>Popular Destinations</a></li>
          <li className="link"><a onClick={handleLoginAlert}>My Bookings</a></li>
          <li className="link"><a href="#about_footer">About</a></li>
        </ul>
        <a href="/login"><button className="btn">LOGIN</button></a>
      </nav>

      <header className="section__container header__container">
        <h1 className="section__header">FLIGHT BOOKING</h1>
      </header>

      <section className="section__container booking__container">
        <div className="booking__nav">
          <span className="cbnt" onClick={() => handleClassType(0)}>Business Class</span>
          <span className="cbnt" onClick={() => handleClassType(1)}>Economy Class</span>
          <span className="cbnt" onClick={() => handleClassType(2)}>&nbsp;&nbsp;&nbsp;&nbsp;First Class&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <span><i className="ri-map-pin-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <select id="fromLocation" name="fromLocation" className="location-select" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} required>
                  <option value="" disabled>Select From Location</option>
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
                <select id="toLocation" name="toLocation" className="location-select" value={toLocation} onChange={(e) => setToLocation(e.target.value)} required>
                  <option value="" disabled>Select To Location</option>
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
                <input type="date" name="departureDate" id="departuredate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
                <label>Departure</label>
              </div>
              <p>Add date</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-calendar-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <input type="date" name="returnDate" id="returndate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                <label>Return </label>
              </div>
              <p>Add date</p>
            </div>
          </div>

          <input type="hidden" name="classType" value={classType} />

          <button onClick={handleSubmit} type="submit" className="btn" id="search-submit">
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

export default FlightBooking;
