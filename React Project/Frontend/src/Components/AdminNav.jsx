// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React from 'react'
import '../styles/style.css';
import { Link } from 'react-router-dom';

function AdminNav() {
  return (
    <div>
        <nav className="nav_bar">
        <div className="nav__logo">FLIGHT BOOKING</div>
        <ul className="nav__links">
          <li className="link"><Link to="/admin">Home</Link></li>
          <li className="link"><Link to="/addflight">Add Flights</Link></li>
          <li className="link"><Link to="/addedflights">Added Flights</Link></li>
          <li className="link"><a href="bookingsdetails">Bookings Details </a></li>
        </ul>
        <Link to="/"><button className="btn">LOGOUT</button></Link>
      </nav>
    </div>
  )
}

export default AdminNav