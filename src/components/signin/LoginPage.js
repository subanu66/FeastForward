import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img src="/images/sign/userlg1.jpeg" alt="Login" />
        </div>
        <div className="login-right">
          <h1>Welcome to FeastForward!</h1>
          <p>Please sign in to your account</p>
          
          <div className="login-fields">
            <div className="input-container">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-container">
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

          <Link to="/"><button className="signin-button">Sign In</button></Link>

          <p className="signup-text">
            New to our platform? <a href="/register1">Create account</a>
          </p>

          <div className="divider">
            <hr /> <span>or</span> <hr />
          </div>

          {/* <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
          </div> */}
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
