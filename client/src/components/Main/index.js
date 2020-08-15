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
import Upload5 from '../../images/ac512x512.png';

const Main = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <div style={{marginLeft: '275px', padding: '20px',  backgroundImage:`url${Upload5}`}}>
        

</div>
    )
}



export default Main;