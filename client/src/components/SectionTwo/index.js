import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/csvIcon.png';
import Upload4 from '../../images/excelIcon.png';
import Aos from "aos";
import "aos/dist/aos.css";

const SectionTwo = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <Container>
  <Row>
    <Col>
    {/* <div style={{ top: "50%", left: "50%"}}> */}

    {/* </div> */}

    </Col>
    <Col style={{textAlign:'center'}}>    
    <h1 className="sectionTwoHeader">Supports Excel & <br/>CSV files</h1>
<Image data-aos="fade-right" src={ Upload3 }></Image>
<Image data-aos="fade-left" src={ Upload4 }></Image>
</Col>
  </Row>
 
</Container>
    )
}
export default SectionTwo;