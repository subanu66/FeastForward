import React, { useState } from "react"
import VolunteerHead from './VolunteerHead'
import { Link } from "react-router-dom";
import "./VolunteerHeader.css"
const VolunteerHeader = () => {
    const [click, setClick] = useState(false)
 
    return (
      <>
        <VolunteerHead />
        <header>
          <nav className='flexSB'>
            <ul className={click ? "mobilee-nav" : "flexSB "} onClick={() => setClick(false)}>
              <li>
                <Link to='/'>HOME</Link>
              </li>
             
              <li>
                <Link to=''>POINTS</Link>
              </li>
              <li>
                <Link to=''>SERVICES</Link>
              </li>
              <li>
                <Link to=''>CONTACT</Link>
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

export default VolunteerHeader
