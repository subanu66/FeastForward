import React, { useState } from 'react';

const HowItWorks = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    display: 'flex',
    borderRadius: '10px',
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '20px 0',
    padding: '20px',
    background: '#F8F4E1',
    width:'90%',
    marginLeft:'70px',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardImageStyles = {
    flex: '0.4',
    paddingRight: '20px'
  };

  const cardImageImgStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
  };

  const cardContentStyles = {
    flex: '0.6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const cardContentH2Styles = {
    fontSize: '25px',
    marginBottom: '20px',
    
  };

  const cardContentDivStyles = {
    marginBottom: '20px'
  };

  const cardContentH3Styles = {
    fontSize: '18px',
    marginBottom: '10px',
    
  };

  const cardContentPStyles = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
    color:'#543310'
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardImageStyles}>
        <img
          src="/images/absec/hiw.jpg"
          alt="How It Works"
          style={cardImageImgStyles}
        />
      </div>
      <div style={cardContentStyles}>
        <h2 style={cardContentH2Styles}>How It Works</h2>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>Registration</h3>
          <p style={cardContentPStyles}>Event organizers, individuals, and volunteers register on the platform.</p>
        </div>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>Donation Process</h3>
          <p style={cardContentPStyles}>How surplus food is listed and tracked by donors.</p>
        </div>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>Volunteer Involvement</h3>
          <p style={cardContentPStyles}>How volunteers collect, deliver, or cook the food.</p>
        </div>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>Distribution</h3>
          <p style={cardContentPStyles}>Explain the "7 o'clock scheme" and other distribution methods.</p>
        </div>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>Point System</h3>
          <p style={cardContentPStyles}>Detail how points are earned and redeemed by donors and volunteers.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
