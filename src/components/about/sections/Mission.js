import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="section-container">
      <div className="section-left">
        <img src="/images/absec/mission.jpg" alt="Mission" />
      </div>
      <div className="section-right">
        <h2>Our Mission</h2>
        <p>
          Our mission at Food Bridge is to reduce food wastage and connect surplus food with those in need.
          We are dedicated to enhancing food security and promoting sustainability through efficient redistribution of excess food.
        </p>
      </div>
    </div>
  );
}

export default Mission;
