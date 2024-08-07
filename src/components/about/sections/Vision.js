import React from 'react';

const Vision = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/vis.jpg"
          alt="Our Vision"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>Our Vision</h2>
        <p style={styles.text}>
          At Food Bridge, we are committed to continuously enhancing our platform to make a greater impact. Here’s what we envision for the future:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>**Expanding to New Regions**: We plan to extend our services to more cities and regions, reaching a larger audience and reducing food wastage on a broader scale.</li>
          <li style={styles.listItem}>**Incorporating More Features**: We aim to introduce new features that improve the user experience, such as advanced tracking, automated notifications, and enhanced reporting tools.</li>
          <li style={styles.listItem}>**Increasing Scale of Operations**: By partnering with more NGOs and volunteers, we hope to scale up our operations and make a significant difference in food redistribution efforts.</li>
        </ul>
        <p style={styles.text}>
          Our vision is to create a seamless, efficient, and impactful platform that transforms the way surplus food is managed and distributed. We are excited about the future and the opportunities it holds for improving our communities.
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
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  list: {
    margin: '20px 0',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default Vision;
