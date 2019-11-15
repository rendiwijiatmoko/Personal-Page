import React,{useState} from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import profilePic from '../profilePic.jpg';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }  
  return (
    <Navbar className="topnav" dark expand="md" sticky="top">
      <Container>
        <NavbarBrand href="/">
          {/* <img src={profilePic} className="profile-pic" alt="Rendi Wijiatmoko"/> */}
          <span>Rendi Wijiatmoko</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;