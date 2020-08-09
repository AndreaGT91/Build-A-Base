import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, FaHeart } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Logo from '../../images/android-chrome-192x192.png';
import Image from 'react-bootstrap/Image';
import '../SideNavBar/style.scss';


const sideNavBar = {
    background: 'white',
    height: '100vh',
    marginTop: '4.5%'

}
const inlineStyle2 = {
    backgroundColor: 'white',
    borderRight: '1px solid black',

}
const inlineStyle3 = {
background:'white',
    borderRight: '1px solid black',
    color: 'black',
    // marginBottom:"100px",
}
const sideMenu = {
    background:'white',
    borderRight: '1px solid black',
    color: 'black',


}
const sideNavHeader = {

    borderRight: '1px solid black',
    color: 'black',
    height: '25%',
    // marginBottom:"100px",
}
const image = {
    height: '150px',
    width: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
}

function SideNavBar() {
    return (

        <div style={sideNavBar}>
            <ProSidebar style={inlineStyle2}>
                <SidebarHeader style={sideNavHeader}>
                    <Image style={image} src={Logo}></Image>

                </SidebarHeader>
                <SidebarContent style={inlineStyle3}>
                    <Menu style={sideMenu}>
                        {/* <SubMenu title="Components"> */}
                            {/* <MenuItem icon={Logo}> */}
                                {/* Dashboard
  <Link to="/" />
                            </MenuItem> */}
    {/* <MenuItem>Component 1</MenuItem>
                            <SubMenu title="Sub Component 1">
                               
                            </SubMenu> */}
                        {/* </SubMenu> */}
                    </Menu>
                    <MenuItem>
                        Create New Base
  <Link to="/" />
                    </MenuItem>
                    <MenuItem>
                        Create New Base
  <Link to="/" />
                    </MenuItem>
                    <MenuItem>
                        Create New Base
  <Link to="/" />
                    </MenuItem>
                </SidebarContent>
                <SidebarFooter>
                    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
     <MenuItem>
                        Logout
  <Link to="/Login" />
                    </MenuItem>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}


export default SideNavBar;