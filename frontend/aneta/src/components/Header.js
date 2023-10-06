import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import '../css/style.css'
import logo from "../img/small.png"
import { Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";




function Header() {
  const [currentUser, setCurrentUser] = useState();

  const {auth}=  useAuth();
  useEffect(() => {
    console.log(localStorage.getItem('access_token'));
    console.log('below');
    if (localStorage.getItem('access_token') !== null) {
    console.log(localStorage.getItem('access_token'));

      setCurrentUser(localStorage.getItem("access_token")); 
     }
   }, [currentUser]);

  function Logout(){
    console.log(auth);
    console.log('logout;');
    console.log(currentUser);
    setCurrentUser(null); 
    localStorage.setItem('access_token',null);
    localStorage.setItem('refresh_token', null);
    console.log(currentUser);

}
  
  
    return (
        <>
        <Navbar className="header">
          <Container >

            <Navbar.Brand style={{fontSize: "25px"}} href="/">Aneta</Navbar.Brand>
            <Nav href="/"><img  src={logo} style={{ width: 50, height: 50, borderRadius: "2px" }}/></Nav>

            
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              
            <Nav.Link style={{paddingRight: "20px", fontSize: "20px"}} href="/application">Application</Nav.Link>
              <Nav.Link style={{paddingRight: "20px",fontSize: "20px"}}  href="#pricing">Pricing</Nav.Link>
              <Nav.Link style={{paddingRight: "20px",fontSize: "20px"}} href="#pricing">About Us</Nav.Link>
              {auth?.user ?  <Navbar.Text>
                Signed in as: <a href="login" style={{pfontSize: "30px"}}>{auth.user}</a>
                <Button onClick={Logout}>Logout</Button>
              </Navbar.Text> : 
              <Navbar.Text>
                 <a href="/login">Login</a>
              </Navbar.Text>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
  
       
      </>
        );
    }

export default Header;