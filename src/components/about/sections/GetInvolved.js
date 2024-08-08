import React,{useState} from 'react';

const GetInvolved = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Define styles as JavaScript objects
  const cardStyle = {
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F8F4E1',
    margin: '20px',
    width: '90%',
    marginLeft: '70px',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardImageStyle = {
    flex: '40%',
    overflow: 'hidden',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const cardContentStyle = {
    flex: '60%',
    padding: '25px',
    textAlign: 'left',
  };

  const heading2Style = {
    fontSize: '25px',
    marginBottom: '20px',
    color: 'black',
  };

  const heading3Style = {
    fontSize: '18px',
    margin: '10px 0',
    color: 'black',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#543310',
    margin: '5px 0',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    marginTop: '10px',
    borderRadius: '5px',
    backgroundColor: '#543310',
    color: '#F8F4E1',
    textDecoration: 'none',
    textAlign: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#F8F4E1',
    color:'#543310'
  };

  return (
    <div style={cardStyle}
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div style={cardImageStyle}>
        <img
          src="/images/absec/invo.jpg"
          alt="Get Involved"
          style={imgStyle}
        />
      </div>
      <div style={cardContentStyle}>
        <h2 style={heading2Style}>Get Involved</h2>
        <p style={paragraphStyle}>Join us in our mission to reduce food waste and help those in need. There are many ways you can contribute:</p>
        <div>
          <h3 style={heading3Style}>Sign Up as a Donor or Volunteer</h3>
          <p style={paragraphStyle}>Whether you're looking to donate surplus food or volunteer your time, we welcome your participation. Sign up today to make a difference in your community!</p>
          <a href="/sign-up" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>Sign Up</a>
        </div>
        <div>
          <h3 style={heading3Style}>Partner with Us</h3>
          <p style={paragraphStyle}>NGOs play a crucial role in our mission. Partner with Food Bridge to help us reach more people and enhance our impact. Contact us to explore partnership opportunities.</p>
          <a href="/contact" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>Partner with Us</a>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
