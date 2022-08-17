import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => (
  <Navbar bg="primary" expand="lg" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <span className="text-white">Andrew's Ticket System</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation">
        <Nav activeKey="/home" className="me-auto">
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
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
