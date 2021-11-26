
import { Color } from 'chalk';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./how.css"

const Howwork = () => {
  const [show1, setShow1]=useState(true)
  const [show2, setShow2]=useState(true)
  const [show3, setShow3]=useState(true)
  const [show4, setShow4]=useState(true)
	return <div className="App">
<Container>
  <Row>
    <Col >
    
    <h1 className="howto" >  How to Use Tawakkalna   </h1>
    <div className="show">
        <button onClick={()=>setShow1(!show1)}> How to register in Tawakkalna</button>
        <button onClick={()=>setShow2(!show2)}> For individuals</button>
        <button onClick={()=>setShow3(!show3)}> During the partial ban</button>
        <button onClick={()=>setShow4(!show4)}> Express delivery applications permits</button>
     
    </div>
    
    </Col>
    <Col>
    {
      show1?<ReactPlayer
        url="https://www.youtube.com/watch?v=iKu0bxKbkFc"
      />: show2?<ReactPlayer
      url="https://www.youtube.com/watch?v=9i_Z-1rR58Y"
    />:
  show3?<ReactPlayer
    url="https://www.youtube.com/watch?v=WM_Lqrp_DUc"
  />:
      show4?<ReactPlayer
        url="https://www.youtube.com/watch?v=9i_Z-1rR58Y"
      />:null
    
   }

    
    </Col>
  </Row>
 
</Container>

    </div>;
};

export default Howwork;
