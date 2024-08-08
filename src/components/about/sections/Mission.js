import React from 'react';
import './CardStyles.css'; // Assuming the above styles are saved in this file

const Mission = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="/images/absec/mission.jpg"
          alt="Mission"
        />
      </div>
      <div className="card-content">
        <h2>Our Mission</h2>
        <p>At FeastForward, our mission is deeply rooted in the commitment to reduce food wastage and connect surplus food with those in need. We aim to achieve this through a multi-faceted approach:

Reducing Food Wastage: In a world where food is often wasted while others go hungry, our platform seeks to bridge this gap. By facilitating the donation of surplus food, we ensure that excess food is not discarded but instead reaches individuals who would benefit from it. This not only addresses immediate food needs but also contributes to long-term sustainability.

Enhancing Food Security: Our mission extends beyond immediate relief. We strive to enhance food security by creating a robust network that ensures a steady and reliable flow of food to those in need. By connecting donors, volunteers, and recipients, we work to create a more resilient and food-secure community.
        </p>
      </div>
    </div>
  );
}

export default Mission;
