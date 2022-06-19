import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
  Collapse,
  Nav,
} from "reactstrap";

function Sidebar() {
  return (
    <Navbar color="dark" fixed  expand="false"  style={{height:'100%'}}>
      <Nav
        style={{ display: "flex", flexDirection: "column" }}
      >
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/booking">
            Booking
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/customers">
            Customers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/booking">
            Booking
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
