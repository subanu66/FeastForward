import React from 'react';

const NgoRegistration = () => {
  return (
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
        <button style={styles.button}>Register Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f4e1',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
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
    flex: '1',
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
