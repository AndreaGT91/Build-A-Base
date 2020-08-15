import React, { useState } from "react";
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image';
import NavBar2 from "../../components/NavBar2";
import SideNavBar from "../../components/SideNavBar";
import Databases from "../../components/Databases";
// import Wrapper from "../components/Wrapper";
import Main from "../../components/Main";

import Upload5 from '../../images/ac512x512.png';

const inlineStyle2 = {
    
    
}

const Dashboard = () => {
  return (

<div style={inlineStyle2}>
<NavBar2/>
<SideNavBar/>
<Databases/>
{/* <Image style={{ /* Rectangle 6 */ }
{/* width: "50%",
height: "50%",
opacity: "0.1",
marginTop: "-50%",

marginLeft: "35%",
position: "relative", */}
{/* }} src={ Upload5 }></Image>
<Databases/>
       */}
      
</div>
      
  );
}

export default Dashboard;