import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Upload5 from '../../images/ac512x512.png';
import Image from 'react-bootstrap/Image';
import NavBar from "../../components/NavBar";


const inlineStyle2 = {

};

const inlineStyle2 = {
    
  background: 'linear-gradient(180deg, #e4f5fc 10%, white 50%, white)'
}

    props.registerUser(newUser, props.history);
  };

  const { errors } = formData;

  return (
    <div style={inlineStyle2}>
      <NavBar />
      <Image style={{ /* Rectangle 6 */
        width: "900px",
        height: "900px",
        opacity: "0.3",
        marginTop: "1%",

        marginLeft: "15%",
        position: "relative",
      }} src={Upload5}></Image>
      <Card style={{ marginTop: "-50%", marginBottom: "10%", width: "30%", marginRight: "auto", marginLeft: "auto" }}>
        <h1 style={{ textAlign: "center", marginTop: "3%" }}>Fill out information below</h1>
        <hr></hr>
        <Card.Body>
          <Form onSubmit={handleSubmit}>


            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  error={errors.firstName}
                  className={classnames("", {
                    invalid: errors.firstName
                  })}
                />
                <span className="red-text">{errors.firstName}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  error={errors.lastName}
                  className={classnames("", {
                    invalid: errors.lastName
                  })}
                />
                <span className="red-text">{errors.lastName}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={formData.email}
                  error={errors.email}
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  error={errors.password}
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Verify Password"
                  onChange={handleChange}
                  value={formData.password2}
                  error={errors.password2}
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
              </Form.Group>
            </Form.Row>



const SignUp = () =>{
    return(
        <div style={inlineStyle2}>
        <NavBar/>
<Image style={{ /* Rectangle 6 */
width: "80%",
height: "80%",
opacity: "0.3",
marginTop: "1%",

marginLeft: "15%",
position: "relative",
}} src={ Upload5 }></Image>

        <Card style={{ marginTop: "-50%", marginBottom: "10%", width: "40%", marginRight: "auto", marginLeft: "auto" }}>
            <h1 style={{ textAlign: "center", marginTop: "3%", fontSize:'2vw'}}>Fill out information below</h1>
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

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));