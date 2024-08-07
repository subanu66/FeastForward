import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
           
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/ngos'>NGOS</Link>
            </li>
            <li>
              <Link to='/register'>REGISTER</Link>
            </li>
            {/* <li>
              <Link to='/work'>BLOG</Link>
            </li>
            <li>
              <Link to='/team'>TEAM</Link>
            </li> */}
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
          <div className="start" onClick={togglePopup}>
            LOG IN
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
      {showPopup && (
        <>
          <div className="popup-overlay" onClick={togglePopup}></div>
          <div className="popup">
            <div className="close-popup" onClick={togglePopup}>
              &times;
            </div>
            <div className="popup-container">
              <i className="fa fa-user-circle"></i>
              <div className="button" onClick={() => window.location.href='/admin'}>Admin</div>
            </div>
            <div className="popup-container">
              <i className="fa fa-user"></i>
              <div className="button" onClick={() => window.location.href='/login'}>User</div>
            </div>
          </div>
        </>
  )
}
  </>
   )}

export default Header