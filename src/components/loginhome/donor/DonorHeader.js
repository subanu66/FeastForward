import React, { useState } from "react"
import { Link } from "react-router-dom";
import DonarHead from "./DonarHead";
import "./DonorHeader.css"
const DonorHeader = () => {
    const [click, setClick] = useState(false)
 
    return (
      <>
        <DonarHead />
        <header>
          <nav className='flexSB'>
            <ul className={click ? "mobilee-nav" : "flexSB "} onClick={() => setClick(false)}>
              <li>
                <Link to='/home'>HOME</Link>
              </li>
             
              <li>
                <Link to='/home'>DONATION REQUEST</Link>
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

export default DonorHeader
