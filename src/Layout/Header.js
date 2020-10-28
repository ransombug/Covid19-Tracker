import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { AiFillAlert } from 'react-icons/ai';

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

export default function Header() {

  const context = useContext(UserContext);

  const[isOp, setIsOp] = useState(false);

  const toggle = () => setIsOp(!isOp); 
  
  return (
    <Navbar color="info" light expand="md">

      <NavbarBrand >
        <Link to="/" className="text-white">
         <AiFillAlert size="1.8em"></AiFillAlert> Covid 19 Tracker
        </Link>
        
      </NavbarBrand>

    {/* Displays the SignedIn user Email on the Navbar */}
    <NavbarText className="text-white">{context.user?.email ? context.user.email: "" }</NavbarText>

      {/* <NavbarToggler onClick={toggle} ></NavbarToggler> */}
      <Collapse isOp={isOp} navbar>
        <Nav className="ml-auto" navbar>
          {
            // If the User exists show Logout button, if not show signin and signup button.
             context.user ? (
            <NavItem>
              {/* When user clicks on the logout button set users to null */}
             <NavLink onClick={() => {context.setUser(null)} } className="text-white">Logout</NavLink> 
            </NavItem>
            ) : (
              <>
            <NavItem>
               <NavLink tag={Link} to="/Sup" className="text-white">SignUp</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/Sin" className="text-white">SignIn</NavLink>
            </NavItem>
            </>
            ) 
          }    
        </Nav>
      </Collapse>
    </Navbar>
  );
}
