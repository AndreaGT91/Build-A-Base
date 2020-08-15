import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

<<<<<<< HEAD
import Dashboard from "../../pages/Dashboard/Dashboard";
import "../NavBar2/style.scss";
=======
import "./style.scss";
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43

import Logo from '../../images/android-chrome-192x192.png';

function NavBar2(props) {
  const history = useHistory();

  function handleLogoutClick(event) {
    event.preventDefault();
    props.logoutUser();
  };

  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      history.push("/Login")
    }
  }, [props.auth.isAuthenticated]);

  return (
<<<<<<< HEAD
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
        <NavDropdown.Item href="/MyDatabase">Import a spreadsheet</NavDropdown.Item>
        <NavDropdown.Item href="/MyDatabase">Start from scratch</NavDropdown.Item>
        <NavDropdown.Item href="/MyDatabase">Choose a template</NavDropdown.Item>
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
    
  
=======
    <>
      <Navbar className="navBarClass" fixed="top" expand="lg" bg="dark" variant="dark">
      {/* <Navbar style={{ height: '10%' }} className="navBarClass" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
        <Navbar.Brand href="/Home">
          <Image style={{
            width: "87px",
            height: "73px",
          }} src={Logo} fluid />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="mr-auto">
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav>
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Link to='/Login'>
                  <Button
                    style={{ backgroundColor: "#ff9000" }}
                    onClick={handleLogoutClick}
                    >logout
                  </Button>
                </Link>
              </Col>
            </Form.Row>
          </Form>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43
  );
};

NavBar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect( mapStateToProps, { logoutUser } )( NavBar2 );