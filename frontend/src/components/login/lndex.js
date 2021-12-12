import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [nationalId, setNationalId] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      nationalId: nationalId,
      passWord: passWord,
    };

    axios
      .get("http://localhost:3000/user/login", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
       localStorage.setItem("token", JSON.stringify(res.data.token));
        // navigate("/DashDeta", { state: { id: res.data.id } });
      })
      .catch((err) => {
        console.log(err.response.data);

        console.log("Password or User name are Wrong");
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
              <div className="col" id="loginin">
                Login
              </div>
              <div className="col">
                {" "}
                <Link to="/signup" id="link">
                  sing up{" "}
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
                LogIn
              </Button>
            </Form>
          </Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    </div>
  );
}
