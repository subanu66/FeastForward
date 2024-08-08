import React from 'react';
import './CardStyles.css'; // Assuming the above styles are saved in this file

const WhyChooseUs = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="/images/absec/whyus.jpg"
          alt="Why Choose Us"
        />
      </div>
      <div className="card-content">
        <h2>Why FeastForward?</h2>
        <p>Food Bridge stands out from traditional food redistribution systems in several key ways:</p>
        <ul>
          <li>Real-Time Tracking: Our platform offers real-time tracking of food donations, ensuring transparency and efficiency in the redistribution process.</li>
          <li>Integrated Platform: We provide a unified system that connects donors, volunteers, and NGOs, streamlining the food donation process.</li>
          <li>User-Friendly Interface: Our platform is designed to be intuitive and easy to use, making it simple for users to participate and manage their activities.</li>
          <li>Comprehensive Support: We offer robust support to our partners and users, including training, resources, and dedicated customer service.</li>
        </ul>
        <p>By choosing Food Bridge, you join a community dedicated to making a positive impact on food security and sustainability.</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
