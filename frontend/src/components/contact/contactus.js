import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
        <div>
            <h1 style={{ textAlign: "center", fontSize: "60px" }}>
              CONTACT US{" "}
            </h1>
          </div>
          <Col>
          

          <div className="ro-contact">
            <div className="col">
              <div>
                {" "}
                <img src="https://ta.sdaia.gov.sa/images/last-icon1.png" />
                8001289999
              </div>
              <div>
                {" "}
                <img src="https://ta.sdaia.gov.sa/images/last-icon2.png" />
                @TawakkalnaApp
              </div>
              <div>
                {" "}
                <img src="https://ta.sdaia.gov.sa/images/mail-icon.png" />{" "}
                contact@tawakkalna.gov.sa
              </div>
            </div>
          </div>
          </Col>
          <Col></Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Contact;
