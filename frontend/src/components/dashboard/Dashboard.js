import React from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import Navigation from "../navigation/Navigation";
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

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [drivingLicenses, setDrivingLicenses] = useState({});
  const [passport, setPassport] = useState({});
  const [vehicles, setVehicles] = useState({});
  const [trafficViolationpaid, setTrafficViolationpaid] = useState({});
  const [nationalAddress, setNationalAddress] = useState({});
  const [qiyas, setQiyas] = useState({});
  const userId = sessionStorage.getItem("users");

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

  return (
    <div>
      <Navigation />
      <Container className="App-dash">
        <Row className="card-roow">
          <Col>
            <Card className="cards">
              <Card.Header>
                <img className="dash-img" src={pass} alt=" vehicle" />
                <h4> PassPort </h4>
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
            <Card className="cards">
              <Card.Header>
                <img className="dash-img" src={driving} alt=" " />
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
        </Row>
        <Row>
          <Col>
            <Card className="cards">
              <Card.Header>
                <img className="dash-img" src={Traffic} alt=" vehicle" />
                <h4>Traffic Violations</h4>
              </Card.Header>
              <ListGroup variant="flush">
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

          <Col>
            <Card className="cards">
              <Card.Header>
                <img className="dash-img" src={vehicle} alt=" vehicle" />
                <h4> vehicles</h4>
              </Card.Header>
              <ListGroup>
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
        </Row>{" "}
        <Row>
          <Col>
            <Card className="cards">
              <Card.Header>
                <img src={qiya} className="dash-img" alt=" " />
                <h4> Qiyas Exam Results </h4>{" "}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Test Date: {qiyas.testDate}</ListGroup.Item>
                <ListGroup.Item>Total Marks:{qiyas.totalMarks}</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  type Of Test:{qiyas.typeOfTest}
                </ListGroup.Item>
                <ListGroup.Item>
                  Appointment Number: {qiyas.appointmentNumber}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards">
              <Card.Header>
                <img className="dash-img" src={Address} alt=" vehicle" />
                <h4> Notional Address</h4>
              </Card.Header>
              <ListGroup variant="flush">
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

      <Footer />
    </div>
  );
};

export default Dashboard;
