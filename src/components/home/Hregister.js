import React from "react";
import "../work/work.css";
import { Link } from "react-router-dom";
const Hregister = () => {
  return (
    <>
      <section className='registerSection'>
        <h2 className="heading1">REGISTER</h2>
        <h1 className="heading2">JOIN THE MOVEMENT: MAKE A DIFFERENCE TODAY</h1>

        <div className='containerWrapperR'>
          <div className='containerR'>
            <div className='iconR'>
              <img src="/images/reg/r1.png" alt="Icon 1" /> {/* Example icon image */}
            </div>
            <div className='descriptionR'>
              <p>Join the Network: Strengthen Communities Through Collective Action</p>
            </div>
            <div className='buttonR'>
            <Link to="/signupngo">
              <button>Register</button>
            </Link>
            </div>
          </div>

          <div className='containerR'>
            <div className='iconR'>
              <img src="/images/reg/r2.png" alt="Icon 2" /> {/* Example icon image */}
            </div>
            <div className='descriptionR'>
              <p>Share the Surplus: Nourish Lives with Every Donation</p>
            </div>
            <div className='buttonR'>
            <Link to="/signupdonor">
              <button>Register</button>
            </Link>
            </div>
          </div>

          <div className='containerR'>
            <div className='iconR'>
              <img src="/images/reg/r3.png" alt="Icon 3" /> {/* Example icon image */}
            </div>
            <div className='descriptionR'>
              <p>Be the Change: Make an Impact Through Hands-On Help!</p>
            </div>
            <div className='buttonR'>
            <Link to="/signupvolun">
              <button>Register</button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};  

export default Hregister;
