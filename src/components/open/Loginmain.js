import React from 'react';
import './Loginmain.css'; // Ensure this file includes styles for the card container and cards
import { Link } from "react-router-dom"
const Loginmain = () => {
  return (
    <div className="loginmain-container">
      <div className="card-container">
        <div className="card">
          <img src="/images/i4.png" alt="NGOs Profile" />
          <Link to="/login">
          <button className="card-button">NGOs</button>
          </Link>
        </div>
        <div className="card">
          <img src="/images/i4.png" alt="Food Donor Profile" />
          <Link to="/donorlogin">
          <button className="card-button">Food Donor</button>
          </Link>
        </div>
        <div className="card">
          <img src="/images/i4.png" alt="Volunteer Profile" />
          <Link to="/volunlogin">
          <button className="card-button">Volunteer</button>
          </Link>
        </div>
        <div className="card">
          <img src="/images/i4.png" alt="Admin Profile" />
          <Link to="/admin">
          <button className="card-button">Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginmain;
