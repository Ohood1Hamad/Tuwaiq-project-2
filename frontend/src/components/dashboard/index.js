import React from "react";
// import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import "./dashboard.css";

const Dashboard = (props) => {
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
                    <h3>{props.nationalId} </h3>
                  </Col>
                  <Col>
                    {" "}
                    <h3>{props.nationalId} </h3>
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

export default Dashboard;

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
