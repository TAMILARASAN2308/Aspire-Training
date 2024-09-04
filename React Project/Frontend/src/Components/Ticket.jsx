// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ticket.css';

const Ticket = () => {
  const { id } = useParams(); 
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const fetchPassengerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/auth/ticket/${id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setPassengers(data);
      } catch (error) {
        console.error('Error fetching passenger details:', error);
      }
    };
    
    fetchPassengerDetails();
  }, [id]);

  return (
    <div>
      <nav className="ticket-nav">
        <div className="ticket-logo">
          <span>FLIGHT BOOKING</span>
        </div>
        <div className="ticket-header">
          <span>E-TICKET</span>
        </div>
      </nav>
      <hr className="ticket-divider" />
      <main className="ticket-main">
        <div className="ticket-info">
          <h3>Important Information</h3>
          <ul>
            <li>This is your E-Ticket Itinerary. You must bring it to the airport for check-in, and it is recommended you retain a copy for your records.</li>
            <li>Each passenger traveling needs a printed copy of this document for immigration, customs, airport security checks, and duty-free purchases.</li>
            <li>Economy Class passengers should report to airline check-in desks 3 hours prior to departure of all flights. First and Business Class passengers should report to airline check-in desks no later than 1 hour prior to departure. Boarding for your flight begins at least 35 minutes before your scheduled departure time. Gates close 15 minutes prior to departure.</li>
          </ul>
        </div>
        <div className="ticket-table-container">
          {passengers.length > 0 ? (
            <table className="ticket-table">
              <thead>
                <tr className="ticket-header-row">
                  <td colSpan="2">PASSENGER DETAILS</td>
                </tr>
                <tr className="ticket-header-row">
                  <th>Full Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Booking Class</th>
                  <th>Alternate Phone</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {passengers.map((passenger, index) => (
                  <tr className="ticket-info-row" key={index}>
                    <td>{passenger.fullname}</td>
                    <td>{passenger.dob}</td>
                    <td>{passenger.gender}</td>
                    <td>{passenger.email}</td>
                    <td>{passenger.phoneNumber}</td>
                    <td>{passenger.bookingClass}</td>
                    <td>{passenger.alternatePhone}</td>
                    <td>{passenger.passengerAge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No passenger details available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Ticket;
