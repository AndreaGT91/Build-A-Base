import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/csvIcon.png';
import Upload4 from '../../images/excelIcon.png';
import Upload5 from '../../images/ac512x512.png';
import '../SectionThree/style.scss';

const SectionThree = ()=>{
    return(
        <Jumbotron style={{ backgroundColor: 'transparent'}}>
        <Container className='jumbotronSection'>
            <Image style={{ /* Rectangle 6 */


width: "300px",
height: "300px",

// background: { Logo }
}} src={ Upload5 }></Image>
          <h1>Data Management & File Uploads</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )
}
export default SectionThree;