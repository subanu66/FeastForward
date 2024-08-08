import React from 'react';
import './CardStyles.css'; // Assuming the above styles are saved in this file

const Vision = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="/images/absec/vis.jpg"
          alt="Our Vision"
        />
      </div>
      <div className="card-content">
        <h2>Our Vision</h2>
        <p>At Food Bridge, we are committed to continuously enhancing our platform to make a greater impact. Here’s what we envision for the future:</p>
        <ul>
          <li>  Expanding to New Regions: We plan to extend our services to more cities and regions, reaching a larger audience and reducing food wastage on a broader scale.</li>
          <li>  Incorporating More Features: We aim to introduce new features that improve the user experience, such as advanced tracking, automated notifications, and enhanced reporting tools.</li>
          <li>  Increasing Scale of Operations: By partnering with more NGOs and volunteers, we hope to scale up our operations and make a significant difference in food redistribution efforts.</li>
        </ul>
        <p>Our vision is to create a seamless, efficient, and impactful platform that transforms the way surplus food is managed and distributed. We are excited about the future and the opportunities it holds for improving our communities.</p>
      </div>
    </div>
  );
};

export default Vision;
