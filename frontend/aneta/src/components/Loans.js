import React from "react";
import { useState,  useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';   
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";



function Loans(props) {
    // let { state } = useLocation();
    const location = useLocation();
    const data = location.state?.data;
    // console.log(props, " props");
    // console.log(location, " useLocation Hook");
    useEffect(() => {
        // console.log(props, " props");
        console.log(location, " useLocation Hook");
        const data = location.state?.data;
        console.log(data);

        

    }, [])
  
    return (
        <Container>
            <Row className="vh-100  justify-content-center align-items-center">
                <Card>
                    <Card.Body>
                        {data.count}
                        {/* <div className="RowList">
      {data.results.map(data.results, d =>
        <div className="Row">
          {d}
        </div>
      )}
    </div> */}
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        );
    }

export default Loans;

