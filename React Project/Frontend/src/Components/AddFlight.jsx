// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState } from 'react';
import '../styles/addflight.css';
import AdminNav from "./AdminNav";

const AddFlight = () => {
  const [formData, setFormData] = useState({
    fromLocation: "",
    toLocation: "",
    departureDate: "",
    returnDate: "",
    departureTime: "",
    arrivalTime: "",
    flightName: "",
    ticketPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      departureTime,
      arrivalTime,
      flightName,
      ticketPrice,
    } = formData;

    if (
      !fromLocation ||
      !toLocation ||
      !departureDate ||
      !returnDate ||
      !departureTime ||
      !arrivalTime ||
      !flightName ||
      !ticketPrice
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/addflights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.msg); 
      } else {
        alert(data.msg); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Internal server error');
    }
  };

  return (
    <>
      <div className="addflight_body">
        <AdminNav />
        <div className="addflight_container">
          <div className="head_info">
            <div className="addflight_header">
              <h1 id="addflightHeader">FLIGHT INFORMATION</h1>
            </div>
            <div className="addflight_info">
              <form id="my_form" className="addflight_form" onSubmit={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="fromLocation">From Location</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="fromLocation"
                          id="from_location"
                          placeholder="Enter from location"
                          value={formData.fromLocation}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td>
                        <label htmlFor="toLocation">To Location</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="toLocation"
                          id="to_location"
                          placeholder="Enter to location"
                          value={formData.toLocation}
                          onChange={handleChange}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="departureDate">Departure Date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          name="departureDate"
                          id="departure_date"
                          value={formData.departureDate}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td>
                        <label htmlFor="returnDate">Return Date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          name="returnDate"
                          id="return_date"
                          value={formData.returnDate}
                          onChange={handleChange}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="departureTime">Departure Time</label>
                      </td>
                      <td>
                        <input
                          type="time"
                          name="departureTime"
                          id="departure_time"
                          value={formData.departureTime}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td>
                        <label htmlFor="arrivalTime">Arrival Time</label>
                      </td>
                      <td>
                        <input
                          type="time"
                          name="arrivalTime"
                          id="arrival_time"
                          value={formData.arrivalTime}
                          onChange={handleChange}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="flightName">Flight Name</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="flightName"
                          id="flight_name"
                          placeholder="Enter flight name"
                          value={formData.flightName}
                          onChange={handleChange}
                          required
                        />
                      </td>
                      <td>
                        <label htmlFor="ticketPrice">Ticket Price</label>
                      </td>
                      <td>
                        <input
                          type="number"
                          name="ticketPrice"
                          id="ticket_price"
                          placeholder="Enter ticket price"
                          value={formData.ticketPrice}
                          onChange={handleChange}
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="addflight_btn">
                  <button type="submit" id="submitBtn" className="btn">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFlight;
