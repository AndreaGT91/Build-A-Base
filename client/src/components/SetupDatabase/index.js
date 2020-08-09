import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/csvIcon.png';
import Upload4 from '../../images/excelIcon.png';
import AddIcon from '../../images/addIcon.png';
import CalenderIcon from '../../images/calenderIcon.png';
import Link from 'react-router-dom/Link';
import Pagination from 'react-bootstrap/Pagination'
import Dashboard from "../../pages/Dashboard";
import NewDbModal from "../NewDbModal";
import NewFileUploadModal from "../NewFileUploadModal";
import Databases from "../Databases";
import DatabaseTemplates from "../DatabaseTemplates";
import Aos from "aos";
import "aos/dist/aos.css";
import '../SetupDatabase/style.scss'

const SetupDatabase = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <div style={{marginLeft: '275px', padding: '20px', marginTop: '-50%'}}>
        <Container style={{width: '75%'}}>
            <Row >
            <Pagination size="lg" style={{marginLeft: '60px', padding: '20px',backgroundColor: "white", marginTop:"20px",}}>
  
  <Pagination.Prev href="/Dashboard"/>
  
</Pagination>
            <header>
            <h1 style={{marginLeft: '60px', padding: '20px',backgroundColor: "white", marginTop:"20px", opacity:"1"}}>My workspace</h1>
            </header>
            </Row>
            <Alert variant='dark'>
    
  </Alert>     
  <Row>
  <NewDbModal />
  </Row>
  <Alert variant='dark'>
    </Alert>  
  <Row>
  <NewFileUploadModal />
  </Row>
  <Alert variant='dark'>
      Or choose a template
    </Alert> 
    <DatabaseTemplates /> 
 


  
</Container>



</div>
    )
}



export default SetupDatabase;