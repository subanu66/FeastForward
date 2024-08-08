import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const imageUrl = '/images/contact.jpg'; // Replace with your image path
  const heading = "About Us";
  return (
    <>
    <div className="about-pagea">
      <Back backgroundImage='/images/bk1.jpg'
      heading={heading} />
      </div>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img src={imageUrl} alt="Contact Location" className="contact-image" />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
