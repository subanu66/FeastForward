import React, { useState, useEffect } from 'react';
import './DonorList.css'; // Import the CSS file

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState(''); // Selected field to filter by
  const [editingDonor, setEditingDonor] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: '',
    email: '',
    password: '',
    org_name: '',
    orgtype: '',
    address: '',
    phn: '',
  });

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/donors/donorall');
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching donor data:', error);
      }
    };

    fetchDonors();
  }, []);

  const handleEdit = (donor) => {
    setEditingDonor(donor.id);
    setUpdatedDetails({
      name: donor.name,
      email: donor.email,
      password: donor.password,
      org_name: donor.org_name,
      orgtype: donor.orgtype,
      address: donor.address,
      phn: donor.phn,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/donors/putd/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setDonors(donors.map((donor) => (donor.id === id ? { ...donor, ...updatedDetails } : donor)));
        setEditingDonor(null);
        alert('Donor details updated successfully!');
      } else {
        console.error('Failed to update donor');
      }
    } catch (error) {
      console.error('Error updating donor:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/donors/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDonors(donors.filter((donor) => donor.id !== id));
        alert('Donor deleted successfully!');
      } else {
        console.error('Failed to delete donor');
      }
    } catch (error) {
      console.error('Error deleting donor:', error);
    }
  };

  const filteredDonors = donors.filter((donor) => {
    if (!filterField) return true;
    const fieldValue = donor[filterField]?.toString().toLowerCase();
    return fieldValue && fieldValue.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Donors List</h2>

      <div className="filter-container">
        <select
          className="filter-select"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Select Field to Filter By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="org_name">Organization Name</option>
          <option value="orgtype">Organization Type</option>
          <option value="address">Address</option>
          <option value="phn">Phone Number</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder={`Search by ${filterField ? filterField : 'any field'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="donor-list">
        {filteredDonors.map((donor) => (
          <li key={donor.id} className="donor-list-item">
            {editingDonor === donor.id ? (
              <div className="donor-details">
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
                  type="password"
                  value={updatedDetails.password}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, password: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.org_name}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, org_name: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.orgtype}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, orgtype: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.address}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, address: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.phn}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, phn: e.target.value })}
                />
                <button onClick={() => handleUpdate(donor.id)}>Save</button>
                <button onClick={() => setEditingDonor(null)}>Cancel</button>
              </div>
            ) : (
              <div className="donor-details">
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Email:</strong> {donor.email}</p>
                <p><strong>Organization Name:</strong> {donor.org_name}</p>
                <p><strong>Organization Type:</strong> {donor.orgtype}</p>
                <p><strong>Address:</strong> {donor.address}</p>
                <p><strong>Phone:</strong> {donor.phn}</p>
                <div className="donor-actions">
                  <button className="edit-btn" onClick={() => handleEdit(donor)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(donor.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
