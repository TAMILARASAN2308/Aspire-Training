// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/search.css';

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { flights, fromLocation, toLocation, departureDate, returnDate, classType } = location.state || {};

    const handleBooking = (flight) => {
        navigate('/passenger', { state: { flight, price: flight.ticketPrice } });
    };

    return (
        <div className="search-page">
            <div className="search-container">
                <div className="place">
                    <div>
                        <p>From</p>
                        <h3 id="new_from">{fromLocation}</h3>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 25 25">
                            <path style={{ fill: '#fff' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
                        </svg>
                    </div>
                    <div>
                        <p>To</p>
                        <h3 id="new_to">{toLocation}</h3>
                    </div>
                </div>
                <div className="date">
                    <div>
                        <p>Depart</p>
                        <h3 id="new_departure">{departureDate}</h3>
                    </div>
                    <div className="return">
                        <p>Return</p>
                        <h3 id="new_return">{returnDate || 'N/A'}</h3>
                    </div>
                    <div>
                        <p>Class</p>
                        <h3 id="Economy">{classType}</h3>
                    </div>
                    <a href="/home">
                        <button type="button" className="search">Modify Search</button>
                    </a>
                </div>
            </div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Departure</th>
                        <th></th>
                        <th>Arrival</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {flights && flights.length > 0 ? (
                        flights.map(flight => (
                            <tr key={flight._id}>
                                <td>
                                    <div className="jet" style={{ display: 'flex', alignItems: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="45px" viewBox="0 0 256 256">
                                            <g style={{ fill: 'black' }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                                <path d="M 85.743 43.098 c -1.06 -0.395 -1.913 -1.124 -2.469 -2.106 c -1.394 -2.471 -3.564 -3.63 -7.039 -3.76 c -10.928 -0.406 -19.9 -0.557 -27.823 -0.428 L 23.137 21.453 c -1.029 -0.625 -2.21 -0.955 -3.414 -0.955 h -4.075 c -1.056 0 -1.968 0.603 -2.382 1.574 s -0.218 2.048 0.517 2.813 l 12.822 13.211 c -2.537 0.276 -5.054 0.597 -7.599 0.964 c -1.417 0.205 -2.874 -0.278 -3.904 -1.291 l -6.65 -6.534 c -1.108 -1.099 -2.577 -1.704 -4.137 -1.704 H 2.501 c -0.661 0 -1.27 0.301 -1.671 0.827 c -0.401 0.526 -0.531 1.193 -0.356 1.831 L 3.41 42.896 l 0.132 0.408 c 0.39 1.204 0.704 2.163 1.245 2.932 L 0.455 50.75 c -0.453 0.472 -0.58 1.166 -0.323 1.768 c 0.257 0.603 0.845 0.991 1.5 0.991 h 1.615 c 0.588 0 1.165 -0.161 1.668 -0.467 l 6.593 -4.025 c 5.56 1.297 10.7 2.094 15.154 2.681 L 13.78 65.118 c -0.731 0.762 -0.927 1.838 -0.513 2.81 c 0.414 0.971 1.327 1.574 2.382 1.574 h 4.075 c 1.204 0 2.385 -0.331 3.414 -0.956 l 25 -15.183 h 35.981 c 0.106 0 0.209 -0.017 0.305 -0.047 c 5.008 -0.438 5.577 -3.815 5.577 -5.323 C 89.999 45.706 87.862 43.886 85.743 43.098 z M 15.223 23.497 c -0.244 -0.254 -0.163 -0.532 -0.117 -0.64 c 0.046 -0.108 0.191 -0.359 0.543 -0.359 h 4.075 c 0.838 0 1.659 0.23 2.375 0.665 l 22.598 13.725 c -5.553 0.16 -10.624 0.473 -15.557 0.95 L 15.223 23.497 z M 83.294 51.363 H 47.992 L 25.465 66.284 c -0.716 0.434 -1.537 0.665 -2.375 0.665 h -4.075 c -0.353 0 -0.497 -0.251 -0.543 -0.359 c -0.046 -0.108 -0.127 -0.387 0.117 -0.64 l 22.898 -23.518 c 8.41 -0.968 18.258 -1.264 29.581 -0.876 c 2.68 0.1 4.147 0.887 5.15 2.679 c 0.844 1.496 2.145 2.622 3.72 3.228 C 83.853 49.46 83.97 50.827 83.294 51.363 z" />
                                            </g>
                                        </svg>
                                        <h3 style={{ marginLeft: '20px', color: 'black', fontSize: '20px' }}>{flight.flightName}</h3>
                                    </div>
                                </td>
                                <td>
                                    <h2>{new Date(flight.departureDate).toLocaleString()}</h2>
                                    <p>&nbsp;&nbsp;&nbsp;{flight.fromLocation}</p>
                                </td>
                                <td>
    <svg width="200" height="80" viewBox="0 0 256 256" style={{ fill: 'rgb(0,0,0)', marginTop:"40px" ,marginLeft: '40px'}}>
        <path d="M 14.347 59.348 c -0.384 0 -0.768 -0.146 -1.061 -0.439 L 0.439 46.061 c -0.586 -0.586 -0.586 -1.536 0 -2.121 l 12.847 -12.847 c 0.586 -0.586 1.535 -0.586 2.121 0 c 0.586 0.585 0.586 1.536 0 2.121 L 3.621 45 l 11.787 11.787 c 0.586 0.586 0.586 1.535 0 2.121 C 15.115 59.201 14.731 59.348 14.347 59.348 z" />
        <path d="M 88.5 46.5 h -87 C 0.671 46.5 0 45.829 0 45 s 0.671 -1.5 1.5 -1.5 h 87 c 0.828 0 1.5 0.671 1.5 1.5 S 89.328 46.5 88.5 46.5 z" />
        <path d="M 75.652 59.348 c -0.384 0 -0.768 -0.146 -1.061 -0.439 c -0.586 -0.586 -0.586 -1.535 0 -2.121 L 86.379 45 L 74.592 33.213 c -0.586 -0.585 -0.586 -1.535 0 -2.121 s 1.535 -0.586 2.121 0 l 12.848 12.847 C 89.842 44.221 90 44.602 90 45 s -0.158 0.779 -0.439 1.061 L 76.713 58.908 C 76.42 59.201 76.036 59.348 75.652 59.348 z" />
    </svg>
                                 </td>

                                <td>
                                    <h2>{new Date(flight.returnDate).toLocaleString()}</h2>
                                    <p>&nbsp;&nbsp;&nbsp;{flight.toLocation}</p>
                                </td>
                                <td>
                                    <h2>₹{flight.ticketPrice}</h2>
                                </td>
                                <td>
                                    <button type="button" className="book" onClick={() => handleBooking(flight)}>
                                        Book
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>No Flights Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Search;
