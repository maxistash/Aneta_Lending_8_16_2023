import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';   




function Header() {
  
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container >
            <Navbar.Brand href="/">Aneta</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="submit">Application</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        
  
       
      </>
        );
    }

export default Header;