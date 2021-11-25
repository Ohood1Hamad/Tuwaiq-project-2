import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
      
  },[])
  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      nationalId: nationalId,
      passWord: password,
    };
    // console.log(
    //   "" + JSON.stringify({ nationalid: nationalId }, { password: password })
    // );

    
    axios
      .post("/user/login", 
        data,
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
         navigate("/DashDeta",
         {state:{id:res.data.id}}
         );
      })
      .catch((err) => {
        console.log(err.response.data);

        console.log("Password or User name are Wrong");
      });
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <div className="row">
              {" "}
              <img
                id="logot"
                src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
             alt=" " />
            </div>
            <div className="row">
              <div className="col">Login</div>
              <div className="col">
                {" "}
                <Link to="/signup" id="link">sing up </Link>{" "}
              </div>{" "}
            </div>
            <Form onSubmit={(e) => {
                  handleSubmit(e);
                }}>
              <Form.Group
                className="mb-3"
                controlId=""
              >
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
                <Form.Check type="checkbox" label="Check me out" />
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
