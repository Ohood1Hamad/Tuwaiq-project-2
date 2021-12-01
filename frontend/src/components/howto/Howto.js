import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./how.css";

const Howwork = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div className="App-cont">
      <Container>
        <Row>
          <h1 className="howto"> How to Use Tawakkalna </h1>
          <Row></Row>

          <Col>
            <Row>
              <div className="show">
                <button
                  onClick={() => {
                    setShow1(true);
                    setShow2(false);
                    setShow3(false);
                    setShow4(false);
                  }}
                >
                  {" "}
                  How to register in Tawakkalna
                </button>
              </div>
            </Row>
            <Row>
              <div className="show">
                <button
                  onClick={() => {
                    setShow2(true);
                    setShow1(false);
                    setShow3(false);
                    setShow4(false);
                  }}
                >
                  {" "}
                  For individuals
                </button>
              </div>
            </Row>
            <Row>
              <div className="show">
                <button
                  onClick={() => {
                    setShow3(true);
                    setShow2(false);
                    setShow1(false);
                    setShow4(false);
                  }}
                >
                  {" "}
                  During the partial ban
                </button>
              </div>
            </Row>
            <Row>
              <div className="show">
                <button
                  onClick={() => {
                    setShow4(true);
                    setShow1(false);
                    setShow3(false);
                    setShow2(false);
                  }}
                >
                  {" "}
                  Express delivery applications permits
                </button>
              </div>
            </Row>
          </Col>
          <Col>
            <Row>
              {show1 && (
                <ReactPlayer url="https://www.youtube.com/watch?v=iKu0bxKbkFc" />
              )}
              {show2 && (
                <ReactPlayer url="https://www.youtube.com/watch?v=9i_Z-1rR58Y" />
              )}
              {show3 && (
                <ReactPlayer url="https://www.youtube.com/watch?v=WM_Lqrp_DUc" />
              )}
              {show4 && (
                <ReactPlayer url="https://www.youtube.com/watch?v=9i_Z-1rR58Y" />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Howwork;
