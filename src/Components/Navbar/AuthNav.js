import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Logout from "../../User/logout";
// import { Link } from "react-router-dom";

const AuthNav = ({ toggle, isOpen }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Google Drive Embeder</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>
            <Logout />
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default AuthNav;
