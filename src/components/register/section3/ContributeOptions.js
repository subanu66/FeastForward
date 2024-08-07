import React, { useState } from 'react';

const ContributeOptions = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>How Can You Contribute?</h1>
            <p style={styles.description}>
                Select the option that best describes your role to get started.
            </p>
            <div style={styles.optionsContainer}>
                {['NGOs', 'Volunteers', 'Food Donors'].map((option, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.optionCard,
                            ...(hoveredCard === index ? styles.optionCardHover : {}),
                        }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <h2 style={styles.optionTitle}>{option}</h2>
                        <p style={styles.optionDescription}>
                            {option === 'NGOs' && 
                            "If you represent an organization that provides aid to those in need, register here to connect with donors and volunteers."}
                            {option === 'Volunteers' && 
                            "If you’re interested in helping with food collection, distribution, or other activities, sign up here."}
                            {option === 'Food Donors' && 
                            "If you have surplus food to donate, choose this option to start the donation process."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: '40px auto 0',
    },
    heading: {
        fontSize: '2em',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2em',
        color: '#666',
        marginBottom: '40px',
    },
    optionsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
    },
    optionCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: 'calc(33% - 40px)',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        minWidth: '250px', // Ensure cards are responsive
    },
    optionTitle: {
        fontSize: '1.5em',
        color: '#333',
        marginBottom: '10px',
    },
    optionDescription: {
        fontSize: '1em',
        color: '#666',
    },
    optionCardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

export default ContributeOptions;
