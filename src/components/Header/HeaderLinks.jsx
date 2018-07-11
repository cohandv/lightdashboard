import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title="Options"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Available Operative Systems</MenuItem>
            <MenuItem eventKey={2.2}>Available Support Groups</MenuItem>
            <MenuItem divider />
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
