import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
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

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {}
  });

  //1st iteration:
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      errors: props.errors
    }));
  }, [props.errors])

  //Skipping first iteration (exactly like componentWillReceiveProps):
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (props.auth.isAuthenticated) {
      props.history.push("/Dashboard") // push user to dashboard when they login
    }

    setFormData((prevState) => ({
      ...prevState,
      errors: props.errors
    }));
  }, [props.errors]);

  function handleChange(event) {
    event.persist();

    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  };

  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    props.loginUser(userData);
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
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={formData.email}
                error={errors.email}
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              onChange={handleChange} 
              value={formData.password} 
              error={errors.password}
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group> */}
            <hr></hr>
            <Button style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} variant="primary" type="submit">
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);