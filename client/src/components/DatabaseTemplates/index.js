import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/csvIcon.png';
import Upload4 from '../../images/excelIcon.png';
import AddIcon from '../../images/addIcon.png';
import CalenderIcon from '../../images/calenderIcon.png';
import MyDatabase from "../../pages/MyDatabase";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Databases/style.scss'

const DatabaseTemplates = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <div style={{marginLeft: '5px', padding: '10px', marginTop: '1%'}}>
        <Container>
 {/* <h1 style={{marginLeft: '150px', padding: '20px', marginTop: '50px'}}>My workspace</h1> */}
  <Row>
  <CardDeck data-aos="fade-right" style={{marginLeft: '90px', padding: '1px'}}>

  <Card className="dbCards">
  
    <Card.Img variant="top" href="/Home" src={CalenderIcon}/>
    <Card.Link  className="stretched-link" href="#">Card Link</Card.Link>
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src="holder.js/100px160" />
    
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src="holder.js/100px160" />
   
  
   
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src="holder.js/100px160" />
   
  
   
  </Card>
  
  
</CardDeck>
  </Row>

  <Row>
  <CardDeck data-aos="fade-left" style={{marginLeft: '90px', padding: '1px'}}>

  <Card className="dbCards">
    <Card.Img href="#features" variant="top" src="holder.js/100px160" />
    Features
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src="holder.js/100px160" />
    
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src="holder.js/100px160" />
   
  
   
  </Card>
  <Card className="dbCards">
    <Card.Img variant="top" src={AddIcon} />
    <Card.Link style={{textAlign: 'center'}} className="stretched-link" href="/MyDatabase">Add a base</Card.Link>
   
  
   
  </Card>
  
  
  
</CardDeck>
  </Row>


  
</Container>



</div>
    )
}



export default DatabaseTemplates;