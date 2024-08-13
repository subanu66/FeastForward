import React from 'react';
import './Points.css'; // Import the CSS file for styling

const Points = () => {
  // Static data for demonstration. Replace with actual data as needed.
  const volunteerData = {
    points: 120,
    servicesDone: 15,
    totalHours: 45,
    upcomingEvents: 3
  };

  return (
    <div className="points-container">
      <h2>Volunteer Dashboard</h2>
      <div className="info-card">
        <h3>Points Attained</h3>
        <p>{volunteerData.points}</p>
      </div>
      <div className="info-card">
        <h3>Services Done</h3>
        <p>{volunteerData.servicesDone}</p>
      </div>
      <div className="info-card">
        <h3>Total Hours Volunteered</h3>
        <p>{volunteerData.totalHours} hours</p>
      </div>
      <div className="info-card">
        <h3>Upcoming Events</h3>
        <p>{volunteerData.upcomingEvents}</p>
      </div>
    </div>
  );
};

export default Points;
