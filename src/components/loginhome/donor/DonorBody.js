import React from 'react';

const DonorBody = () => {
    return (
      <div style={styles.containerd}>
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
          Thank you for being a vital part of our mission! Manage your food donation requests, track your contributions, and see the impact of your generosity. Your support helps us connect surplus food with those in need.
          </p>
          <p style={styles.description}>
          Explore the dashboard to view your impact and find new ways to contribute.
          </p>
        </div>
      </div>
    );
  }
  
  const styles = {
    containerd: {
      backgroundImage: 'url(path-to-your-background-image.jpg)',
      backgroundSize: 'cover',
      background: 'linear-gradient(to right, #C6FFDD, #FFD194)',
      backgroundPosition: 'center',
      height: '90vh',
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
    //   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginTop: '-150px',

    },
    description: {
      fontSize: '18px',
      color: '#543310',
    //   textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      maxWidth: '600px',
      marginTop: '20px',
    },
  };
  export default DonorBody