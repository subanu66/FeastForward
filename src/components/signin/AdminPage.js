import React, { useState } from 'react';
import './AdminPage.css';
import { Link } from "react-router-dom";


const AdminPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-left">
          <h1>Welcome to FeastForward!</h1>
          <p>Please sign in to your account</p>
          <div className="input-container">
            <input type="email" placeholder="Email" required />
            <div className="input-with-icon">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                required
              />
              <i
                className={`fa ${passwordShown ? "fa-eye" : "fa-eye-slash"} password-toggle`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <Link to="/adminside"><button className="signin-button">Sign In</button></Link>
        </div>  
        <div className="admin-right">
          <img src="/images/sign/userlg1.jpeg" alt="Admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
