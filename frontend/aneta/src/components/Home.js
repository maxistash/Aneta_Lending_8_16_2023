import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/index.jpg"
import Logo from "../img/FullLogo.jpg"

export default function Home() {
  
  return (
   
      <Container >
        {/* <Row className="vh-100 d-flex justify-content-center align-items-center"> */}
        <Row className="homePageRow">
          <Col md={5} lg={5} >   
            <img src={Logo} style={{ width: 600, height: 500, borderRadius: '5px' }}/>
          </Col>
          <Col md={5} lg={5} className="homePage">
            <h1>Welcome to Aneta Lending</h1>
            <h3>Get your personlized quote here</h3>
            <Button className="header" variant="primary" type="submit">
               Sign up
            </Button>         
            <Button className="header" variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    
  );
}