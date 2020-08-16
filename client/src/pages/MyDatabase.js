import React, { useState } from "react";
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image';
import NavBar2 from "../components/NavBar2";
import SideNavBar from "../components/SideNavBar";
import SetupDatabase from "../components/SetupDatabase";
// import Wrapper from "../components/Wrapper";

import Upload5 from '../images/ac512x512.png';

const inlineStyle2 = {
    
    
}

const MyDataBase = () => {
  return (

<div style={inlineStyle2}>
<NavBar2/>
<SideNavBar/>


<SetupDatabase/>
      
      
</div>
      
  );
}

export default  MyDataBase;