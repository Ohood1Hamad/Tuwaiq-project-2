import React from "react";
/// import React from "react";
import { Card, Col, Row, Container ,ListGroup} from "react-bootstrap";
import Navigation from "../navigation/Navigation";
import { useLocation } from "react-router";
import "./dashboard.css";
import { useState, useEffect } from "react";
import Footer from "../footerin/index";
import vehicle from "../img/vehicle.png"
import axios from "axios";

const DashboardDetails = () => {
  const { state } = useLocation();
  const [user, setUser] = useState([]);
 const [drivingLicenses, setDrivingLicenses] = useState({});
 const [ vehicles  , setVehicles] = useState({});
  const userId = state.id;

  useEffect(() => {
    axios
      .post("/user/usersdash", { id: userId })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setDrivingLicenses(res.data.drivingLicenses);
        setVehicles(res.data.vehicles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navigation/>
      <Container>
  <Row>
    <Col><Card>
  <Card.Body>
    <div>
      <h6> NAME:</h6>
      <h2>{user.adminId}</h2>
    </div>
    <div>
    <h6> National ID number / Iqama ID:</h6>
      <h2>{user.nationalId}</h2>
    </div>
  </Card.Body>
</Card></Col>
    <Col><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
  </Row>
  <Row>
  <Col><Card style={{ width: '18rem' }}>
  <Card.Header><img style={{width:"50px"}} src={vehicle} alt=" vehicle"
  />
    <h4> vehicles</h4>

  </Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>  {vehicles.count}</ListGroup.Item>
    <ListGroup.Item>{vehicles.type}</ListGroup.Item>
    <ListGroup.Item>{vehicles.type}</ListGroup.Item>
  </ListGroup>
</Card></Col>


    <Col><Card style={{ width: '18rem' }}>
  <Card.Header>drivingLicenses</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{drivingLicenses.issueDate}</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card></Col>


    <Col><Card style={{ width: '18rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card></Col>
  
  </Row>
</Container>

      {/* <Container className="dashboard">
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
            <Card className="code-card">
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>{" "}
          </Col>
        </Row>
        <Row>
          <Col></Col>

          <Col>
          <Card style={{ width: '18rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
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
      </Container> */}
      <Footer />
    </div>
  );
};

export default DashboardDetails;
