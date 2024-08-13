import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Open.css';

const Open = () => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowButtons(true);
  };

  const handleSignup = () => {
    navigate('/register1'); // Navigate to the home page
  };

  const handleLogin = () => {
    navigate('/loginmain'); // Navigate to the Loginmain page
  };

  return (
    <div className="open-container">
      <div className="welcome-card">
        <h1>Welcome to SurplusShare</h1>
        <p>Connecting Surplus with Need</p>
        {!showButtons && (
          <button className="get-started-button" onClick={handleClick}>
            Get Started
          </button>
        )}
        {showButtons && (
          <div className="button-container">
            <button className="signup-button" onClick={handleSignup}>
              Signup
            </button>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Open;
