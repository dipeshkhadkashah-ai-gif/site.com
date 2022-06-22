import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom';
import {  NavLink } from "reactstrap";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  let isAdmin = user?.isAdmin;
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href='/login'
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3 g-0">
      <Container>
        <Navbar.Brand href="/">Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: "18px" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/booking">Book Now</Nav.Link>
            <Nav.Link href="/reservation">Resevation</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
            <Nav.Link href="/job">Job</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {user ? (
               
                  <NavDropdown
                    title={user?.firstName}
                    id="basic-nav-dropdown"
                    menuVariant="dark"
                  >
                     {isAdmin === "true" ? (
                    <NavDropdown.Item href="/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                      ) : (
                        ""
                      )}


              
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item>
                  <p>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "white",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </p>
                </NavDropdown.Item>
                </NavDropdown>

            ) : (
              <NavLink href="/login">Log In</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
