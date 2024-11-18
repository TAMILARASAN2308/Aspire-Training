// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useEffect, useState } from "react";
import '../styles/style.css'; 
import AdminNav from "./AdminNav";

const AddedFlights = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/addedflights');
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
        console.error('Error fetching flights:', error);
      }
    };

    fetchBookings();
  }, []);

  const onDelete = async (flightId) => {
    try {
      const response = await fetch(`http://localhost:5000/auth/addedflights/delete/${flightId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete flight');
      }

      setRows((prevRows) => prevRows.filter((flight) => flight._id !== flightId));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    <div className="Home">
        <AdminNav/>
      <hr />
      <table className="myBooking">
        <tbody>
          {rows.map((flight) => (
            <tr key={flight._id} data-id={flight._id}>
              <td>
                <div>
                  <p>From</p>
                  <h3>{flight.fromLocation}</h3>
                </div>
              </td>
              <td>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    viewBox="0 0 25 25"
                  >
                    <path
                      style={{ fill: "#000" }}
                      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                      data-name="Right"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <div>
                  <p>To</p>
                  <h3>{flight.toLocation}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Depart Date</p>
                  <h3>{flight.departureDate}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Return Date</p>
                  <h3>{flight.returnDate}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Departure Time</p>
                  <h3>{flight.departureTime}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Arrival Time</p>
                  <h3>{flight.arrivalTime}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Flight Name</p>
                  <h3>{flight.flightName}</h3>
                </div>
              </td>
              <td>
                <div>
                  <p>Price</p>
                  <h3>{flight.ticketPrice}</h3>
                </div>
              </td>
              <td>
                <button onClick={() => onDelete(flight._id)} className="mybookings_cancel">
                  Delete Flight
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddedFlights;
