import React, { useState } from "react";
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image';
import NavBar from "../components/NavBar";

import Upload5 from '../images/ac512x512.png';

const inlineStyle2 = {
    
    
  }
 
const Login = () => {
    return (
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
  <Card.Body>
      <h1 style={{ textAlign: "center"}}>Login</h1>
      <hr></hr>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  <hr></hr>
  <Button style={{  marginLeft: "auto", marginRight: "auto", display:"block"  }} variant="primary" type="submit">
    Submit
  </Button>
</Form>
        {/* <Col xs="auto">
      <Button style={{  marginLeft: "auto", marginRight: "auto", display:"block"  }} type="submit" className="mb-2">
        Login
      </Button>
    </Col>
      </Form> */}
  </Card.Body>
</Card>
</div>
        
    );
}
 
export default Login;