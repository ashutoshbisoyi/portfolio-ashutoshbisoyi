import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png';
const NavigationBar = () => {
  return (
    <div className='nav-container'>
      <Navbar className='my-navbar' collapseOnSelect expand='lg'>
        <Navbar.Brand>
          <img
            src={logo}
            alt='ashutosh bisoyi frontend developer'
            className='logo'
          />
          Ashutosh Bisoyi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        {/* <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#features'>About</Nav.Link>
            <Nav.Link href='#pricing'>Projects</Nav.Link>
            <Nav.Link href='#pricing'>Experience</Nav.Link>
            <NavDropdown title='Others' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Achievements
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Other Skills
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
