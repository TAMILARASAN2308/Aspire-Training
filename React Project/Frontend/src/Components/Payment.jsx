// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState, useEffect } from 'react';
import '../styles/payment.css';
import '../styles/style.css'; 
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [flightPrice, setFlightPrice] = useState('Rs.1000');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationMM, setExpirationMM] = useState('');
    const [expirationYY, setExpirationYY] = useState('');
    const [cvv, setCvv] = useState('');

    const navigate = useNavigate(); 

    useEffect(() => {
        const storedPrice = localStorage.getItem('flightPrice');
        if (storedPrice) {
            setFlightPrice(`Rs.${storedPrice}`);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!cardNumber || !cardHolder || !expirationMM || !expirationYY || !cvv) {
            alert('Please fill in all fields before submitting.');
        } else {
            try {
                const response = await fetch('http://localhost:5000/auth/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cardNumber,
                        cardHolder,
                        expirationMM,
                        expirationYY,
                        CVV: cvv
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    alert(data.msg);
                    navigate('/confirm'); 
                } else {
                    alert(data.msg);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Internal server error');
            }
        }
    };

    return (
        <div className="pay_body">
            <Nav />
            <div className="pay_container">
                <div className="pay_header"><h1>PAYMENT</h1></div>
                <div className="pay_info">
                    <form className="payment_form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="CardNumber">Card Number</label>
                            <input
                                type="number"
                                className="big-btn"
                                name="CardNumber"
                                id="CardNumber"
                                placeholder="Enter Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="CardHolder">Card Holder</label>
                            <input
                                type="text"
                                className="big-btn"
                                name="CardHolder"
                                id="CardHolder"
                                placeholder="Enter Card Holder"
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="ExpirationMM">Expiration MM</label>
                            <label htmlFor="Expirationyy">Expiration YY</label>
                            <label htmlFor="CVV">CVV</label>
                            <label htmlFor="Price">Total Price</label>
                        </div>
                        <div>
                            <input
                                type="number"
                                className="under-input"
                                name="ExpirationMM"
                                id="ExpirationMM"
                                placeholder="Enter Exp MM"
                                min="1"
                                max="12"
                                value={expirationMM}
                                onChange={(e) => setExpirationMM(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                className="under-input"
                                name="Expirationyy"
                                id="Expirationyy"
                                placeholder="Enter Exp YY"
                                min="2024"
                                max="2050"
                                value={expirationYY}
                                onChange={(e) => setExpirationYY(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                className="under-input"
                                name="CVV"
                                id="CVV"
                                placeholder="Enter CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                required
                            />
                            <p className="Total_Price" id="tp">{flightPrice}</p>
                        </div>
                        <div className="pay_btn">
                            <button type="submit" id="pay-submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
                <img src="/images/bankCard.png" alt="PAYMENT" className="pay1-img" />
            </div>
        </div>
    );
};

export default Payment;
