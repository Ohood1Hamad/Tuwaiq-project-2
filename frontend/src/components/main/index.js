import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./main.css";
import main1 from "../img/main1.jpg";
import main2 from "../img/main2.jpg";
import main3 from "../img/main3.jpg";

function Main() {
  return (
    <div className="App">
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100 " src={main1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={main2} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={main3} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Main;
