import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../img/github-logo.png';

const NavigationBar: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand as={Link} to="/">Ted Bennett</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/fridgy">Fridgy</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/switch-it">SwitchIt</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/kaja">Kaja!</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/ideas">Ideas</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Navbar.Brand href="https://www.github.com/tedbennett">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GitHub logo"
          />
        </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
