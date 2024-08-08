import React, { useState } from 'react';
import './AdminSide.css';
import { Link } from 'react-router-dom';

const AdminSide = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-container">
      <div className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="hamburger-menu" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="sidebar-title">Admin Dashboard</h2>
        <ul className="sidebar-menu">
          <li><Link to="/admin/ngo-register">NGO Registration</Link></li>
          <li><Link to="/admin/foodonor-register">Food Donor Registration</Link></li>
          <li><Link to="/admin/volunteer-register">Volunteer Registration</Link></li>
          <li><Link to="/admin/user-login">User Login</Link></li>
          <li><Link to="/admin/admin-login">Admin Login</Link></li>
          <li><Link to="/admin/donation-form">Donation Form</Link></li>
        </ul>
      </div>
      <div className="admin-content">
        <h1 className="content-title">Welcome to Admin Dashboard</h1>
        <p className="content-description">Manage registrations, logins, and donations from here.</p>
        {/* Add Route for different functionalities here */}
      </div>
    </div>
  );
};

export default AdminSide;
