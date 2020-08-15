import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
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
        </Container>
      </Jumbotron>
    )
}
export default SectionThree;