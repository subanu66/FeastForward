import { px } from 'framer-motion';
import React from 'react';

const NgoService = () => {
  const services = [
    {
      title: 'Service 1',
      description: 'Description of service 1.',
    },
    {
      title: 'Service 2',
      description: 'Description of service 2.',
    },
    {
      title: 'Service 3',
      description: 'Description of service 3.',
    },
    {
      title: 'Service 4',
      description: 'Description of service 3.',
    },
    {
      title: 'Service 5',
      description: 'Description of service 3.',
    },
    {
      title: 'Service 6',
      description: 'Description of service 3.',
    },
    // Add more services as needed
  ];

  return (
    <div style={styles.hol}>
        <h1 style={styles.heading}>SERVICES</h1>
    <div style={styles.container}>
      <h2 style={styles.title}>NGO Services</h2>
      <div style={styles.cardsContainer}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div style={styles.gap}></div>
    </div>
    
    
  );
};

const styles = {
   
    heading: {
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0 60px', // Add bottom margin to create space
        color: '#543310',
        marginRight:'20px'
      },
  container: {
    marginBottom:'0%',
    margin: '20px auto',
    padding: '20px',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginTop:'60px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    marginRight:'30px'
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '16px',
  },
  gap:{
    height:'30px'
  }
};

export default NgoService;
