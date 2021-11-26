import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";
import "./About.css"
 import { useState } from "react";

   
   
    
    const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
        </span>
        </p>
    );
    };
    
    const Aboutus = () => {
    return (
        <div >
             <Container>
         <Row>
           <Col>
             <img src="https://ta.sdaia.gov.sa/images/app.png" alt="about" />
           </Col>
           <Col></Col>
           <Col className="read">
            <h1> About Tawakkalna </h1>
        <p>
            <ReadMore>
            As the Saudi Arabian Government is keen to preserve the health
                 and safety of citizens and residents within its soil from the
                 risk of the spread of novel coronavirus; The Saudi Data and
                 Artificial Intelligence Authority (SDAIA) developed Tawakkalna
                 App in order to support government efforts aimed at countering
                 Covid-19. Tawakkalna App was developed to facilitate the
                 issuance of movement permits electronically during the curfew
                 period for government and private sector employees, as well as
                 individuals, in cooperation with the Ministry of Health and all
                 relevant authorities during the curfew, thus helping to reduce
                 the spread of the pandemic in the Kingdom. Tawakkalna helps
                 individuals, security, health and private entities, that are
                 exempted from the curfew, to automatize all transactions between
                 relevant parties in order to mitigate the health, economic and
                 social impacts that may result from the implementation of
                 policies taken to eliminate the spread of Covid-19. Now, as we
                 cautiously return to normal life, Tawakkalna is helping in this
                 phase by new services such as showing Users’ health condition
                 and other services. And as a part of promoting social
                 responsibility, Tawakkalna has provided many services regarding
                 raising concern if there are violations, as well as providing
                 the ability to notify Ministry of Health in the event of a
                 suspected case.
            </ReadMore>
        </p>
        </Col>
         </Row>
       </Container>
        </div>
        
 
    
   );
 };
 
 export default Aboutus;
  
    
   
    
    