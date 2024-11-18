// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/confirmBooking.css'; 


const ConfirmBooking = () => {
    return (
        <div className="confirm-body">
            <div className="confirm-box">
                <div className="check-img" style={{  marginLeft: '0px' }}>
                    <img src="/images/green-check.jpg" alt="green-check" />
                </div>
                <h2 style={{  marginLeft: '0px',marginTop: '20px' }}>Congratulations, Your flight booking is confirmed.</h2>
                <h2 style={{  marginLeft: '0px' }} >Thanks!</h2>
                <Link to="/home" className="btn-link">
                    <button type="button" className="btn" style={{  marginTop: '10px' }}>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ConfirmBooking;
