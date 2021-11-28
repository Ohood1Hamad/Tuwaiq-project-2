import React from "react";
import { Card, Col, Row, Container, ListGroup, Button } from "react-bootstrap";
import Navigation from "../navigation/Navigation";
import Dashboard from "./Dashboard";
import { Navigate, useLocation } from "react-router";
import "./dashboard.css";
import { useState, useEffect } from "react";
import Footer from "../footerin/index";
import vehicle from "../img/vehicle.png";
import driving from "../img/Driving licenses.png";
import Address from "../img/ND.png";
import pass from "../img/p.png";
import Traffic from "../img/Traffic.png";
import qiya from "../img/qiyas.png";
import axios from "axios";

const DashboardDetails = () => {
  const { state } = useLocation();
  const [user, setUser] = useState([]);
  const [drivingLicenses, setDrivingLicenses] = useState({});
  const [passport, setPassport] = useState({});
  const [vehicles, setVehicles] = useState({});
  const [trafficViolationpaid, setTrafficViolationpaid] = useState({});
  const [nationalAddress, setNationalAddress] = useState({});
  const [qiyas, setQiyas] = useState({});
  const userId = state.id;

  useEffect(() => {
    axios
      .post("/user/usersdash", { id: userId })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setDrivingLicenses(res.data.drivingLicenses);
        setTrafficViolationpaid(res.data.trafficViolationpaid);
        setPassport(res.data.passport);
        setVehicles(res.data.vehicles);
        setNationalAddress(res.data.nationalAddress);
        setQiyas(res.data.qiyas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // function toDashboard() {
  //   setUser([]);
  // }
  // const usersdash = user.map(users){
  //   return( )
  // }
  return (

    <div className="App-dash">
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Card className="cards" style={{ width: "500px", hight: "40px" }}>
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
            </Card>
          </Col>
          <Col>
            <Card className="cards" style={{ width: "500px", hight: "40px" }}>
              <Card.Body>
                <img
                  style={{ width: "100px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt=" vehicle"
                />{" "}
                Last Up date in :{user.update}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          {/* <button onClick={()=>{
            Navigate("/")
          }} ></button> */}
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header >
                <img
                  className="dash-img"
                  style={{ width: "50px", alignContent: "center" }}
                  src={vehicle}
                  alt=" vehicle"
                />
                <h4> vehicles</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  Number of Vehicels: {vehicles.count}
                </ListGroup.Item>
                <ListGroup.Item> Vehicel type:{vehicles.type}</ListGroup.Item>
                <ListGroup.Item>
                  Vehicel type2:{vehicles.typeTwo}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img src={driving} style={{ width: "50px" }} />
                <h4> Driving licenses</h4>{" "}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Number Of Driving Licenses: {drivingLicenses.count}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Driving Licenses Expiry Date:{drivingLicenses.expiryDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Driving Licenses Issue Date:{drivingLicenses.issueDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  Driving Licenses Issue Place: {drivingLicenses.issuePlace}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img style={{ width: "50px" }} src={Traffic} alt=" vehicle" />
                <h4>Traffic Violations</h4>
              </Card.Header>
              <ListGroup variant="flush" style={{ color: "#a3ebe2" }}>
                <ListGroup.Item>{user.trafficViolations}</ListGroup.Item>
                <ListGroup.Item>
                  <h6>
                    Unpaid Violations:{trafficViolationpaid.unpaidViolations}
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  Paid Violations:{trafficViolationpaid.paidViolations}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img style={{ width: "50px" }} src={pass} alt=" vehicle" />
                <h4> vehicles</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  Number Of PassPorts: {passport.count}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  PassPort Number : {passport.number}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  PassPort Issue Date: {passport.issueDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  PassPort Expiry Date: {passport.expiryDate}
                </ListGroup.Item>

                <ListGroup.Item>
                  {" "}
                  PassPort Issue Place:{passport.issuePlace}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img src={qiya} style={{ width: "50px" }} />
                <h4> Qiyas </h4>{" "}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Test Date: {qiyas.testDate}</ListGroup.Item>
                <ListGroup.Item>Total Marks:{qiyas.totalMarks}</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  type Of Test:{qiyas.typeOfTest}
                </ListGroup.Item>
                <ListGroup.Item>
                  Driving Licenses Issue Place: {qiyas.appointmentNumber}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img style={{ width: "50px" }} src={Address} alt=" vehicle" />
                <h4> Notional Address</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>
                  Building Number:{nationalAddress.buildingNumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  Zip Code:{nationalAddress.zipCode}
                </ListGroup.Item>
                <ListGroup.Item>
                  Additional Number :{nationalAddress.additionalNumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  Unit Number:{nationalAddress.unitNumber}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
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
