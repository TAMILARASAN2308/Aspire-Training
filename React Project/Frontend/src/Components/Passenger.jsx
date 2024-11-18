// import React, { useState } from 'react';
// import { useNavigate, useLocation,Link } from 'react-router-dom';
// import '../styles/style.css'; 
// import '../styles/passenger.css'; 

// const Passenger = () => {
//     const [passengerCount, setPassengerCount] = useState(1); 
//     const [passengerForms, setPassengerForms] = useState([{
//         fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: ''
//     }]);
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { flight, price } = location.state || {};

//     // Function to add a new passenger form
//     const addPassengerForm = () => {
//         if (passengerCount < 2) { // You can increase the limit for more passengers
//             setPassengerCount(prevCount => prevCount + 1);
//             setPassengerForms([...passengerForms, {
//                 fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: ''
//             }]);
//         } else {
//             alert("Maximum passenger limit reached");
//         }
//     };

//     // Function to handle form input changes
//     const handleInputChange = (index, event) => {
//         const { name, value } = event.target;
//         const updatedForms = [...passengerForms];
//         updatedForms[index][name] = value;
//         setPassengerForms(updatedForms);
//     };

//     // Function to handle form submission
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         // Check if all fields are filled for all passengers
//         for (const form of passengerForms) {
//             if (!Object.values(form).every(value => value.trim() !== '')) {
//                 alert("Please fill in all fields.");
//                 return;
//             }
//         }

//         // Prepare payload
//         const payload = passengerForms.map(form => ({
//             ...form,
//             fromlocation: flight.fromLocation,
//             tolocation: flight.toLocation,
//             departuredate: flight.departureDate,
//             returndate: flight.returnDate,
//             class: flight.classType,
//             price: price,
//         }));

//         // Send passenger details to the server
//         try {
//             const response = await fetch('http://localhost:5000/auth/passenger', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(payload)
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert(data.msg);
//                 navigate('/payment',{ state: { price:price } });
//             } else {
//                 alert(data.msg);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Internal server error');
//         }
//     };

//     return (
//         <div className="passenger_body">
//             <nav className="nav_bar">
//         <div className="nav__logo">FLIGHT BOOKING</div>
//         <ul className="nav__links">
//           <li className="link"><Link to="/home">Home</Link></li>
//           <li className="link"><Link to="/destinations">Popular Destinations</Link></li>
//           <li className="link"><Link to="/mybookings">MY Bookings</Link></li>
//           <li className="link"><a href="#about_footer">About</a></li>
//         </ul>
//         <Link to="/search"><button className="btn">Back</button></Link>
//             </nav>
//             <div className="passenger_container">
//                 <div className="passenger_header">
//                     <h1>PASSENGER INFORMATION</h1>
//                 </div>
//                 <div id="passengerForms">
//                     {passengerForms.map((formData, index) => (
//                         <div className="passenger_info" key={index}>
//                             <form className="passenger_form" onSubmit={handleFormSubmit}>
//                                 <table>
//                                     <tbody>
//                                         <tr>
//                                             <td><label>Full Name</label></td>
//                                             <td><input type="text" name="fullname" value={formData.fullname} onChange={(e) => handleInputChange(index, e)} placeholder="Enter full name" required /></td>
//                                             <td><label>Date of Birth</label></td>
//                                             <td><input type="text" name="dob" value={formData.dob} onChange={(e) => handleInputChange(index, e)} placeholder="Enter Date of Birth" required /></td>
//                                         </tr>
//                                         <tr>
//                                             <td><label>Gender</label></td>
//                                             <td>
//                                                 <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={(e) => handleInputChange(index, e)} required /> Male
//                                                 <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={(e) => handleInputChange(index, e)} required /> Female
//                                             </td>
//                                             <td><label>Email Address</label></td>
//                                             <td><input type="email" name="email" value={formData.email} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your email" required /></td>
//                                         </tr>
//                                         <tr>
//                                             <td><label>Phone Number</label></td>
//                                             <td><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your phone number" required /></td>
//                                             <td><label>Class</label></td>
//                                             <td>
//                                                 <select name="bookingClass" value={formData.bookingClass} onChange={(e) => handleInputChange(index, e)} required>
//                                                     <option value="">Select Class</option>
//                                                     <option value="Economy">Economy</option>
//                                                     <option value="Business">Business</option>
//                                                     <option value="First">First</option>
//                                                 </select>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td><label>Alternate Number</label></td>
//                                             <td><input type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={(e) => handleInputChange(index, e)} placeholder="Enter alternate phone number" required /></td>
//                                             <td><label>Age</label></td>
//                                             <td><input type="number" name="passengerAge" value={formData.passengerAge} onChange={(e) => handleInputChange(index, e)} placeholder="Enter your age" required /></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </form>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="payment_btn">
//                     <button onClick={addPassengerForm} style={{ marginLeft: '40px' }}>Add Member</button>
//                     <button onClick={handleFormSubmit} style={{ marginLeft: '220px' }}>Proceed to payment</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Passenger;

// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../styles/passenger.css'; 

const Passenger = () => {

    const [passengerCount, setPassengerCount] = useState(1);
    const [passengerForms, setPassengerForms] = useState([{
        fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: ''
    }]);
    const [passenger_2, setPassenger2] = useState({
        fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: ''
    });
    const [totalPrice, setTotalPrice] = useState(0);
    
    const navigate = useNavigate();
    const location = useLocation();
    const { flight, price } = location.state || {};

    useEffect(() => {
        setTotalPrice(price);
    }, [price]);

    const addPassengerForm = () => {
        if (passengerCount < 2) {
            setTotalPrice(prevPrice => prevPrice * 2);
            setPassengerCount(prevCount => prevCount + 1);
            setPassengerForms(prevForms => [
                ...prevForms,
                { fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: '' }
            ]);
        } else {
            alert("Maximum passenger limit reached");
        }
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedForms = [...passengerForms];
        updatedForms[index][name] = value;
        setPassengerForms(updatedForms);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        for (const form of passengerForms) {
            if (!Object.values(form).every(value => value.trim() !== '')) {
                alert("Please fill in all fields.");
                return;
            }
        }
    
        // Create a payload for the first passenger and nest the second passenger's data inside `passenger2`
        const payload = passengerForms.map((form, index) => {
            const firstPassenger = {
                fullname: form.fullname,
                dob: form.dob,
                gender: form.gender,
                email: form.email,
                phoneNumber: form.phoneNumber,
                bookingClass: form.bookingClass,
                alternatePhone: form.alternatePhone,
                passengerAge: form.passengerAge,
                fromlocation: flight.fromLocation,
                tolocation: flight.toLocation,
                departuredate: flight.departureDate,
                returndate: flight.returnDate,
                class: flight.classType,
                price: totalPrice
            };
    
            // For the first passenger, we also attach the second passenger's details to the `passenger2` field
            if (passengerCount === 2) {
                firstPassenger.passenger2 = {
                    fullname: passengerForms[1].fullname,
                    dob: passengerForms[1].dob,
                    gender: passengerForms[1].gender,
                    email: passengerForms[1].email,
                    phoneNumber: passengerForms[1].phoneNumber,
                    bookingClass: passengerForms[1].bookingClass,
                    alternatePhone: passengerForms[1].alternatePhone,
                    passengerAge: passengerForms[1].passengerAge,
                };
            }
    
            return firstPassenger;
        });

        const new_data = payload[0];

        try {
            const response = await fetch('http://localhost:5000/auth/passenger', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(new_data) 
            });
    
            const data = await response.json();
            if (response.ok) {
                alert(data.msg);
                navigate('/payment', { state: { price: totalPrice } });
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Internal server error');
        }
    };

   

    return (
        <div className="passenger_body">
            <nav className="nav_bar">
                <div className="nav__logo">FLIGHT BOOKING</div>
                <ul className="nav__links">
                    <li className="link"><Link to="/home">Home</Link></li>
                    <li className="link"><Link to="/destinations">Popular Destinations</Link></li>
                    <li className="link"><Link to="/mybookings">MY Bookings</Link></li>
                    <li className="link"><a href="#about_footer">About</a></li>
                </ul>
                <Link to="/search"><button className="btn">Back</button></Link>
            </nav>
            <div className="passenger_container">
                <div className="passenger_header">
                    <h1>PASSENGER INFORMATION</h1>
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
