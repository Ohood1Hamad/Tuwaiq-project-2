import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="App">
      <Container className="containar-foot">
        <Row>
          <Col sm={8}>
            <div className="foot">
              Home About ContactUs How to Use Tawakkalna
            </div>
          </Col>
          <Col sm={4}>All rights reserved to SDAIA | 2021 © SDAIA</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
