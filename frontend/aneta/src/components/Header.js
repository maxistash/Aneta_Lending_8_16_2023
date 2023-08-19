import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import '../css/style.css'
import logo from "../img/small.png"




function Header() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);

  
    return (
        <>
        <Navbar className="header">
          <Container >
            <Navbar.Brand href="/">Aneta</Navbar.Brand>
            <Nav href="/"><img src={logo} style={{ width: 50, height: 50, borderRadius: "2px" }}/></Nav>

            <Nav className="me-auto">

            
              <Nav.Link href="/application">Application</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>

            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {isAuth ? <Navbar.Text>
                Signed in as: <a href="login">Heath Hartley</a>
              </Navbar.Text> : 
              <Navbar.Text>
                 <a href="login">Login</a>
              </Navbar.Text>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
  
       
      </>
        );
    }

export default Header;