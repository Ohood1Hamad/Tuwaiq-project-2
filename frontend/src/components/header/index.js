import React from 'react';
import { Outlet, Link } from "react-router-dom";

import { Navbar, Nav ,Container} from "react-bootstrap";
const Header = () => {
	return(
			<div className="App">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>

    <Navbar.Brand href="#home">
      <img
        src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg"
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
 
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">About Tawakkalna</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
     
        
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Link eventKey={2} href="#memes" to="/login">
       
      SIGE IN
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
	<Outlet/>
	</div>)
};

export default Header;
