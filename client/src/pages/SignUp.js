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


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  function handleChange(event) {
    event.persist(); 

    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  };


  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      password2: formData.password2
    };
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
                <Form.Control type="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={formData.email} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Verify Password" onChange={handleChange} value={formData.password2} />
              </Form.Group>
            </Form.Row>

            <hr></hr>
            <Button style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} variant="primary" type="submit">
              Create Account
  </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUp;

