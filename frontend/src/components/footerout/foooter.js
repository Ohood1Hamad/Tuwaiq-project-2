import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import "./foooter.css"

const Foooter = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="toto">
            <div >
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
            <div >
              <img src="https://ta.sdaia.gov.sa/images/NewImages/googleplay.png" alt=" " />
            </div>
            <div>
              <img src="https://ta.sdaia.gov.sa/images/NewImages/appstore.png" alt=" " />
            </div>
            <div>
              <img src="https://ta.sdaia.gov.sa/images/NewImages/huaweigalary.png" alt=" " />
            </div>
          </Col>
        </Row>
        {/* <Row>
    <Col>
    
    </Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row> */}
      </Container>
      <Outlet/>
    </div>
  );
};

export default Foooter;
