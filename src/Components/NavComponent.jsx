import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import './navComponent.css'
import logo from "../logo.png";
import {Link} from 'react-router-dom'

class NavComponent extends Component {
  render() {
    return (
      <>
        <Navbar className="top-navbar" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} width="60" height="auto" alt="logo" />
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className="text-white nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">Tv Shows</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">Reccently Aded</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-white">Mylist</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavComponent;
