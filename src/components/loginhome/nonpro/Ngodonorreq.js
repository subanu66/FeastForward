import React, { useEffect, useState } from 'react';
import './Ngodonorreq.css'; // Import the CSS file for styling

const Ngodonorreq = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    // Fetch donation requests from the backend
    fetch('http://localhost:8080/api/donations/req1')
      .then(response => response.json())
      .then(data => setDonationRequests(data))
      .catch(error => console.error('Error fetching donation requests:', error));
  }, []);

  return (
    <div className="donor-requests-container">
      <h1 className="donor-requests-heading">Donor Requests</h1>
      <div className="table-card">
        <table className="donor-requests-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Food Type</th>
              <th>Quantity</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {donationRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.donorName}</td>
                <td>{request.foodType}</td>
                <td>{request.quantity}</td>
                <td>{request.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ngodonorreq;
