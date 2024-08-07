import React from 'react';

const WhyChooseUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/whyus.jpg"
          alt="Why Choose Us"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>Why Food Bridge?</h2>
        <p style={styles.text}>
          Food Bridge offers a unique approach to food redistribution compared to traditional systems. 
          Unlike conventional methods, which can be fragmented and inefficient, Food Bridge integrates real-time tracking 
          and a unified platform that connects all stakeholders including donors, volunteers, and NGOs. This ensures 
          that surplus food is efficiently tracked and managed from donation to distribution.
        </p>
        <p style={styles.text}>
          Our platform addresses common inefficiencies by providing a streamlined process that enhances the impact of 
          food distribution. With features like the real-time tracking system and a rewards program for participants, 
          Food Bridge not only optimizes food distribution but also motivates more people to get involved and make a difference.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    margin: '20px 0',
  },
  leftSide: {
    flex: '0.4',
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  rightSide: {
    flex: '0.6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
};

export default WhyChooseUs;
