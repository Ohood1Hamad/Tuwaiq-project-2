import React from "react";
// import axios from "axios";
import "./navigation.css";
import { Link } from "react-router-dom";
import {
  NavDropdown,
  Offcanvas,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="App-navbar">
      <Navbar bg="light" className="App-navbar" expand={false}>
        <Container fluid>
          <Nav className="me-auto">
            <NavDropdown.Item href="/">SING UOT</NavDropdown.Item>
          </Nav>

          <Navbar.Brand href="#">
            {" "}
            <img
              id="logo-in"
              src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
              alt=" "
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
