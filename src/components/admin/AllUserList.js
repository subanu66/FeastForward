import React, { useState, useEffect } from 'react';
import './AllUsersList.css'; // Assuming you'll create a CSS file for styling

const AllUsersList = () => {
  const [ngos, setNgos] = useState([]);
  const [donors, setDonors] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/NGOall');
        const data = await response.json();
        setNgos(data);
      } catch (error) {
        console.error('Error fetching NGO data:', error);
      }
    };

    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/donors/donorall');
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching Donor data:', error);
      }
    };

    const fetchVolunteers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/volunteer/volunall');
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error('Error fetching Volunteer data:', error);
      }
    };

    fetchNGOs();
    fetchDonors();
    fetchVolunteers();
  }, []);

  return (
    <div className="all-users-list-container">
      <div className="user-category">
        <h3>NGOs</h3>
        <ul className="user-list">
          {ngos.map((ngo) => (
            <li key={ngo.id} className="user-list-item">
              <p><strong>Organization Name:</strong> {ngo.orgName}</p>
              <p><strong>Email:</strong> {ngo.email}</p>
              <p><strong>Registration No:</strong> {ngo.reg_no}</p>
              <p><strong>Address:</strong> {ngo.address}</p>
              <p><strong>Type:</strong> {ngo.type}</p>
              <p><strong>Phone Number:</strong> {ngo.phn}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-category">
        <h3>Donors</h3>
        <ul className="user-list">
          {donors.map((donor) => (
            <li key={donor.id} className="user-list-item">
              <p><strong>Name:</strong> {donor.name}</p>
              <p><strong>Email:</strong> {donor.email}</p>
              <p><strong>Organization Name:</strong> {donor.org_name}</p>
              <p><strong>Organization Type:</strong> {donor.orgtype}</p>
              <p><strong>Address:</strong> {donor.address}</p>
              <p><strong>Phone Number:</strong> {donor.phn}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-category">
        <h3>Volunteers</h3>
        <ul className="user-list">
          {volunteers.map((volunteer) => (
            <li key={volunteer.id} className="user-list-item">
              <p><strong>Name:</strong> {volunteer.name}</p>
              <p><strong>Email:</strong> {volunteer.email}</p>
              <p><strong>Gender:</strong> {volunteer.gender}</p>
              <p><strong>Phone Number:</strong> {volunteer.phn}</p>
              <p><strong>Address:</strong> {volunteer.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUsersList;
