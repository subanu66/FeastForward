import React, { useState, useEffect } from 'react';
import './VolunteerList.css'; // Import the CSS file

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState(''); // Selected field to filter by
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    phn: '',
    address: '',
  });

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/volunteer/volunall');
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error('Error fetching volunteer data:', error);
      }
    };

    fetchVolunteers();
  }, []);

  const handleEdit = (volunteer) => {
    setEditingVolunteer(volunteer.id);
    setUpdatedDetails({
      name: volunteer.name,
      email: volunteer.email,
      gender: volunteer.gender,
      password: volunteer.password,
      phn: volunteer.phn,
      address: volunteer.address,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/volunteer/putv/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setVolunteers(volunteers.map((volunteer) => (volunteer.id === id ? { ...volunteer, ...updatedDetails } : volunteer)));
        setEditingVolunteer(null);
        alert('Volunteer details updated successfully!');
      } else {
        console.error('Failed to update volunteer');
      }
    } catch (error) {
      console.error('Error updating volunteer:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/volunteer/deletev/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id));
        alert('Volunteer deleted successfully!');
      } else {
        console.error('Failed to delete volunteer');
      }
    } catch (error) {
      console.error('Error deleting volunteer:', error);
    }
  };

  const filteredVolunteers = volunteers.filter((volunteer) => {
    if (!filterField) return true;
    const fieldValue = volunteer[filterField]?.toString().toLowerCase();
    return fieldValue && fieldValue.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="volunteer-list-container">
      <h2 className="volunteer-list-title">Volunteers List</h2>

      <div className="filter-container">
        <select
          className="filter-select"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Select Field to Filter By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="gender">Gender</option>
          <option value="phn">Phone Number</option>
          <option value="address">Address</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder={`Search by ${filterField ? filterField : 'any field'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="volunteer-list">
        {filteredVolunteers.map((volunteer) => (
          <li key={volunteer.id} className="volunteer-list-item">
            {editingVolunteer === volunteer.id ? (
              <div className="volunteer-details">
                <input
                  type="text"
                  value={updatedDetails.name}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, name: e.target.value })}
                />
                <input
                  type="email"
                  value={updatedDetails.email}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, email: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.gender}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, gender: e.target.value })}
                />
                <input
                  type="password"
                  value={updatedDetails.password}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, password: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.phn}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, phn: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.address}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, address: e.target.value })}
                />
                <button onClick={() => handleUpdate(volunteer.id)}>Save</button>
                <button onClick={() => setEditingVolunteer(null)}>Cancel</button>
              </div>
            ) : (
              <div className="volunteer-details">
                <p><strong>Name:</strong> {volunteer.name}</p>
                <p><strong>Email:</strong> {volunteer.email}</p>
                <p><strong>Gender:</strong> {volunteer.gender}</p>
                <p><strong>Phone:</strong> {volunteer.phn}</p>
                <p><strong>Address:</strong> {volunteer.address}</p>
                <div className="volunteer-actions">
                  <button className="edit-btn" onClick={() => handleEdit(volunteer)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(volunteer.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerList;
