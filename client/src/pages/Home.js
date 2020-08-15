import React from "react";
import NavBar from "../components/NavBar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import { Parallax } from "react-parallax";


import FirstImage from "../images/mainPic3.png"
import SecondImage from "../images/mainPic4.png"

// const inlineStyle = {
//     background: '#fff',
//     left: '50%',
//     top: '50%',
//     position: 'absolute',
//     padding: '20px',
//   };

const Home = () =>{
  return(
    <>
      <NavBar />
      <SectionThree />
      <Parallax bgImage={FirstImage} strength={500}>
        <div style={{ height: 700 }}>
          {/* <div style={inlineStyle}>Text</div> */}
        </div>
      </Parallax>
      <div style={{ height: "10vh" }}></div>
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <div style={{ height: "10vh" }}></div>
      <Parallax bgImage={SecondImage} strength={400}>
        <div style={{ height: 700 }}>
          {/* <div style={inlineStyle}>Text</div> */}
        </div>
      </Parallax>
      <div style={{ height: "10vh" }}></div>
      <div style={{ height: "100vh" }}></div>
    </>
  )
};

export default Home;