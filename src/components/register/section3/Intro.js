import React, { useState } from 'react';

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.container,
        ...(isHovered ? styles.containerHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          ...styles.content,
          ...(isHovered ? styles.contentHover : {}),
        }}
      >
        <h1 style={{ ...styles.title, ...(isHovered ? styles.titleHover : {}) }}>
          Welcome to Our Registration Portal!
        </h1>
        <h2
          style={{
            ...styles.subtitle,
            ...(isHovered ? styles.subtitleHover : {}),
          }}
        >
          Choose Your Path to Make an Impact
        </h2>
        <p
          style={{
            ...styles.description,
            ...(isHovered ? styles.descriptionHover : {}),
          }}
        >
          We are thrilled to have you here! Whether you’re looking to join as an NGO, volunteer your time, or contribute surplus food, you’re taking a crucial step towards reducing food waste and supporting those in need. Select your role below to start the registration process.
        </p>
      </div>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 20px 0', // Remove bottom padding
         backgroundColor: '#F8F4E1',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',     
        borderRadius: '10px',
        width:'80%',
        marginLeft:'10%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer', // Change cursor to pointer on hover
        marginTop: '0',
         // Ensure no margin at the bottom
      },    
      content: {
        textAlign: 'center',
        marginBottom: '0', // Remove bottom margin from content
        transition: 'transform 0.3s ease',
      },
  title: {
    fontSize: '2em',
    color: 'black', // Dark text color
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  },
  subtitle: {
    fontSize: '1.5em',
    color: '#543310', // Lighter text color
    marginBottom: '15px',
    transition: 'color 0.3s ease',
  },
  description: {
    fontSize: '1em',
    color: '543310', // Even lighter text color
    marginBottom: '20px',
    maxWidth: '800px', // Constrain the width of the description
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'color 0.3s ease',
  },
  containerHover: {
    backgroundColor: 'rgba(255, 255, 255, 1)', // Fully opaque background on hover
  },
  contentHover: {
    transform: 'scale(1.05)', // Slight zoom on hover
  },
  titleHover: {
    color: 'black', // Darker text color on hover
  },
  subtitleHover: {
    color: '#543310', // Darker text color on hover
  },
  descriptionHover: {
    color: '#543310', // Darker text color on hover
  },
};

export default Intro;
