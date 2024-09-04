// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Search from './Components/Search';
import Passenger from './Components/Passenger';
import Payment from './Components/Payment';
import ConfirmBooking from './Components/ConfirmBooking';
import DestinationsPage from './Components/DestinationsPage';
import MyBookings from './Components/MyBookings';
import Ticket from './Components/Ticket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/ticket/:id" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
