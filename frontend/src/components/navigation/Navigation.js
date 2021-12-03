import React from "react";
import "./navigation.css";
import {Link} from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="App-navbar">
      <Navbar bg="light" className="App-navbar" >
        <Container fluid>
          <Nav className="nav-in">
           <Link className="nav-in" to="/">SING UOT</Link>
            <Link className="nav-in" to="/Dashboard">Dashboard</Link>
           <Link className="nav-in" to="/DashDeta">Back</Link>
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
