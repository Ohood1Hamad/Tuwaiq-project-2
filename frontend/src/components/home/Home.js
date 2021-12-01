import React from "react";
import Main from "../main";
import Header from "../header/index";
import Foooter from "../footerout/foooter";
import Contact from "../contact/contactus";
import Howwork from "../howto/Howto";
import Aboutus from "../About/About";

const Home = () => {
  return <div className="App">
      <Header/> 
       <Main />
      <Aboutus />
    
      <Howwork />
      <Contact />
      <Foooter />
  </div>;
};

export default Home;
