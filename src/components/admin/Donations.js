import React, { useState, useEffect } from 'react';
import './Donations.css'; // Import the CSS file for styling

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState(''); // Selected field to filter by
  const [editingDonation, setEditingDonation] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    donorName: '',
    foodType: '',
    quantity: '',
    location: '',
  });

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/donations/req1');
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donation data:', error);
      }
    };

    fetchDonations();
  }, []);

  const handleEdit = (donation) => {
    setEditingDonation(donation.id);
    setUpdatedDetails({
      donorName: donation.donorName,
      foodType: donation.foodType,
      quantity: donation.quantity,
      location: donation.location,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/donations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setDonations(donations.map((donation) => 
          donation.id === id ? { ...donation, ...updatedDetails } : donation));
        setEditingDonation(null);
        alert('Donation details updated successfully!');
      } else {
        console.error('Failed to update donation');
      }
    } catch (error) {
      console.error('Error updating donation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/donations/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDonations(donations.filter((donation) => donation.id !== id));
        alert('Donation deleted successfully!');
      } else {
        console.error('Failed to delete donation');
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const filteredDonations = donations.filter((donation) => {
    if (!filterField) return true;
    const fieldValue = donation[filterField]?.toString().toLowerCase();
    return fieldValue && fieldValue.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="donation-list-container">
      <h2 className="donation-list-title">Donations List</h2>

      <div className="filter-container">
        <select
          className="filter-select"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Select Field to Filter By</option>
          <option value="donorName">Donor Name</option>
          <option value="foodType">Food Type</option>
          <option value="quantity">Quantity</option>
          <option value="location">Location</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder={`Search by ${filterField ? filterField : 'any field'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="donation-list">
        {filteredDonations.map((donation) => (
          <li key={donation.id} className="donation-list-item">
            {editingDonation === donation.id ? (
              <div className="donation-details">
                <input
                  type="text"
                  value={updatedDetails.donorName}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, donorName: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.foodType}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, foodType: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.quantity}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, quantity: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.location}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, location: e.target.value })}
                />
                <button onClick={() => handleUpdate(donation.id)}>Save</button>
                <button onClick={() => setEditingDonation(null)}>Cancel</button>
              </div>
            ) : (
              <div className="donation-details">
                <p><strong>Donor Name:</strong> {donation.donorName}</p>
                <p><strong>Food Type:</strong> {donation.foodType}</p>
                <p><strong>Quantity:</strong> {donation.quantity}</p>
                <p><strong>Location:</strong> {donation.location}</p>
                <div className="donation-actions">
                  <button className="edit-btn" onClick={() => handleEdit(donation)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(donation.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donations;
