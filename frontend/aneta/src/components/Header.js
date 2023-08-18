import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import '../css/style.css'



function Header() {
  
    return (
        <>
        <Navbar className="header">
          <Container >
            <Navbar.Brand href="/">Aneta</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="submit">Application</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>

            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="login">Heath Hartley</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
  
       
      </>
        );
    }

export default Header;