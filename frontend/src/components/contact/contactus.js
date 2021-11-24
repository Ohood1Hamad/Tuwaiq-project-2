import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
	return <div className="contianer-contact"> 
            <div><h1>CONTACT US </h1></div>

    <div className='row-contact'>
        <div className="col">
            <div> <img src="https://ta.sdaia.gov.sa/images/last-icon1.png" />8001289999</div>
            <div> <img src="https://ta.sdaia.gov.sa/images/last-icon2.png" />@TawakkalnaApp</div>
            <div> <img src="https://ta.sdaia.gov.sa/images/mail-icon.png" /> contact@tawakkalna.gov.sa</div>
           
            
        </div>
    </div>
    
    </div>;
};

export default Contact;
