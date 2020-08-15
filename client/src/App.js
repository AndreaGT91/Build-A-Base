import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyDatabase from "./pages/MyDatabase";
import { Parallax } from "react-parallax";
import "./App.scss";


import FirstImage from "./images/1.png"

const image2 = "https://media-public.canva.com/MAC_ThKmzeg/1/thumbnail_large-1.jpg"
const image3 = "https://media-public.canva.com/MADCCLp1-lc/1/thumbnail_large-1.jpg"

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
}

function App() {
  return (
    <div className="div1">
      <Router>
      <div>
       
        <Switch>
          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/SignUp"><SignUp /></Route>
          <Route exact path="/Home"><Home /></Route>
          <Route exact path="/Dashboard"><Dashboard /></Route>
          <Route exact path="/MyDatabase"><MyDatabase /></Route>

          <Route exact path="/*"><Home /></Route>

        </Switch>
        </div>
        </Router>
       
    </div>
         
     
  );
}

export default App;
