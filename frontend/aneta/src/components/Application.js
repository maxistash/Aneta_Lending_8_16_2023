import React from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Form, Card, Container  } from "react-bootstrap";
import textOnly from "../img/TextOnly.png"


function Application() {
    return (
        <Container>
            <Row className="application">
                {/* <Col md={5} lg={6} className=""> */}
                    <img src={textOnly} style={{ width: 850, height: 150 }}/>
                {/* </Col> */}
            </Row>
            <Row className="applicationForm">
                <Col md={8} lg={8} xs={8}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" />
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date of Birth" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Household Income</Form.Label>
                            <Form.Control type="number" placeholder="50,000" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Debt to Income'</Form.Label>
                            <Form.Control type="number" placeholder="1.2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Household Income</Form.Label>
                            <Form.Control type="number" placeholder="50,000" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I Consent" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      );
    }

export default Application;