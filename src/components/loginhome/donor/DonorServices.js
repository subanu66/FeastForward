import React from 'react';

const DonorServices = () => {
  const services = [
    {
      title: 'Food Collection Coordination',
      description: 'Our Food Collection Coordination service ensures that surplus food from donors is collected efficiently and safely. We organize pickup schedules, provide necessary equipment, and coordinate with our network of volunteers to ensure that the food reaches those in need promptly and in good condition.',
    },
    {
      title: 'Donation Tracking System',
      description: 'Our Donation Tracking System provides real-time updates on the status of your food donations. Donors can track the collection, transportation, and distribution of their contributions, ensuring transparency and accountability throughout the donation process.',
    },
    {
      title: 'Nutritional Assessment and Planning',
      description: 'We offer nutritional assessment and planning to ensure that the donated food meets the dietary needs of the recipients. Our team evaluates the nutritional value of the food and works with nutritionists to create balanced meal plans for distribution.',
    },
    {
      title: 'Partnership with Local NGOs',
      description: 'We partner with a wide range of local NGOs to maximize the reach and impact of food donations. Through these partnerships, we can effectively distribute surplus food to various communities, shelters, and food banks, enhancing the overall efficiency of our food redistribution network.',
    },
    {
      title: 'Volunteer Management',
      description: 'Our Volunteer Management service recruits, trains, and manages volunteers who assist with food collection, sorting, and distribution. We ensure that volunteers are well-prepared and motivated to contribute to the cause, and we provide ongoing support and recognition for their efforts.',
    },
    {
      title: 'Community Outreach and Education',
      description: 'We conduct community outreach and educational programs to raise awareness about food wastage and the importance of donation. These programs aim to engage local communities, educate them on how to contribute, and promote a culture of giving and sustainability.',
    },
  ];

  return (
    <div style={styles.hol}>
      <h1 style={styles.heading}>DONOR SERVICES</h1>
      <div style={styles.container}>
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
  },
  hol: {
    marginTop: '10%',
  },
  container: {
    margin: '20px auto',
    padding: '20px',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    color:'#543310'
  },
  cardDescription: {
    fontSize: '16px',
  },
  gap: {
    height: '30px',
  },
};

export default DonorServices;
