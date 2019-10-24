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
import { Link } from "react-router-dom";
import * as ROUTES from "./../../constants/routes"

const NonAuthNav = ({ toggle, isOpen }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Google Drive Embeder</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to={ROUTES.SIGN_IN}>
            <NavLink>Log In</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTES.SIGN_UP}>
            <NavLink>Sign Up</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default NonAuthNav;
