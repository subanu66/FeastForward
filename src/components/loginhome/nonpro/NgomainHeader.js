import React, { useState } from "react"
import { Link } from "react-router-dom";
import NgomainHead from "./NgomainHead";
import "./NgomainHeader.css"
const NgomainHeader = () => {
    const [click, setClick] = useState(false)
 
    return (
      <>
        <NgomainHead />
        <header>
          <nav className='flexSB'>
            <ul className={click ? "mobilee-nav" : "flexSB "} onClick={() => setClick(false)}>
              <li>
                <Link to='/home'>HOME</Link>
              </li>
             
              <li>
                <Link to='/home'>DONORS</Link>
              </li>
              <li>
                <Link to='/home'>VOLUNTEERS</Link>
              </li>
              <li>
                <Link to='/home'>SERVICES</Link>
              </li>
              <li>
                <Link to='/home'>CONTACT</Link>
              </li>
            </ul>
            <div className="startt">
              <Link to="/">
              LOG OUT
              </Link>
            </div>
           
          </nav>
        </header>
    </>
     )
}

export default NgomainHeader
