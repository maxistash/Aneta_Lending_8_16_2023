import {React}from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Form, Card, Container,ToggleButton,ToggleButtonGroup  } from "react-bootstrap";
import textOnly from "../img/TextOnly.png";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import Loans from './Loans';



function Application() {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    const [secondApplicant, setSecondApplicant] = useState(false);

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [street, setstreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setzip] = useState();
    const [social, setsocial] = useState();
    const [consent, setConsent] = useState();
    const [dataLoans, setdataLoans] = useState();
     
    



    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getLoans = async () => {
            try {
                const response = await axiosPrivate.get('loans/', {
                    // signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getLoans();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    // example for max
    //use axiosPrivate use .get or .post 
    // use the endpoint you want to hit
    const submitApplication = async(e) =>{
        e.preventDefault();
        
        
            try {
                const response = await axiosPrivate.get('loans/', {
                    // signal: controller.signal
                    //use a BODY when you are doing a .post
                });
                //the response.data is what the BACKEND returns when you compare and save an application
                console.log(response.data);
                setdataLoans(response.data);
                //go to page to that shows the results
                navigate('/loans/', {state:{ data : response.data }}); 
                
                // isMounted && setUsers(response.data);
                // navigate('/loans', state={ data: "Heath is the best" });

            } catch (err) {
                console.error(err);
                // navigate('/login', { state: { from: location }, replace: true });
            }
        

        const data = 
            {
                first_name: firstName,
                last_name:lastName,
                email : email,
                phone_number : phoneNumber,
                install_street : street,
                install_city : city,
                install_state : state,
                install_zip : zip,
                date_of_birth : 1,
                ssn : social,
                household_income : 100000,
                debt_to_income_ratio : 1.2,
                consent : consent,
        }
    }
    


 const handleSecondApplicant = (event) =>{
    setSecondApplicant(event.target.checked);

    }
        return (
            <>
            <Container >
                <Row className="application">
                    <img src={textOnly} style={{ width: 650, height: 120 }}/>
                    <Link to="/loans" state={{ data: "Heath is the best" }} className="link"></Link>
                </Row>
                
                <Row className="d-flex justify-content-center">
                    <Col md={8} lg={6} xs={8}>
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
                                {secondApplicant ===false ?(
                                    <Button variant="primary" type="submit" onClick={submitApplication}>
                                        Apply
                                    </Button>
                                    ) 
                                    :(// this is on purpoe 
                                    <div></div>)}
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Second Applicant" onChange={handleSecondApplicant}/>
                                </Form.Group>
                            </Col>
                            </Row>    
                        </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {secondApplicant ===true ?(<Row >
                    <Row className="application">
                                <Col md={8} lg={6} xs={8} className=""> 
                                    <h1>Co-Signer</h1>
                                    </Col> 
                            </Row> 
                            <Row className="d-flex justify-content-center">
                                <Col md={8} lg={6} xs={8}>
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





