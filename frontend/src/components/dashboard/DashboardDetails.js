import React from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import Navigation from "../navigation/Navigation";
import {  useLocation } from "react-router";
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
 
  return (

    <div >
      <Navigation />
      <Container  className="App-dash" >
        <Row>
          <Col>
            <Card className="cards" style={{ width: "500px"}}>
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
            <Card className="cards" style={{ width: "500px",high:"5000px" }}>
              <Card.Body>
                <img
                  style={{ width: "100px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt=" vehicle"
                />{" "}
                <div> 
                  <p>
                  Last Up date in :
                  {user.update}

                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-roow">
          <Col>
            {/* <button onClick={()=>{
            Navigate("/")
          }} ></button> */}
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img
                  className="dash-img"
                  style={{ width: "50px", alignContent: "center" }}
                  src={vehicle}
                  alt=" vehicle"
                />
                <h4> vehicles</h4>
              </Card.Header>
              <ListGroup>
                <ListGroup.Item className="list">
                  {" "}
                  Number of Vehicels: {vehicles.count}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  Vehicel type:{vehicles.type}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  Vehicel type2:{vehicles.typeTwo}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img
                  className="dash-img"
                  src={driving}
                  style={{ width: "50px" }}
                  alt=" "
                />
                <h4> Driving licenses</h4>{" "}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="list">
                  Number Of Driving Licenses: {drivingLicenses.count}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  Driving Licenses Expiry Date:{drivingLicenses.expiryDate}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  Driving Licenses Issue Date:{drivingLicenses.issueDate}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  Driving Licenses Issue Place: {drivingLicenses.issuePlace}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img
                  className="dash-img"
                  style={{ width: "50px" }}
                  src={Traffic}
                  alt=" vehicle"
                />
                <h4>Traffic Violations</h4>
              </Card.Header>
              <ListGroup variant="flush" style={{ color: "#a3ebe2" }}>
                <ListGroup.Item className="list">
                  {user.trafficViolations}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <h6>
                    Unpaid Violations:{trafficViolationpaid.unpaidViolations}
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item className="list">
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
                <img
                  className="dash-img"
                  style={{ width: "50px" }}
                  src={pass}
                  alt=" vehicle"
                />
                <h4> PassPort </h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="list">
                  {" "}
                  Number Of PassPorts: {passport.count}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  PassPort Number : {passport.number}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  PassPort Issue Date: {passport.issueDate}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  PassPort Expiry Date: {passport.expiryDate}
                </ListGroup.Item>

                <ListGroup.Item className="list">
                  {" "}
                  PassPort Issue Place:{passport.issuePlace}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img
                  src={qiya}
                  className="dash-img"
                  style={{ width: "50px" }}
                  alt=" "

                />
                <h4> Qiyas Exam Results </h4>{" "}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="list">
                  Test Date: {qiyas.testDate}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  Total Marks:{qiyas.totalMarks}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  {" "}
                  type Of Test:{qiyas.typeOfTest}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                Appointment Number: {qiyas.appointmentNumber}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card className="cards" style={{ width: "18rem", hight: "40px" }}>
              <Card.Header>
                <img
                  className="dash-img"
                  style={{ width: "50px" }}
                  src={Address}
                  alt=" vehicle"
                />
                <h4> Notional Address</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="list">
                  Building Number:{nationalAddress.buildingNumber}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  Zip Code:{nationalAddress.zipCode}
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  Additional Number :{nationalAddress.additionalNumber}
                </ListGroup.Item>
                <ListGroup.Item className="list">
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

export default DashboardDetails;
