import React from 'react';
import { Link } from "react-router-dom";
const NgoRegistration = () => {
  return (
    <div style={styles.card}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="/images/ngosec/ngoregg.jpg" // Replace with your image path
            alt="NGO Registration"
            style={styles.image}
          />
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>NGO Registration</h2>
          <p style={styles.paragraph}>
            Register your NGO with us to be a part of a meaningful initiative that helps in reducing food wastage and supporting underserved communities. Fill out the registration form and join our network of committed partners.
          </p>
          <Link to="/signupngo"><button style={styles.button}>Register Now</button></Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '80%',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#F8F4E1',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flex: '0 0 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  content: {
    flex: 1,
    paddingLeft: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#543310',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default NgoRegistration;
