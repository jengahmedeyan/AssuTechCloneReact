import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

import logo from "../Assets/logo.png";
const Header = () => {
  return (
    <Container fluid="lg" className="justify-content-end">
    <Navbar className="justify-content-between fixed-top" 
    collapseOnSelect expand="md"
    variant="light"
    bg="light"
    >
    <Navbar.Brand  href="#home"><img src={logo} alt="Assutech logo" /></Navbar.Brand>
    {/* <Navbar.Brand  href="#home">Logo</Navbar.Brand> */}

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#services">services</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#meet-team">Team</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  </Container>
  );
};
export default Header;
