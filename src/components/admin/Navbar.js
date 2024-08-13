import React, { useState } from 'react';
import styled from 'styled-components';
// import profileIcon from '../images/man.png'; 
// import notificationIcon from './images/bell.jpg';
// import settingsIcon from './images/sett.png'; 

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #543310;
  color: white;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;

  div {
    height: 4px;
    background: white;
    border-radius: 2px;
  }
`;

const VerticalNavbar = styled.div`
  position: fixed;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color:#543310;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: left 0.3s ease;
  z-index: 999;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 15px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const Navbar = ({ onNavItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (item) => {
    onNavItemClick(item);
    setIsOpen(false); // Collapse the sidebar on item click
  };

  return (
    <>
      <NavbarContainer>
        
        <HamburgerMenu onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
        <div>
        <input type="text" placeholder="search" style={{width:'300%',marginRight:'60px'}}></input>
        </div>
        <IconsContainer>
          <Icon src="./images/bell.png" alt="Notifications" />
          <Icon src="./images/gear.png" alt="Settings" />
          <Icon src="./images/profile.png" alt="Profile" />
        </IconsContainer>
      </NavbarContainer>

      <VerticalNavbar isOpen={isOpen}>
        <NavItem onClick={() => handleNavItemClick('dash')}>Dashboard</NavItem>
        <NavItem onClick={() => handleNavItemClick('allUsers')}>All Users</NavItem>
        <NavItem onClick={() => handleNavItemClick('ngos')}>NGOs</NavItem>
        <NavItem onClick={() => handleNavItemClick('donorss')}>Food Donors</NavItem>
        <NavItem onClick={() => handleNavItemClick('voluns')}>Volunteers</NavItem>
        <NavItem onClick={() => handleNavItemClick('donations')}>Donations</NavItem>
      </VerticalNavbar>
    </>
  );
};

export default Navbar;
