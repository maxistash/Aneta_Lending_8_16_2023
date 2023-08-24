import React from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/FullLogo.jpg"
import Logo from "../img/FullLogo.jpg"


const baseEndpoint = "http://localhost:8000/api"


function Home() {

  useEffect(() =>{
    
  },[])
  return (
    <Container >
      {/* <Row className="vh-100 d-flex justify-content-center align-items-center"> */}
      <Row className="homePageRow">
        <Col md={5} lg={5} >   
          <img src={Logo} style={{ width: 600, height: 500, borderRadius: '5px' }}/>
        </Col>
        <Col md={5} lg={5} className="homePage">
          <h1>Welcome!</h1>
          <Button className="header" href='/application'variant="primary" type="submit">
             Apply for your personal quote here!
          </Button>         
          
        </Col>
      </Row>
    </Container>
  );    
  
}
export default Home;