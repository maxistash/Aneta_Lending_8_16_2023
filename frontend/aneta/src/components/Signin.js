import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/index.jpg"

export default function Signin() {
  
  return (
    
    <Container>
      {/* <Row className="justify-content-md-center"><h1 className="text-center" >Aenta Lending</h1></Row> */}
      <Row className="vh-100 d-flex justify-content-center align-items-center">
      
      <Col md={5} lg={6} className="">
          <img src={index} style={{ width: 550, height: 650 }}/>
      </Col>
        
        <Col md={5} lg={5} xs={12}>

          {/* <div className="border border-3 border-primary"></div> */}
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                {/* <h2 className="fw-bold mb-2 ">Welcome to Aneta Lending</h2> */}
                <h2 className="fw-bold mb-2 ">Enter your login and password</h2>
                {/* <p className="mb-3">Please enter your login and password!</p> */}
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Username
                      </Form.Label>
                      <Form.Control type="email" placeholder="Username" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button className="header" variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="{''}" className="text-primary fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
  
      </Row>
    </Container>
  );
}