import React, { useState } from 'react';
import Navbar from './Navbar';
import NGOList from './NGOList';
import AllUsersList from './AllUserList';
import Donations from './Donations';

const Dashboard = () => {
  const [currentSection, setCurrentSection] = useState(''); // State to track the current section

  const handleNavItemClick = (section) => {
    setCurrentSection(section); // Set the current section
  };

  return (
    <div>
      <Navbar onNavItemClick={handleNavItemClick} />
      <div className="content">
        {currentSection === 'ngos' && <NGOList />} {/* Conditionally render NGOList */}
        {currentSection === 'allUsers' && <AllUsersList/>}
        {currentSection === 'donations' && <Donations/>}
      </div>
    </div>
  );
};

export default Dashboard;
