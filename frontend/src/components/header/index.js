import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" sticky="top" className="App-head">
        <Container>
          <Navbar.Brand href="/mian">
            <img
              src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg"
              width="200"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Brand id="home-nav">
            <Link id="home-nav" to="/">
              Home{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="home-nav">
              <Link id="home-nav" to="/Aboutus">
                About Tawakkalna
              </Link>
              <Link id="home-nav" to="/Howwork">
                {" "}
                How Tawakkalna work{" "}
              </Link>
              <Link id="home-nav" to="/Contact">
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Link eventKey={2} id="sing" to="/login">
                SIGE IN
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Header;
