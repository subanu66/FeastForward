import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
 
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/home'>HOME</Link>
            </li>
           
            <li>
              <Link to='/home'>ABOUT</Link>
            </li>
            <li>
              <Link to='/home'>NGOS</Link>
            </li>
            <li>
              <Link to='/home'>REGISTER</Link>
            </li>
            {/* <li>
              <Link to='/work'>BLOG</Link>
            </li>
            <li>
              <Link to='/team'>TEAM</Link>
            </li> */}
            <li>
              <Link to='/home'>CONTACT</Link>
            </li>
          </ul>
          <div className="start">
            <Link to="/loginmain">
            LOG IN
            </Link>
          </div>
         
        </nav>
      </header>
  </>
   )}

export default Header