import React from 'react';

const NgoBody = () => {
    return (
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <img 
            src="./images/man.png" 
            alt="Profile" 
            style={styles.profileImage} 
          />
        </div>
        <div style={styles.welcomeContainer}>
          <h1 style={styles.welcomeMessage}>Welcome to SurplusShare</h1>
          <p style={styles.description}>
            As a part of SurplusShare, our NGO is dedicated to bridging the gap between surplus food and those in need. Here, you can manage food donation requests, allocate volunteers, and track the impact of your services. Let’s make a difference together.
          </p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      backgroundImage: 'url(path-to-your-background-image.jpg)',
      backgroundSize: 'cover',
      background: 'linear-gradient(to right, #C6FFDD, #FFD194)',
      backgroundPosition: 'center',
      height: '100vh',
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
      top: '30%',
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
    //   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginTop: '-250px',

    },
    description: {
      fontSize: '18px',
      color: '#543310',
    //   textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      maxWidth: '600px',
      marginTop: '20px',
    },
  };
  export default NgoBody