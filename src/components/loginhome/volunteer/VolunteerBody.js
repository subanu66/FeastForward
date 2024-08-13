import React from 'react';

const VolunteerBody = () => {
  // Retrieve user data from localStorage
//   const user = JSON.parse(localStorage.getItem('user'));
  const userName =  'Volunteer'; // Default to 'Volunteer' if no user data

  return (
    <div style={styles.containerv}>
      <div style={styles.profileContainer}>
        <img 
          src="./images/man.png" 
          alt="Profile" 
          style={styles.profileImage} 
        />
      </div>
      <div style={styles.welcomeContainer}>
        <h1 style={styles.welcomeMessage}>Welcome, {userName}!</h1>
        <p style={styles.description}>
          As a dedicated volunteer, you play a crucial role in connecting surplus food with those in need. Use this dashboard to manage your activities, view tasks, and see the impact of your efforts.
        </p>
        <p style={styles.description}>
          Thank you for helping us make a meaningful difference. Let’s create positive change together!
        </p>
      </div>
    </div>
  );
};

const styles = {
  containerv: {
    backgroundImage: 'url(path-to-your-background-image.jpg)',
    backgroundSize: 'cover',
    background: 'linear-gradient(to right, #C6FFDD, #FFD194)',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  },
  profileContainer: {
    position: 'absolute',
    right: '20px',
    top: '40%',
    marginRight: '65%',    
    transform: 'translateY(-50%)',
  },
  profileImage: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginLeft:'20%'
  },
  welcomeContainer: {
    textAlign: 'center',
    marginLeft:'25%',
  },
  welcomeMessage: {
    fontSize: '36px',
    color: '#543310',
    marginTop: '-110px',
  },
  description: {
    fontSize: '18px',
    color: '#543310',
    maxWidth: '600px',
    marginTop: '20px',
  },
};

export default VolunteerBody;
