import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

import "./singup.css";
export default function Signup() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      nationalId: nationalId,
      passWord: password,
    };

    axios
      .post("/user/singup", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Container id="con">
        <Row id="row-log">
          <Col></Col>
          <Col xs={{ order: 6 }}>
            <div className="row" id="row-log">
              {" "}
              <img
                id="logot"
                src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
                alt=" "
              />
            </div>
            <div className="row" id="row-log">
              <div
                className="col"
                id="loginin"
              >
               Sing Up
              </div>
              <div className="col">
                {" "}
                <Link to="/login" id="link-in">
                 LogIn{" "}
                </Link>{" "}
              </div>{" "}
            </div>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Group className="mb-3" controlId="">
                <Form.Label> Enter Nationalid </Form.Label>
                <Form.Control
                  type="id"
                  placeholder="Enter Nationalid"
                  onChange={(event) => {
                    setNationalId(event.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
               singup
              </Button>
            </Form>
          </Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    </div>
  );
}
