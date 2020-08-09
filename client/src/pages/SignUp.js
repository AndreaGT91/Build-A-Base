import React, { useState } from "react";
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Upload5 from '../images/ac512x512.png';
import Image from 'react-bootstrap/Image';
import NavBar from "../components/NavBar";



const inlineStyle2 = {
    
    
}


const SignUp = () =>{
    return(
        <div style={inlineStyle2}>
        <NavBar/>
<Image style={{ /* Rectangle 6 */
width: "900px",
height: "900px",
opacity: "0.3",
marginTop: "1%",

marginLeft: "15%",
position: "relative",
}} src={ Upload5 }></Image>
        <Card style={{ marginTop: "-50%", marginBottom: "10%", width: "30%", marginRight: "auto", marginLeft: "auto" }}>
            <h1 style={{ textAlign: "center", marginTop: "3%"}}>Fill out information below</h1>
            <hr></hr>
  <Card.Body>
  <Form>
  

  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstName" placeholder="First Name" />
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridVerifyPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Verify Password" />
    </Form.Group>
    </Form.Row>
  
    <hr></hr>
  <Button style={{  marginLeft: "auto", marginRight: "auto", display:"block"  }} variant="primary" type="submit">
    Create Account
  </Button>
</Form>
  </Card.Body>
</Card>
</div>
    )
}

export default SignUp;

