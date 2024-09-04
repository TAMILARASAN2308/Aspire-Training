// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles/style.css'; 

const Login = () => {
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
      });

      const data = await response.json();
      if (response.ok) {
        setMsg(data.msg);
        setMsgType(data.msg_type);
        navigate('/home'); 
      } else {
        setMsg(data.msg);
        setMsgType(data.msg_type);
      }
    } catch (error) {
      console.error('Error:', error);
      setMsg('Internal server error');
      setMsgType('error');
    }
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit} id="form">
        <h3 style={{ textAlign: 'center', fontFamily: 'Lobster, cursive', fontSize: '30px', color: '#000' }}>
          FLIGHT BOOKING
        </h3>
        <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#000' }}>LOGIN</h1>
        {msg && <p className={msgType}>{msg}</p>} 
        <div className="input-group">
          <input type="text" name="userName" id="username" placeholder="Username" required />
        </div>
        <div className="input-group">
          <input type="password" name="password" id="password" placeholder="Password" required />
        </div>
        <button className="login" type="submit">LOGIN</button>
        <p className="signup_button">Not a member? <Link to="/register">Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
