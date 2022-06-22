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
import './Sidebar.css'

function Sidebar() {
  return (
    <Navbar className="sidebar" fixed  expand="false"  style={{height:'100%'}}>
      <Nav
        style={{ display: "flex", flexDirection: "column" }}
      >
        <NavItem>
          <NavLink href="/dashboard" className="sidebar-li">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/booking" className="sidebar-li">
            Booking
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/customers" className="sidebar-li">
            Customers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/reservations" className="sidebar-li">
            Reservations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/book" className="sidebar-li">
            Book
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/displaycontact" className="sidebar-li">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
