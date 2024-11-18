// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'; 

const Register = () => {
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, email, password, confirmPassword })
      });

      const data = await response.json();
      if (response.ok) {
        setMsg(data.msg);
        setMsgType(data.msg_type);
      } else {
        setMsg(data.msg);
        setMsgType(data.msg_type);
      }
    } catch (error) {
      console.log(error);
      console.error('Error:', error);
      setMsg('Internal server error');
      setMsgType('error');
    }
  };

  return (
    <div className="formcontainer-2">
      <form onSubmit={handleSubmit} className="form2">
        <h3 style={{ textAlign: 'center', fontFamily: 'Lobster, cursive', fontSize: '30px', color: '#000' }}>
          FLIGHT BOOKING
        </h3>
        <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#000' }}>SIGNUP</h1>
        {msg && <p className={msgType}>{msg}</p>}
        <input type="text" name="userName" id="userName" placeholder="Username" required />
        <input type="email" name="email" id="email" placeholder="Email" required />
        <input type="password" name="password" id="password" placeholder="Password" required />
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
        <button className="signup" type="submit">SIGNUP</button>
        <p className="login_here">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
