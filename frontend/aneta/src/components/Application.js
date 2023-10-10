import {React}from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Form, Card, Container,ToggleButton,ToggleButtonGroup  } from "react-bootstrap";
import textOnly from "../img/TextOnly.png";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import Loans from './Loans';
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";



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
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setzip] = useState();
    const [dob, setDOB] = useState();
    const [social, setSocial] = useState();
    const [consent, setConsent] = useState();
    const [dataLoans, setdataLoans] = useState();
    const [errMsg, setErrMsg]= useState('');
    const {auth}=  useAuth();
     
    


    useEffect(() => {
        console.log(auth);
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
                // navigate('/login', { state: { from: location }, replace: true });
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
        console.log("sending");
        if(consent){
            console.log("consent")
        }

        try{
            const response = await axios.post("applicants/",  
              // this is the body in the form of a string aka text
            //   {
            //     "first_name": "",
            //     "last_name": "",
            //     "applicant_email": "",
            //     "phone_number": null,
            //     "street_address": "",
            //     "city": "",
            //     "state": "",
            //     "zip_code": null,
            //     "dob": null,
            //     "ssn": null,
            //     "public": false
            // }
            //   JSON.stringify({bank: 1, loan_requirement: "24", apr:23, amount: 1,term: 1, dealer_fee: 1 , public: true}),
              JSON.stringify({first_name: firstName, last_name: lastName, applicant_email:email, phone_number: phoneNumber, street_address: street , city: city , state: state, zip_code: zip,dob: dob, ssn:social,public:false}),
              {
                withCredentials: true,
                headers: {
                   
                    'Content-Type': 'application/json',
                    // "Access-Control-Allow-Credentials": true,

                    'Authorization': 'Bearer ' + auth.accessToken                  
                }
                // headers: {
                //   'Content-type': 'application/json; charset=UTF-8'}, 
                //   withCredentials: true,
              }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            // const accessToken = response?.data?.access
            // console.log(accessToken);
            console.log("heath");
            // setAuth({ user, pwd, accessToken });
            // setUser('');
            // setPwd('');
            // navigate(from, { replace: true });
        
          }catch (err){
            if(!errMsg){
              setErrMsg('No server response');
        
            } else if (err.response?.status ===400){
              setErrMsg('Missng username or password');
        
            } else if (err.response?.status ===401){
              setErrMsg('Unauthorized');
        
            }else{
              setErrMsg('Login failed');
        
            }
          }
        
        
            try {
                const response = await axiosPrivate.get('loans/', {
                    
                    // signal: controller.signal
                    //use a BODY when you are doing a .post
                });
                //the response.data is what the BACKEND returns when you compare and save an application
                console.log(response.data);
                setdataLoans(response.data);
                //go to page to that shows the results
                // navigate('/loans/', {state:{ data : response.data }}); 
                
                // isMounted && setUsers(response.data);
                // navigate('/loans', state={ data: "Heath is the best" });

            } catch (err) {
                console.error(err);
                // navigate('/login', { state: { from: location }, replace: true });
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
                                    <Form.Control type="text" placeholder="First" value={firstName} required onChange={e => setFirstName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last" onChange={e => setLastName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" onChange={e => setStreet(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" onChange={e => setCity(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="state" placeholder="State" onChange={e => setState(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="Zip Code" onChange={e => setzip(e.target.value)}/>
                                </Form.Group>
                            </Col> 
                            <Col>   
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="Date of Birth" onChange={e => setDOB(e.target.value)}/>
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Household Income</Form.Label>
                                    <Form.Control type="number" placeholder="50,000" />
                                </Form.Group> */}
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Debt to Income</Form.Label>
                                    <Form.Control type="number" placeholder="50%" />
                                </Form.Group> */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Social</Form.Label>
                                    <Form.Control type="number" placeholder="Social" onChange={e => setSocial(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I Consent" onChange={e => setConsent(e.target.value)}/>
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





