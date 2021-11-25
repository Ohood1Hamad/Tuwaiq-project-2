import React from "react";
// import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
// import { useLocation } from "react-router";
import "./dashboard.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../footerin/index"

import axios from "axios";

const DashboardDetails = () => {
  const { state } = useLocation();
  const [userr, setUser] = useState([]);

  useEffect(() => {
    axios
      .post("/dash/use", state)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>  </Col>
          <Col md={7}>
            <Card className="cards">
              <Card.Body>
                <Row />
                <Row>
                  <Col>
                    <p> Name: </p>
                    <h3> bbbbbbbbbbbbbbbbb</h3>
                  </Col>
                  <Col>
                    {" "}
                    <p> National ID number / Iqama ID: </p>
                    <h3>xxxxxxxxxxxxxxxxxxxxxx</h3>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="code">
  <Card.Body>This is some text within a card body.</Card.Body>
</Card> </Col>
        </Row>
        <Row>
          <Col></Col>

          <Col md={7}>
            <Card className="prom">
              <Card.Body > promtion </Card.Body>
            </Card>
          </Col>
          <Col><Card className="code">
              <Card.Body > promtion </Card.Body>
            </Card>
            <Card className="code">
              <Card.Body > promtion </Card.Body>
            </Card> <Card className="code">
              <Card.Body > promtion </Card.Body>
            </Card> <Card className="code">
              <Card.Body > promtion </Card.Body>
            </Card>
            
             </Col>
      

        </Row>
      </Container>
      <Footer/>
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
