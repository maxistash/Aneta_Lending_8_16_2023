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
      <Row className="vh-100 d-flex justify-content-center align-items-center">
      {/* <Row className="homePageRow"> */}
       <Row>
          <img src={Logo} className="application" style={{ width: 500, height: 425, borderRadius: '5px' }}/>
      </Row>
       <Row> 
        <Button className="header" href='/application'variant="primary" type="submit">
             Apply for your personal quote here!
          </Button> 
      </Row> 
          
       
      </Row>
    </Container>
  );    
  
}
export default Home;