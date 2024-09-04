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
import '../styles/passenger.css'; 

const Passenger = () => {
    const [passengerCount, setPassengerCount] = useState(1);
    const [passengerForms, setPassengerForms] = useState([
        { fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: '' }
    ]);
    const navigate = useNavigate();

    const addPassengerForm = () => {
        setPassengerCount(prevCount => prevCount + 1);
        setPassengerForms(prevForms => [
            ...prevForms,
            { fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: '' }
        ]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        setPassengerForms(forms => {
            const updatedForms = [...forms];
            updatedForms[index][name] = value;
            return updatedForms;
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let allFormsValid = true;
        for (const form of passengerForms) {
            if (!Object.values(form).every(value => value.trim() !== '')) {
                alert("Please fill in all fields.");
                allFormsValid = false;
                break;
            }
        }

        if (allFormsValid) {
            try {
                const response = await fetch('http://localhost:5000/auth/passenger', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(passengerForms)
                });

                const data = await response.json();
                if (response.ok) {
                    alert(data.msg);
                    navigate('/payment'); 
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
        <div className="passenger_body">
            <Nav />
            <div className="passenger_container">
                <div className="passenger_header">
                    <h1>PASSENGER INFORMATION {passengerCount}</h1>
                </div>
                <div id="passengerForms">
                    {passengerForms.map((formData, index) => (
                        <div className="passenger_info" key={index}>
                            <form className="passenger_form" onSubmit={handleFormSubmit}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label>Full Name</label></td>
                                            <td><input type="text" name="fullname" value={formData.fullname} onChange={(e) => handleInputChange(index, e)} placeholder="Enter full name" required /></td>
                                            <td><label>Date of Birth</label></td>
                                            <td><input type="text" name="dob" value={formData.dob} onChange={(e) => handleInputChange(index, e)} placeholder="Enter Date of Birth" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Gender</label></td>
                                            <td>
                                                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={(e) => handleInputChange(index, e)} required /> Male
                                                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={(e) => handleInputChange(index, e)} required /> Female
                                            </td>
                                            <td><label>Email Address</label></td>
                                            <td><input type="email" name="email" value={formData.email} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your email" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone Number</label></td>
                                            <td><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your phone number" required /></td>
                                            <td><label>Class</label></td>
                                            <td>
                                                <select name="bookingClass" value={formData.bookingClass} onChange={(e) => handleInputChange(index, e)} required>
                                                    <option value="">Select Class</option>
                                                    <option value="Economy">Economy</option>
                                                    <option value="Business">Business</option>
                                                    <option value="First">First</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label>Alternate Number</label></td>
                                            <td><input type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={(e) => handleInputChange(index, e)} placeholder="Enter alternate phone number" required /></td>
                                            <td><label>Age</label></td>
                                            <td><input type="number" name="passengerAge" value={formData.passengerAge} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your age" required /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    ))}
                </div>
                <div className="payment_btn">
                    <button onClick={addPassengerForm} style={{ marginLeft: '40px' }}>Add Member</button>
                    <button onClick={handleFormSubmit} style={{ marginLeft: '220px' }}>Proceed to payment</button>
                </div>
            </div>
        </div>
    );
};

export default Passenger;
