// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import '../styles/ticket.css';


const Ticket = () => {
  const { id ,status} = useParams(); 
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
    <div className="ticket-body">
      <nav className="navigation">
        <div className="logo-container">
          <span className="logo-title">FLIGHT BOOKING</span>
        </div>
        <div className="header-container">
          <span className="header-title">E-Ticket</span>
        </div>
      </nav>
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
            passengers.map((passenger, index) => (
              <table className="ticket-table" key={index}>
                <caption className="ticket-caption">TICKET INFORMATION</caption>
                <tbody>
                  <tr className="table-row-even">
                    <th>TICKET REFERENCE</th>
                    <td>{passenger.fid}</td>
                    <th>BOOKING DATE & TIME</th>
                    <td>15 MAY 24 &nbsp; & &nbsp; 1430</td>
                  </tr>
                  <tr className="table-row-odd">
                    <th>FLIGHT DATE</th>
                    <td>{passenger.departuredate}</td>
                    <th>CLASS</th>
                    <td>{passenger.bookingClass}</td>
                  </tr>
                  <tr className="table-row-even">
                    <th>EMAIL</th>
                    <td>{passenger.email}</td>
                    <th>MOBILE</th>
                    <td>{passenger.phoneNumber}</td>
                  </tr>
                  <tr className="table-row-odd">
                    <th>STATUS</th>
                    <td colSpan="3">{status}</td>
                  </tr>
                  <tr className="table-row-even">
                    <th colSpan="4">PASSENGER INFORMATION</th>
                  </tr>
                  <tr className="table-row-odd">
                    <th>S NO.</th>
                    <th>PASSENGER NAME</th>
                    <th>SEX</th>
                    <th>CO-PASSENGER NAME</th>
                  </tr>
                  <tr className="table-row-even">
                    <td>{passenger._id}</td>
                    <td>{passenger.fullname}</td>
                    <td>{passenger.gender}</td>
                    <td>{passenger.passenger2.fullname}</td>
                  </tr>
                  <tr className="table-row-odd">
                    <th colSpan="4">FLIGHT INFORMATION</th>
                  </tr>
                  <tr className="table-row-even">
                    <th>FLIGHT</th>
                    <th>DEPART/ARRIVE</th>
                    <th>PRICE</th>
                    <th></th>
                  </tr>
                  <tr className="table-row-odd">
                    <td>AIR INDIA</td>
                    <td>{passenger.departuredate} - {passenger.returndate}</td>
                    <td>{passenger.price}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            ))
          ) : (
            <p>No passenger details available.</p>
          )}
        </div>
      </main>
      <p className="ticket-footer">&#169; 2024 Tamilarasan Flight Inc. All rights reserved.</p>
    </div>
  );
};

export default Ticket;
