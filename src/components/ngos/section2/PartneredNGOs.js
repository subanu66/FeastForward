import React, { useState, useEffect } from 'react';

const PartneredNGOs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for NGOs
  const ngoData = [
    { name: 'Akshaya Patra Foundation', description: 'Nourishing young minds with every meal.', image: '/images/ngosec/aksh1.avif' },
    { name: 'Feeding India Foundation', description: 'Filling plates, fulfilling hearts.', image: '/images/ngosec/feedindia.jpeg' },
    { name: 'Annamrita Foundation', description: 'Feeding futures, one meal at a time.', image: '/images/ngosec/annam.jpeg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ngoData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [ngoData.length]);

  return (
    <div style={styles.card}>
      <div style={styles.mainContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.headingContainer}>
            <h2 style={styles.heading}>Partnered NGOs</h2>
            <p style={styles.description}>
            We partner with a range of dedicated NGOs to facilitate the effective redistribution of surplus food to those in need. By collaborating with these organizations, we ensure that excess food reaches underserved communities, helping to combat food wastage and enhance support for those who are most vulnerable. Our NGO partners play a pivotal role in our mission to make a meaningful impact and drive positive change in communities across the region.
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
                backgroundImage: `url(${ngo.image})`,
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
    
    overflow: 'hidden',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '500px', // Adjust height if needed
    boxSizing: 'border-box',
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
    backgroundColor: '#AF8F6F',
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
    color:"white"
  },
};

export default PartneredNGOs;
