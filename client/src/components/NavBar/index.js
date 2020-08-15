import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

<<<<<<< HEAD
import Dashboard from "../../pages/Dashboard/Dashboard";
=======
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43
import "../NavBar/style.scss";

import Logo from '../../images/android-chrome-192x192.png';


function NavBar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="navBarClass" sticky="top" fixed="top"  variant="light"  >
      <Navbar.Brand href="/">
      <Image style={{ /* Rectangle 6 */


width: "87px",
height: "73px",

// background: { Logo }
}}src={ Logo } fluid />
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/SignUp">SignUp</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
  <Form.Row className="align-items-center">
   
<<<<<<< HEAD
  
=======
    <Col xs="auto">
      <Link to='/Dashboard'>
</Link>
      
    </Col>
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43
  </Form.Row>
</Form>
</Navbar.Collapse>
    </Navbar>
    </div>
    
  
  );
};

export default NavBar;