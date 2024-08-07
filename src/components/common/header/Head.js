import React from "react"
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <h1 style={{ color: '#F8F4E1' }}>FEASTFORWARD</h1>
          {/* <p style={{ color: '#999999' }}>Bridging Events and Needs, One Meal at a Time</p> */}
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head