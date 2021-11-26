import React from "react";
/// import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
// import { useLocation } from "react-router";
import { useLocation,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../footerin/index"

import axios from "axios";

const Dashboard = () => {
  const { root } = useLocation();
   const [drivingLicenses, setDrivingLicenses] = useState({});
   const userId = root.id;
  // const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .post("/user/usersdash",
       {id:userId}
      )
      .then((res) => {
        console.log(res);
        // setUser(res.data);
         setDrivingLicenses(res.data.drivingLicenses);
      })
      .catch((err) => {
        console.log(err);
      });

  },[ ]);
  
  return (
   <div>
<Container>
<Row>
          <Col></Col>

          <Col>
            <Card className="code">
              <Card.Body> {drivingLicenses.count} </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
        
          </Row>
          <Row>
          <Col></Col>

          <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="code">
              <Card.Body> promtion </Card.Body>
            </Card>
            </Col>
        
          </Row>
      </Container>

<Footer/>

            </div>
  )
}
  
export default Dashboard;


