import React from 'react';
import {Carousel} from "react-bootstrap";
import './main.css'


const Main = () => {
	return <div className="App">


<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://mhtwyat.com/wp-content/uploads/2021/02/%D8%B5%D9%88%D8%B1%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://mhtwyat.com/wp-content/uploads/2021/02/%D8%B5%D9%88%D8%B1%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mhtwyat.com/wp-content/uploads/2021/02/%D8%B5%D9%88%D8%B1%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	</div>;
};

export default Main;
