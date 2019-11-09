import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import * as ROUTES from "./../../constants/routes";

const MyNavbar = ({ toggle, isOpen }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand className="mx-auto">
      <Link className=" text-white text-decoration-none" to={ROUTES.LANDING}>
        Google Drive Embeder
      </Link>
    </NavbarBrand>
  </Navbar>
);

export default MyNavbar;
