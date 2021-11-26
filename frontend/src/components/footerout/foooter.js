import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import "./foooter.css"

const Foooter = () => {
  return (
    <div className="App-footer">
      <Container>
        <Row>
          <Col className="toto">
            <div className="logg">
              <img
                src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg"
                alt=" "
              />{" "}
            </div>
            <div>
              <img src="https://ta.sdaia.gov.sa/images/sdaia.svg" alt=" " />
            </div>
          </Col>
          <Col xs={5}>
            <ul>
              <li><a href="https://ta.sdaia.gov.sa/en/TawakkalnaEn.pdf" />
                User Guide
              </li>
              <li><Link to="https://ta.sdaia.gov.sa/en/privacy-en.html"/>
                {" "}
                Privacy Policy
              </li>
              <li> <a href="https://ta.sdaia.gov.sa/en/terms-en.html"/>
                {" "}
                Terms and Conditions
              </li>
            </ul>
          </Col>
          <Col className="daw">
            <div className="imege" >
              <h4> Download the app</h4>
              <a  href="#" >
              <img src="https://ta.sdaia.gov.sa/images/NewImages/googleplay.png" alt=" " /> </a>
            
            <a href="#" >

              <img  src="https://ta.sdaia.gov.sa/images/NewImages/appstore.png" alt=" " /></a>
           
            <a href="#" >

              <img src="https://ta.sdaia.gov.sa/images/NewImages/huaweigalary.png" alt=" " /></a>
            </div>
          </Col>
        </Row>
        <Row>
    <Col>
    
    </Col>
    <Col xs={5} style={{fontSize:"20px"}} >© All rights reserved, SDAIA, 2021</Col>
    <Col></Col>
  </Row>
      </Container>
      <Outlet/>
    </div>
  );
};

export default Foooter;
