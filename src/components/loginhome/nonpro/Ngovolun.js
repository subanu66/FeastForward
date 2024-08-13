import React, { useEffect, useState } from 'react';
import './Ngovolun.css'; // Import the CSS file

const Ngovolun = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/volunteer/volunall');
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div className="containerk">
      <h2 className="headingk">Registered Volunteers</h2>
      <div className="cardk">
        <table className="tablek">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer, index) => (
              <tr key={index}>
                <td>{volunteer.name}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.gender}</td>
                <td>{volunteer.phn}</td>
                <td>{volunteer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ngovolun;
