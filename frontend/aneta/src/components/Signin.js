import React from "react";
import { useState,  useEffect} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import index from "../img/FullLogo.jpg"
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
})

function Signin() {
  const [currentUser, setCurrentUser] = useState();
  const [registration, setRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function submitRegistration(e){
  //   // e.preventDefault();
  //   client.post(
  //     "api/register/",
  //     {
  //       email: email,
  //       username: username,
  //       password: password
  //     }
  //   ).then(function(res){
  //     client.post(
  //       "api/login/",
  //       {
  //         email: email,
  //         username: username,
  //         password: password
  //       }
  //   ).then(function(res){
  //     setCurrentUser(true);
  //   });
  // });
  // }


  function submitLogin(){  

    fetch('http://127.0.0.1:8000/api/token/', {
method: 'POST',
body: JSON.stringify({
  username: username,
  password: password
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
   
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
},
})
.then((response) => response.json())
.then((data) => {
   console.log(data);
})
.catch((err) => {
   console.log(err.message);
});
};

  //   // e.preventDefault();
  //   client.post(
  //     "api/token/",
  //     {
  //       username: username,
  //       password: password
  //     }
  //   ).then(function(res){
  //     setCurrentUser(true);
  //   });
  // }

  // function test(test){
  //   console.log(test);

  // }


  // if(currentUser){
  return (
    
    <Container>
      {/* <Row className="justify-content-md-center"><h1 className="text-center" >Aenta Lending</h1></Row> */}
      <Row className="vh-100 d-flex justify-content-center align-items-center">
      
      <Col md={5} lg={6} className="">
          <img src={index} style={{ width: 650, height: 650 }}/>
      </Col>
        
        <Col md={5} lg={6} xs={12}>

          {/* <div className="border border-3 border-primary"></div> */}
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
                      <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label >Password</Form.Label >
                      <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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
                      <button className="header" variant="primary"  onClick={submitLogin()}>
                        Login
                      </button>
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
  // }
  // return 
  //   (
  //   <div> Not logged in
  //     {/* <Button onClick={update_form}> button</Button> */}

  //     {/* {
  //       registrationToggle ? ():()
  //     } */}
  //   </div>
  //   );
    
  
}
export default Signin;