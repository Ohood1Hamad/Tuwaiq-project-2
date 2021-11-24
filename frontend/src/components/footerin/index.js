import React from 'react';
import { Col, Row, Container } from "react-bootstrap";


const Footer = () => {
	return <div className="App">

<Container>
  <Row>
    <Col sm={8}>
		<ul>
			<li>Home </li>
			<li>About</li>
			<li>Contact Us </li>
			<li>How to Use Tawakkalna </li>
		</ul>
	</Col>
    <Col sm={4}>All rights reserved to SDAIA | 2021 © SDAIA</Col>
  </Row>

</Container>



	</div>;
};

export default Footer;
