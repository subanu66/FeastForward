import React from 'react';

const NgoService = () => {
  const services = [
    {
      title: 'Community Outreach',
      description: 'Our community outreach programs aim to engage and support local communities through various activities such as educational workshops, health camps, and environmental clean-ups. We strive to build strong community bonds and promote social well-being.'
    },
    {
      title: 'Food Distribution',
      description: 'We organize food distribution drives to provide nutritious meals to underprivileged families and individuals. Our goal is to ensure that no one goes hungry and that everyone has access to essential food resources.'
    },
    {
      title: 'Health Services',
      description: 'Our health services include free medical check-ups, vaccinations, and health awareness campaigns. We partner with healthcare professionals and organizations to improve the health and well-being of our beneficiaries.'
    },
    {
      title: 'Educational Support',
      description: 'We offer educational support to children and adults through tutoring programs, scholarships, and educational materials. Our aim is to enhance learning opportunities and empower individuals through education.'
    },
    {
      title: 'Environmental Initiatives',
      description: 'Our environmental initiatives focus on promoting sustainable practices and protecting natural resources. We organize recycling drives, tree-planting events, and awareness campaigns to encourage environmental stewardship.'
    },
    {
      title: 'Volunteer Training',
      description: 'We provide training programs for volunteers to equip them with the skills and knowledge needed to effectively contribute to our projects. Training includes workshops on leadership, project management, and community engagement.'
    },
  ];

  return (
    <div style={styles.hol}>
        <h1 style={styles.heading}>OUR SERVICES</h1>
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
    hol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    background: 'linear-gradient(to right, #C6FFDD, #FFD194)'
        
    },
    heading: {
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0 60px',
        color: '#543310',
    },
    container: {
        marginBottom: '0%',
        margin: '20px auto',
        padding: '20px',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: '8px',
        marginTop: '60px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
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
    gap: {
        height: '30px',
    }
};

export default NgoService;
