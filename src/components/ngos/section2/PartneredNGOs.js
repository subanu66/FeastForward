import React, { useState, useEffect } from 'react';

const PartneredNGOs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for NGOs
  const ngoData = [
    { name: 'Akshaya Patra Foundation', description: 'Description of NGO 1', image: '/images/ngosec/aksh1.avif' },
    { name: 'Feeding India Foundation', description: 'Description of NGO 2', image: '/images/ngosec/feedindia.jpeg' },
    { name: 'Annamrita Foundation', description: 'Description of NGO 3', image: '/images/ngosec/annam.jpeg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ngoData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [ngoData.length]);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.leftContainer}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>Partnered NGOs</h2>
          <p style={styles.description}>
            We collaborate with several NGOs to ensure that surplus food reaches those who need it most. Our partners are crucial in the mission to reduce food wastage and help underserved communities.
          </p>
        </div>
      </div>
      <div style={styles.slideshowContainer}>
        {ngoData.map((ngo, index) => (
          <div
            key={index}
            style={{
              ...styles.imageContainer,
              display: index === currentSlide ? 'block' : 'none', // Show only the current slide
              backgroundImage: `url(${ngo.image})`
            }}
          >
            <div style={styles.overlayContainer}>
              <h3 style={styles.ngoName}>{ngo.name}</h3>
              <p style={styles.ngoDescription}>{ngo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: '100%',
    height: '600px', // Adjust height if needed
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center items vertically
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    overflow: 'hidden', // Prevents overflow that might cause extra space
    marginBottom: '0', // Ensure there's no bottom margin
  },
  leftContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '20px',
  },
  headingContainer: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#543310',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#543310',
  },
  slideshowContainer: {
    flex: '1',
    position: 'relative',
    height: '100%', // Ensure full height
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover', // Ensure the image covers the container
    backgroundPosition: 'center', // Centers the image within the container
    backgroundRepeat: 'no-repeat', // Prevents repeating of the image
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'opacity 1s ease-in-out',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  ngoName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  ngoDescription: {
    fontSize: '14px',
    lineHeight: '1.4',
  },
};

export default PartneredNGOs;
