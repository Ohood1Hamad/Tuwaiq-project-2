import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav ,Container} from "react-bootstrap";
import "./header.css"
const Header = () => {
	return(
			<div className="App-head">
<Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>

    <Navbar.Brand href="#home">
      <img
        src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg"
        width="200"
      
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>

  <Navbar.Brand href="/Aboutus" id="home-nav">Home</Navbar.Brand>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" id="home-nav">
      <Nav.Link href="/Aboutus">About Tawakkalna</Nav.Link>
      <Nav.Link href="/Howwork"> How Tawakkalna work </Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
    
     </Nav>
    <Nav>
      <Link eventKey={2} href="#memes" id="sing" to="/login">
       
      SIGE IN
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
	<Outlet/>
	</div>
  )
};

export default Header;
