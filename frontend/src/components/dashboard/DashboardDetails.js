import React from "react";
// import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
// import { useLocation } from "react-router";
import "./dashboard.css";
import {useLocation} from 'react-router-dom';
import  { useState,useEffect } from "react";

import axios from "axios";

const DashboardDetails = () => {
  const{state} = useLocation();
  const [userr, setUser] = useState([]);


useEffect(() => {
  axios
    .post("/dash/use",state)
    .then((res) => {
      console.log(res);
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
});
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>nav </Col>
          <Col md={8}>
            <Card className="cards">
              <Card.Body>
                <Row>
                  <Col>
                    <p> Name: </p>
                  </Col>
                  <Col>
                    {" "}
                    <p> National ID number / Iqama ID: </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>{state.nationalId}</h3>
                  </Col>
                  <Col>
                    {" "}
                    <h3> </h3>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md={10}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardDetails;

// <div key={i}>
// <Container>
//   <Row>
//     <Col><Card body>{users.nationalId}</Card></Col>
//     <Col><Card body>{users.adminId}</Card></Col>
//   </Row>
//   <Row>
//     <Col><Card body>This is some text within a card body.</Card></Col>
//     <Col><Card body>This is some text within a card body.</Card></Col>
//     <Col><Card body>This is some text within a card body.</Card></Col> */}
//   {/* </Row> */}
// {/* </Container> */}

//             </div>
