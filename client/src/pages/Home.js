import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";


import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


import { Parallax } from "react-parallax";


import FirstImage from "../images/mainPic3.png"
import SecondImage from "../images/mainPic4.png"

const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
  }

const Home = () =>{
    return(
        

      <Router>
      <NavBar/>
        <SectionThree />
          <Parallax bgImage={FirstImage} strength={500}>
            <div style={{ height: 700 }}>
              <div style={inlineStyle}>Text</div>
            </div>
          </Parallax>
          <div style={{ height: "10vh" }}></div>
          <SectionOne />
          <SectionTwo />
          <SectionFour />
          <div style={{ height: "10vh" }}></div>
          <Parallax bgImage={SecondImage} strength={400}>
            <div style={{ height: 700 }}>
              <div style={inlineStyle}>Text</div>
            </div>
          </Parallax>
          <div style={{ height: "10vh" }}></div>
          <SectionTwo />
          <div style={{ height: "100vh" }}></div>
         
      </Router>
    
    )
}

export default Home;