import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const MyNavbar = ({ toggle, isOpen }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Google Drive Embeder</NavbarBrand>
  </Navbar>
);

export default MyNavbar;
