import React, { useState } from 'react';
import './DonationRequestForm.css';

const DonationRequestForm = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    foodType: '',
    quantity: '',
    location: '',
    email: '',
    phoneNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/donations/req', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Donation successfully completed');
        setFormData({
          donorName: '',
          foodType: '',
          quantity: '',
          location: '',
          email: '',
          phoneNo: ''
        });
      } else {
        alert('Failed to complete donation');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your donation');
    }
  };

  return (
    <div className="nam">
        <h1>DONATION FORM</h1>
    <div className="donation-container">
      <h1 className="form-heading">Donation Request Form</h1>
      <div className="donation-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="donorName">Donor Name:</label>
            <input type="text" id="donorName" name="donorName" value={formData.donorName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="foodType">Food Type:</label>
            <input type="text" id="foodType" name="foodType" value={formData.foodType} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No:</label>
            <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <button type="submit">Donate</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default DonationRequestForm;
