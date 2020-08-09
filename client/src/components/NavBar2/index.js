import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Dashboard from "../../pages/Dashboard";
import "../NavBar2/style.scss";

import Logo from '../../images/android-chrome-192x192.png';


function NavBar2() {
  return (
    <div>
    
    <Navbar style={{height:'10%'}} className="navBarClass" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/Home">
  <Image style={{ 
      width: "87px",
      height: "73px",
    }}src={ Logo } fluid /> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="New Base" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Import a spreadsheet</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Start from scratch</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Choose a template</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  <Form>
  <Form.Row className="align-items-center">
   
    <Col xs="auto">
      <Link to='/Login'>
    <Button style={{backgroundColor:"#ff9000"}}>
         logout
    </Button>
</Link>
      
    </Col>
  </Form.Row>
</Form>
  </Navbar.Collapse>
</Navbar>
    </div>
    
  
  );
};

export default NavBar2;

