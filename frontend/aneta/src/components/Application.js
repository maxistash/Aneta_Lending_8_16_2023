import {React}from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Form, Card, Container,ToggleButton,ToggleButtonGroup  } from "react-bootstrap";
import textOnly from "../img/TextOnly.png"


function Application() {
 const [secondApplicant, setSecondApplicant] = useState(false);
//  const [value, setValue] = useState([1, 3]);

 /*
  * The second argument that will be passed to
  * `handleChange` from `ToggleButtonGroup`
  * is the SyntheticEvent object, but we are
  * not using it in this example so we will omit it.
  */
 const handleChange = (val) => (setSecondApplicant(val));
 const handleC = (val) => {
    console.log(val)
 }
    return (
        <>
        <Container>
            <Row className="application">
                {/* <Col md={5} lg={6} className=""> */}
                    <img src={textOnly} style={{ width: 650, height: 120 }}/>
                {/* </Col> */}
            </Row>
            <ToggleButtonGroup type="radio" name='secondApplicant' value={secondApplicant} onChange={handleC}>
      <ToggleButton id="tbg-btn-1" value={false}>
        One Applicant 
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={true} >
       Two Applicant
      </ToggleButton>
    </ToggleButtonGroup>
            <Row className="applicationForm">
                <Col md={8} lg={8} xs={8}>
                <Card className="shadow">
            <Card.Body>
                    <Form>
                        <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="state" placeholder="State" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Zip Code" />
                            </Form.Group>
                        </Col> 
                        <Col>   
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Date of Birth" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Household Income</Form.Label>
                                <Form.Control type="number" placeholder="50,000" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Debt to Income</Form.Label>
                                <Form.Control type="number" placeholder="50%" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Social</Form.Label>
                                <Form.Control type="number" placeholder="Social" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I Consent" />
                            </Form.Group>
                           
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Col>
                        </Row>    
                    </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>





 {secondApplicant ===false ?(<Row>
    {/* <Row className="application">
                {/* <Col md={5} lg={6} className=""> */}
                    {/* <img src={textOnly} style={{ width: 650, height: 120 }}/> */}
                {/* </Col> */}
            {/* </Row> */} 
            <Row >
                <Col md={8} lg={8} xs={8}>
                <Card className="shadow">
            <Card.Body>
                    <Form>
                        <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="state" placeholder="State" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Zip Code" />
                            </Form.Group>
                        </Col> 
                        <Col>   
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Date of Birth" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Household Income</Form.Label>
                                <Form.Control type="number" placeholder="50,000" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Debt to Income</Form.Label>
                                <Form.Control type="number" placeholder="50%" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Social</Form.Label>
                                <Form.Control type="number" placeholder="Social" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I Consent" />
                            </Form.Group>
                            {/* {secondApplicant ===false ?
                         
                            (  )} */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                        </Row>    
                    </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
 </Row>)
 
 :
                         
                            ( <Row></Row> )}

           
        </Container>
        </>
      );
    }

export default Application;





