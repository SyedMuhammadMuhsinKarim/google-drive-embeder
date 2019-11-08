import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import * as ROUTES from "./../../constants/routes";

const MyNavbar = ({ toggle, isOpen }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand>
      <Link className="text-white text-decoration-none" to={ROUTES.LANDING}>
        Google Drive Embeder
      </Link>
    </NavbarBrand>
  </Navbar>
);

export default MyNavbar;
