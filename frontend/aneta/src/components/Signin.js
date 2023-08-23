import React from "react";
import { useState,  useRef, useEffect, useContext} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/FullLogo.jpg";
import Logo from "../img/FullLogo.jpg";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";

const LOGIN_URL = "token/";


function Signin() {
  const {setAuth }=  useContext(AuthContext);
  const userRef= useRef();
  const errRef= useRef();

  const [user, setUser]= useState('');
  const [pwd, setPwd]= useState('');
  const [errMsg, setErrMsg]= useState('');
  const [success, setSuccess]= useState(false);

useEffect(() =>{
  userRef.current.focus();
},[])

useEffect(() =>{
  setErrMsg('')
},[user,pwd])

  const [currentUser, setCurrentUser] = useState('');
  const [registration, setRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function submitLogin(){  
    fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   console.log(data);
   console.log("data");
   localStorage.setItem('access_token', data.access);
   localStorage.setItem('refresh_token', data.refresh);
   setCurrentUser(localStorage.getItem("access_token"));
})
.catch((err) => {
   console.log(err.message);
});
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.post(LOGIN_URL, 
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
    setAuth({user, pwd, accessToken})
    setUser('');
    setPwd('');
    setSuccess('');

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





  if(success){
  
  return (
    <>
    {success ? (<div></div>):(  //test for <>
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
    )}
    </>
  );
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
                {/* <h2 className="fw-bold mb-2 ">Welcome to Aneta Lending</h2> */}
                <h2 className="fw-bold mb-2 ">This is a test and you are logged in</h2>
                <h2 className="fw-bold mb-2 ">Enter your login and password</h2>
                {/* <p className="mb-3">Please enter your login and password!</p> */}
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
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