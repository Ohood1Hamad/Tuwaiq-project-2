import React from "react";
/// import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import Navigation from "../navigation/Navigation";

// import { useLocation } from "react-router";
import "./dashboard.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../footerin/index";

import axios from "axios";

const DashboardDetails = () => {
  const { state } = useLocation();
  const [user, setUser] = useState([]);
  // const [drivingLicenses, setDrivingLicenses] = useState({});
  const userId = state.id;

  useEffect(() => {
    axios
      .post("/user/usersdash", { id: userId })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        // setDrivingLicenses(res.data.drivingLicenses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const navigate = useNavigate();


 
  return (
    <div className="App">
      <Navigation />

      <Container>
        <Row>
          <Col> </Col>
          <Col md={7}>
            <Card className="cards">
              <Card.Body>
                <Row />
                <Row>
                  <Col>
                    <p> Name: </p>
                    <h3> {user.adminId}</h3>
                  </Col>
                  <Col>
                    {" "}
                    <p> National ID number / Iqama ID: </p>
                    <h3>{user.nationalId}</h3>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="code">
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>{" "}
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
      <Footer />
    </div>
  );
};

export default DashboardDetails;
