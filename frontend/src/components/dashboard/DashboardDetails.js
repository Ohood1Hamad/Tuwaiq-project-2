import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import Navigation from "../navigation/Navigation";
import "./dashboard.css";
import { useState, useEffect } from "react";
import Footer from "../footerin/index";

import axios from "axios";

const DashboardDetails = () => {
  const current = new Date();
  const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}Time:${current.getHours()}:${current.getMinutes()}`
  const [user, setUser] = useState([]);
  const userId = sessionStorage.getItem("users");

  useEffect(() => {
    axios
      .post("/user/usersdash", { id: userId })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <Container className="App-dash">
        <Row>
          <Col>
            <Card className="cards-main">
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
            <Card className="cards-main">
              <Card.Body>
                <img
className="codew"                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt=" vehicle"
                />{" "}
                <div>
                  <h4>Last Up date in :</h4>
                  <h3>{date}</h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default DashboardDetails;
