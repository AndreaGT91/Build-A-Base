import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
<<<<<<< HEAD:client/src/pages/Dashboard/Dashboard.js
import NavBar2 from "../../components/NavBar2";
import SideNavBar from "../../components/SideNavBar";
import Databases from "../../components/Databases";
// import Wrapper from "../components/Wrapper";
import Main from "../../components/Main";
=======
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar2 from "../components/NavBar2";
// import Databases from "../components/Databases";
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43:client/src/pages/Dashboard.js

import Upload5 from '../../images/ac512x512.png';

const inlineStyle2 = {
    
    
}

const Dashboard = () => {
  return (
    <div style={inlineStyle2}>
      <NavBar2 />

<<<<<<< HEAD:client/src/pages/Dashboard/Dashboard.js
<div style={inlineStyle2}>
<NavBar2/>
<SideNavBar/>
<Databases/>
{/* <Image style={{ /* Rectangle 6 */ }
{/* width: "50%",
height: "50%",
opacity: "0.1",
marginTop: "-50%",

marginLeft: "35%",
position: "relative", */}
{/* }} src={ Upload5 }></Image>
<Databases/>
       */}
      
</div>
=======
      <Image style={{ /* Rectangle 6 */
        width: "50%",
        height: "50%",
        opacity: "0.1",
        marginTop: "-50%",

        marginLeft: "35%",
        position: "relative",
        }} src={ Upload5 }>
      </Image>
>>>>>>> 45e891cd2f37b57d75310792a74bf9251f9a5a43:client/src/pages/Dashboard.js
      
      {/* <Databases/> */}

      <Container style={{ marginTop: "200px", textAlign: "center" }} >
        <h1>Your Databases</h1>
        <ListGroup>
            <ListGroup.Item>
              <Link to="/BaseTable/n1010SampleInformation">n1010SampleInformation</Link>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Other database
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Another database
            </ListGroup.Item>
          </ListGroup>
      </Container>
    </div>
  );
}

export default Dashboard;