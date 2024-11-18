// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'; 
import Nav from './Nav';

const MyBookings = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/flightbookings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setRows(data);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/auth/cancel/${id}`, {
            method: 'PUT', 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedRows = rows.map(row => 
            row._id === id ? { ...row, STATUS: 'Cancelled' } : row
        );
        setRows(updatedRows);

    } catch (error) {
        console.error('Error cancelling booking:', error);
    }
};


  return (
    <div className="Home">
      <Nav />
      <hr />
      <table className="myBooking">
        <tbody>
          {rows.map((row, index) => (
            <tr key={row._id} data-id={row._id}>
              <td>
                <div>
                  <p>From</p>
                  <h3 id="new_from">{row.FROMLOCATION}</h3>
                </div>
              </td>
              <td>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 25 25">
                    <path style={{ fill: '#000' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
                  </svg>
                </div>
              </td>
              <td>
                <div>
                  <p>To</p>
                  <h3 id="new_to">{row.TOLOCATION}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Depart</p>
                  <h3 id="new_departure">{new Date(row.DEPARTUREDATE).toLocaleDateString()}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Return</p>
                  <h3 id="new_return">{row.RETURNDATE ? new Date(row.RETURNDATE).toLocaleDateString() : 'N/A'}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Class</p>
                  <h3 id="Economy">{row.CLASS}</h3>
                </div>
              </td>
              <td>
                <div>
                  <h3 style={{ color: row.STATUS === 'Confirmed' ? 'green' : 'red' }} className="bookings_status">{row.STATUS}</h3>
                </div>
              </td>
              <td>
                <Link to={`/ticket/${index + 1}/${row.STATUS }`}>
                  <button type="button" className="mybookings_details">Details</button>
                </Link>
                <button 
                  type="button" 
                  className="mybookings_cancel"
                  onClick={() => handleCancelBooking(row._id)}
                >
                  Cancel Booking
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
