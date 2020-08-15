import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Upload2 from '../../images/upload2Icon.png';
import '../SectionOne/style.scss';
import Aos from "aos";
import "aos/dist/aos.css";

const SectionOne = ()=>{

    useEffect(()=>{
Aos.init({duration: 2000});
    },[])
    return(
        <Container>
  <Row>
    <Col style={{textAlign:'center'}}>
    {/* <div style={{ top: "50%", left: "50%"}}> */}
    <h1 className="sectionOneHeader">Simple File Uploads</h1>
<Image data-aos="fade-up" src={ Upload2 }></Image>
    {/* </div> */}

    </Col>
    <Col></Col>
  </Row>
 
</Container>
    )
}
export default SectionOne;