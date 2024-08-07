import React from 'react';

const How = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const topSectionStyle = {
    flex: '0 0 80%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const leftStyle = {
    flex: '0 0 50%',
    paddingRight: '20px',
  };

  const rightStyle = {
    flex: '0 0 50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const bottomSectionStyle = {
    flex: '0 0 20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  };

  const slideShowStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    transition: 'transform 0.5s ease-in-out',
    whiteSpace: 'nowrap',
  };

  const slideStyle = {
    minWidth: '100%',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '10px',
  };

  const paraStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
  };

  // Simulating a slideshow effect with setInterval
  React.useEffect(() => {
    const slideShow = document.getElementById('slide-show');
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 5;
      slideShow.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        <div style={leftStyle}>
          <h2 style={headingStyle}>How It Works</h2>
          <p style={paraStyle}>
            Our platform connects surplus food from event organizers and individuals with those in need, facilitated through NGOs and volunteers. The system aims to reduce food wastage, provide timely food assistance, and incentivize volunteers and donors through a points and rewards system.
          </p>
        </div>
        <div style={rightStyle}>
          <img src='/images/ngosec/how.png' alt='How It Works' style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </div>
      <div style={bottomSectionStyle}>
        <div id='slide-show' style={slideShowStyle}>
          <div style={slideStyle}>Step 1: Register on the platform.</div>
          <div style={slideStyle}>Step 2: List available surplus food.</div>
          <div style={slideStyle}>Step 3: NGOs receive notifications and accept donations.</div>
          <div style={slideStyle}>Step 4: Volunteers pick up and distribute food.</div>
          <div style={slideStyle}>Step 5: Track the impact and earn rewards.</div>
        </div>
      </div>
    </div>
  );
};

export default How;
