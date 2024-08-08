import React from 'react';

const How = () => {
  const cardStyle = {
    width: '80%',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#F8F4E1',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const topSectionStyle = {
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#AF8F6F',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px',
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
    fontSize: '24px',
    marginBottom: '10px',
  };

  const paraStyle = {
    fontSize: '16px',
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
    <div style={cardStyle}>
      <div style={contentStyle}>
        <div style={topSectionStyle}>
          <div style={leftStyle}>
            <h2 style={headingStyle}>How It Works</h2>
            <p style={paraStyle}>
              Our platform streamlines the process of redistributing surplus food from event organizers and individuals to those in need. Here's a step-by-step overview:
              <ul>
                <li><strong>Registration:</strong> Event organizers, individuals, NGOs, and volunteers register on our platform. Organizers and individuals can list surplus food, while NGOs and volunteers create profiles to receive or distribute food.</li>
                <li><strong>Food Listing:</strong> Once registered, event organizers and individuals can easily list available surplus food on the platform. They provide details about the food, including quantity, type, and availability time.</li>
                <li><strong>Matching and Notification:</strong> The platform matches food listings with nearby NGOs and volunteers based on their preferences and availability. Notifications are sent to relevant parties, informing them of the available food.</li>
                <li><strong>Collection and Distribution:</strong> NGOs and volunteers coordinate with the food donors to collect the food. They ensure it is transported and delivered to those in need efficiently and safely.</li>
              </ul>
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
    </div>
  );
};

export default How;
