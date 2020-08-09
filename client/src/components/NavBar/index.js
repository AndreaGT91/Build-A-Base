import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Link from 'react-router-dom/Link';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Dashboard from "../../pages/Dashboard";
import "../NavBar/style.scss";

import Logo from '../../images/android-chrome-192x192.png';


function NavBar() {
  return (
    <div>
    <Navbar className="navBarClass" sticky="top" fixed="top"  variant="light"  style={{ marginTop: "0px" }}>
      <Navbar.Brand href="/">
      <Image style={{ /* Rectangle 6 */


width: "87px",
height: "73px",

// background: { Logo }
}}src={ Logo } fluid />
</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link href="/signUp">SignUp</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
  <Form.Row className="align-items-center">
   
    <Col xs="auto">
      <Link to='/Dashboard'>
    <Button>
         login
    </Button>
</Link>
      
    </Col>
  </Form.Row>
</Form>
    </Navbar>
    </div>
    
  
  );
};

export default NavBar;