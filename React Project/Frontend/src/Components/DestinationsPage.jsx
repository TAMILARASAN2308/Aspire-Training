// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

import React from 'react';
import '../styles/DestinationsPage.css'; 
import '../styles/style.css'; 
import Nav from './Nav';

const DestinationsPage = () => {
  return (
    <div className="Home">
      <Nav></Nav>
      <div className="destinations_container" style={{ marginTop: '90px' }}>
        <div>
          <img src="/images/paris.jpg" alt="Paris" />
          <h2>Paris</h2>
        </div>
        <div>
          <img src="/images/new_york.jpg" alt="New York" />
          <h2>New York</h2>
        </div>
        <div>
          <img src="/images/tokyo.jpg" alt="Tokyo" />
          <h2>Tokyo</h2>
        </div>
        <div>
          <img src="/images/london.jpg" alt="London" />
          <h2>London</h2>
        </div>
        <div>
          <img src="/images/rome.jpg" alt="Rome" />
          <h2>Rome</h2>
        </div>
        <div>
          <img src="/images/dubai.jpg" alt="Dubai" />
          <h2>Dubai</h2>
        </div>
        <div>
          <img src="/images/australia.jpg" alt="Australia" />
          <h2>Australia</h2>
        </div>
        <div>
          <img src="/images/india.jpg" alt="India" />
          <h2>India</h2>
        </div>
        <div>
          <img src="/images/korea.jpg" alt="Korea" />
          <h2>Korea</h2>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
