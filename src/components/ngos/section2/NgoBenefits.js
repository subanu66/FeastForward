import React from 'react';

const NgoBenefits = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/images/ngosec/bene.jpeg"
          alt="NGO Benefits"
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <h2 style={styles.heading}>Benefits for NGOs</h2>
        <div style={styles.benefit}>
          <h3 style={styles.subheading}>Strategic Advantages</h3>
          <p style={styles.paragraph}>
            Partnering with our platform offers NGOs increased efficiency in managing food donations, enhanced visibility, and expanded reach to underserved communities.
          </p>
        </div>
        <div style={styles.benefit}>
          <h3 style={styles.subheading}>Recognition and Rewards</h3>
          <p style={styles.paragraph}>
            NGOs are recognized for their contributions through various rewards, including potential media features or awards, acknowledging their crucial role in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items at the start
    padding: '20px',
    backgroundColor: '#f8f4e1', // Light background for contrast
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // Ensure no content overflows
  },
  content: {
    flex: 1,
    paddingLeft: '20px', // Adjusted padding for the content
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  benefit: {
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '12px',
  },
  imageContainer: {
    flex: '0 0 40%', // Fixed width for the image container
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default NgoBenefits;
