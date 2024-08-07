import React from 'react';

const Impact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/imp.jpg"
          alt="Our Impact"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>Our Impact</h2>
        <div style={styles.statistics}>
          <p style={styles.statistic}>Food Saved: <strong>10,000 kg</strong></p>
          <p style={styles.statistic}>Meals Provided: <strong>20,000</strong></p>
          <p style={styles.statistic}>Participants: <strong>500+</strong></p>
        </div>
        <div style={styles.testimonials}>
          <h3 style={styles.subHeading}>What People Are Saying</h3>
          <p style={styles.text}>
            "Food Bridge has truly made a difference in our community. The streamlined process ensures that surplus food 
            reaches those in need efficiently. We're proud to be a part of this initiative." - <em>Jane Doe, Donor</em>
          </p>
          <p style={styles.text}>
            "The impact of Food Bridge on our organization has been remarkable. We have seen a significant increase in 
            the amount of food we can distribute thanks to their efficient system." - <em>John Smith, NGO Coordinator</em>
          </p>
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
  statistics: {
    marginBottom: '20px',
  },
  statistic: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  testimonials: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
};

export default Impact;
