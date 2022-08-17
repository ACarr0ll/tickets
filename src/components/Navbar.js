import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => (
  <Nav
    activeKey="/home"
    className="navbar navbar-expand-lg navbar-light bg-dark d-flex"
  >
    <Nav.Item>
      <span className="header">Andrew's Ticket System</span>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/user">Users</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/tickets">Tickets</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/ticket/new">Create a Ticket</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navbar;
