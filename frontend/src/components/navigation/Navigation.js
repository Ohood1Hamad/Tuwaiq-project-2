// import React from 'react';
// // import axios from "axios";

// import { Link } from 'react-router-dom';
// import { NavDropdown, Offcanvas, Navbar, Container,Nav } from "react-bootstrap";
// import {useNavigate } from "react-router-dom";

// const Navigation = () => {
	
// 	const navigate = useNavigate();

//   const toDashboard=()=>{
// navigate('/dashboard',{state:{id}});
//   }
 
// //   return (
// //    <>
// // <div> <a onClick={()=>{toDashboard()}}>dashboard B<a/></div

// 	return <div className="App">
		 
// 		<Navbar bg="light" expand={false}>
// 	 <Container fluid>
// 	  <Navbar.Toggle aria-controls="offcanvasNavbar" />
// 	  <Navbar.Offcanvas
// 		id="offcanvasNavbar"
// 		aria-labelledby="offcanvasNavbarLabel"
// 		placement="start"
// 	  >
// 		<Offcanvas.Header closeButton>
// 		  <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
// 		</Offcanvas.Header>
// 		<Offcanvas.Body>
// 		  <Nav className="justify-content-end flex-grow-1 pe-3">

         
// 			<Link onClick={()=>{toDashboard()}} >dashboard </Link>
// 			<Nav.Link href="#action2">Link</Nav.Link>
// 			<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
// 			  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
// 			  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
// 			  <NavDropdown.Divider />
// 			  <NavDropdown.Item href="#action5">
// 				Something else here
// 			  </NavDropdown.Item>
// 			</NavDropdown>
// 		  </Nav>
		 
// 		</Offcanvas.Body>

// 	  </Navbar.Offcanvas>
// 	  <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>

// 	</Container>
//   </Navbar> 

//   </div>;
// };

// export default Navigation;
