import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterThree.css'; 

const RegisterThree = () => {
    const navigate = useNavigate();

    const registerSections = [
        {
             
            heading: 'Register as NGO',
            description: 'Join our platform as an NGO to help distribute surplus food to those in need.',
            buttonText: 'Register as NGO',
            path: '/signupngo'
        },
        {
           
            heading: 'Register as Volunteer',
            description: 'Sign up as a volunteer to assist in food distribution and community support.',
            buttonText: 'Register as Volunteer',
            path: '/signupvolun'
        },
        {
            
            heading: 'Register as Food Donor',
            description: 'Help reduce food wastage by donating surplus food to those who need it most.',
            buttonText: 'Register as Food Donor',
            path: '/signupdonor'
        },
    ];

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        
        <div className="register-three-container">
            {registerSections.map((section, index) => (
                <div key={index} className="register-three-card">
                    <div className="icon-section">
                        <span className="icon">{section.icon}</span>
                    </div>
                    <div className="content-section">
                        <h3>{section.heading}</h3>
                        <p>{section.description}</p>
                        <button onClick={() => handleButtonClick(section.path)}>
                            {section.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
    );
};

export default RegisterThree;
