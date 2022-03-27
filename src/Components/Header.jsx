import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

import logo from "../Assets/logo.png";
const Header = () => {
  return (
   <div id="home">
    <Navbar className="justify-content-between fixed-top" 
    collapseOnSelect expand="md"
    style={{background:"rgba(255,255,255,.9)",boxShadow:"0 0 3px 0 rgb(0,0,0/10%)"}}
    > <Container>
    <Navbar.Brand  href="#home"><img src={logo} alt="Assutech logo" /></Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">services</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#meet-team">Team</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container> 
  </Navbar>
  </div>

  );
};
export default Header;
