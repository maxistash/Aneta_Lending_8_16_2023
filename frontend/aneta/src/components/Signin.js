import React from "react";
import { useState,  useRef, useEffect} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/FullLogo.jpg";
import Logo from "../img/FullLogo.jpg";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";

const LOGIN_URL = "token/";


function Signin() { 
  const {auth,setAuth }=  useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef= useRef();
  const errRef= useRef();

  const [user, setUser]= useState('');
  const [pwd, setPwd]= useState('');
  const [errMsg, setErrMsg]= useState('');

useEffect(() =>{
  userRef.current.focus();
},[])

useEffect(() =>{
  setErrMsg('')
},[user,pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    console.log(LOGIN_URL);
    const response = await axios.post(LOGIN_URL, 
      // this is the body in the form of a string aka text
      JSON.stringify({username: user, password: pwd}),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'}, 
          withCredentials: true
      }
    );
    console.log(JSON.stringify(response?.data));
    console.log(JSON.stringify(response));
    const accessToken = response?.data?.access
    console.log(accessToken);
    console.log("heath");
    setAuth({ user, pwd, accessToken });
    setUser('');
    setPwd('');
    navigate(from, { replace: true });

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

}


  return (
      <Container>
      {/* <Row className="justify-content-md-center"><h1 className="text-center" >Aenta Lending</h1></Row> */}
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={5} lg={6} className="">
            <img src={index} style={{ width: 650, height: 650 }}/>
        </Col>        
        <Col md={5} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h1 className="text-center">Welcome</h1>
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-centerf">
                        Username
                      </Form.Label>
                      <Form.Control type="text" placeholder="Username" ref={userRef} value={user} required onChange={e => setUser(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label >Password</Form.Label >
                      <Form.Control type="password" placeholder="Password" value={pwd} required onChange={e => setPwd(e.target.value)} />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox" >
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button className="header" variant="primary"  onClick={handleSubmit}>
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
export default Signin;