import React, { useState, useEffect } from 'react';
import './DonorList.css'; // Import the CSS file for styling

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState('');
  const [editingDonor, setEditingDonor] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: '',
    email: '',
    org_name: '',
    orgtype: '',
    address: '',
    phn: '',
  });

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/donors/alldonors');
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
      org_name: donor.org_name,
      orgtype: donor.orgtype,
      address: donor.address,
      phn: donor.phn,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/donors/${id}`, {
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
      const response = await fetch(`http://localhost:8080/api/donors/${id}`, {
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
      <h2>Registered Donors</h2>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search Donors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Filter by</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="org_name">Organization Name</option>
          <option value="orgtype">Donation Type</option>
          <option value="address">Address</option>
          <option value="phn">Phone Number</option>
        </select>
      </div>
      <table className="donor-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Organization Name</th>
            <th>Donation Type</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.email}</td>
              <td>{donor.org_name}</td>
              <td>{donor.orgtype}</td>
              <td>{donor.address}</td>
              <td>{donor.phn}</td>
              <td>
                {editingDonor === donor.id ? (
                  <>
                    <button className="edit-btn" onClick={() => handleUpdate(donor.id)}>Save</button>
                    <button className="delete-btn" onClick={() => setEditingDonor(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => handleEdit(donor)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(donor.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;
