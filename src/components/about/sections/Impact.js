import React, { useState } from 'react';

const Impact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    display: 'flex',
    borderRadius: '10px',
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '20px 0',
    padding: '20px',
    width: '90%',
    marginLeft: '70px',
    backgroundColor: '#F8F4E1', 
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardImageStyles = {
    flex: '0.4',
    paddingRight: '20px',
  };

  const cardImageImgStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    transition: 'none', // Remove any transition effect on the image
  };

  const cardContentStyles = {
    flex: '0.6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const cardContentH2Styles = {
    fontSize: '25px',
    marginBottom: '20px',
  };

  const cardContentPStyles = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
    color:'#543310'
  };

  const cardContentDivStyles = {
    marginBottom: '20px',
  };

  const cardContentH3Styles = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const cardContentStrongStyles = {
    fontWeight: 'bold',
  };

  const cardContentEmStyles = {
    fontStyle: 'italic',
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardImageStyles}>
        <img
          src="/images/absec/imp.jpg"
          alt="Our Impact"
          style={cardImageImgStyles}
        />
      </div>
      <div style={cardContentStyles}>
        <h2 style={cardContentH2Styles}>Our Impact</h2>
        <div style={cardContentDivStyles}>
          <p style={cardContentPStyles}>Food Saved: <strong style={cardContentStrongStyles}>10,000 kg</strong></p>
          <p style={cardContentPStyles}>Meals Provided: <strong style={cardContentStrongStyles}>20,000</strong></p>
          <p style={cardContentPStyles}>Participants: <strong style={cardContentStrongStyles}>500+</strong></p>
        </div>
        <div style={cardContentDivStyles}>
          <h3 style={cardContentH3Styles}>What People Are Saying</h3>
          <p style={cardContentPStyles}>"Food Bridge has truly made a difference in our community. The streamlined process ensures that surplus food 
            reaches those in need efficiently. We're proud to be a part of this initiative." - <em style={cardContentEmStyles}>Jane Doe, Donor</em>
          </p>
          <p style={cardContentPStyles}>"The impact of Food Bridge on our organization has been remarkable. We have seen a significant increase in 
            the amount of food we can distribute thanks to their efficient system." - <em style={cardContentEmStyles}>John Smith, NGO Coordinator</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
