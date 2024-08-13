import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const imageUrl = '/images/contact.jpg'; // Replace with your image path
  const heading = "Contact";
  const description="At SurplusShare, we're dedicated to connecting surplus food with those in need, making a tangible impact in our communities. "
  const timelineItems = [
    { title: 'Email: support@surplusshare.org' },
    { title: 'Phone: +1-800-123-4567'},
    { title: 'Address: 1234 Community Lane, Cityville, ST, 12345'},
    
  ]

  return (
    <>
    <div className="about-pagea">
      <Back  backgroundGradient='linear-gradient(to right, #C6FFDD, #FFD194)'
      heading={heading}
      description={description}
        timelineItems={timelineItems} />
      </div>
      <div className="col"></div>
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
