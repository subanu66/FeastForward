import React from 'react';

const GetInvolved = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/invo.jpg"
          alt="Get Involved"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>Get Involved</h2>
        <p style={styles.text}>
          Join us in our mission to reduce food waste and help those in need. There are many ways you can contribute:
        </p>
        <div style={styles.callToAction}>
          <h3 style={styles.subHeading}>Sign Up as a Donor or Volunteer</h3>
          <p style={styles.text}>
            Whether you're looking to donate surplus food or volunteer your time, we welcome your participation. Sign up today to make a difference in your community!
          </p>
          <a href="/sign-up" style={styles.button}>Sign Up</a>
        </div>
        <div style={styles.callToAction}>
          <h3 style={styles.subHeading}>Partner with Us</h3>
          <p style={styles.text}>
            NGOs play a crucial role in our mission. Partner with Food Bridge to help us reach more people and enhance our impact. Contact us to explore partnership opportunities.
          </p>
          <a href="/contact" style={styles.button}>Partner with Us</a>
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
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  callToAction: {
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    margin: '10px 0',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default GetInvolved;
