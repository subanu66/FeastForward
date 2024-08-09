import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: white;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  z-index: 1000;
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
  background-color: #222;
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
      </NavbarContainer>

      <VerticalNavbar isOpen={isOpen}>
        <NavItem onClick={() => handleNavItemClick('allUsers')}>All Users</NavItem>
        <NavItem onClick={() => handleNavItemClick('ngos')}>NGOs</NavItem>
        <NavItem onClick={() => handleNavItemClick('foodDonors')}>Food Donors</NavItem>
        <NavItem onClick={() => handleNavItemClick('volunteers')}>Volunteers</NavItem>
        <NavItem onClick={() => handleNavItemClick('donations')}>Donations</NavItem>
      </VerticalNavbar>
    </>
  );
};

export default Navbar;
