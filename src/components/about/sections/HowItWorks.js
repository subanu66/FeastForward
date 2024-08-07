import React from 'react';
const HowItWorks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/hiw.jpg"
          alt="How It Works"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>How It Works</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <h3 style={styles.subHeading}>Registration</h3>
            <p style={styles.text}>Event organizers, individuals, and volunteers register on the platform.</p>
          </div>
          <div style={styles.timelineItem}>
            <h3 style={styles.subHeading}>Donation Process</h3>
            <p style={styles.text}>How surplus food is listed and tracked by donors.</p>
          </div>
          <div style={styles.timelineItem}>
            <h3 style={styles.subHeading}>Volunteer Involvement</h3>
            <p style={styles.text}>How volunteers collect, deliver, or cook the food.</p>
          </div>
          <div style={styles.timelineItem}>
            <h3 style={styles.subHeading}>Distribution</h3>
            <p style={styles.text}>Explain the "7 o'clock scheme" and other distribution methods.</p>
          </div>
          <div style={styles.timelineItem}>
            <h3 style={styles.subHeading}>Point System</h3>
            <p style={styles.text}>Detail how points are earned and redeemed by donors and volunteers.</p>
          </div>
        </div>
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
  timeline: {
    listStyleType: 'none',
    padding: 0,
  },
  timelineItem: {
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
};

export default HowItWorks;
