import React, {useState}from "react";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/csvIcon.png';
import Upload4 from '../../images/excelIcon.png';
import Upload5 from '../../images/ac512x512.png';
import '../NewDbModal/style.scss';


function NewDbModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div  style={{ marginLeft: '2%', width:'500px'}}>
        <Button variant="primary" onClick={handleShow}>
          New DB
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter new database name</Modal.Title>
      
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">
    {/* <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend> */}
    <FormControl
      placeholder="What would you like to name your database?"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create Base
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default NewDbModal;