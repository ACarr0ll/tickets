import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Navbar = () => (
  <Container
    fluid
    className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-center"
  >
    <Link className="navbar-brand m-1 justify-content-start" to="/">
      <span className="header">Andrew's Ticket System</span>
    </Link>
    <Link to="/">
      <Button className="btn btn-secondary m-1">Home</Button>
    </Link>

    <Link to="/user">
      <Button className="btn btn-secondary m-1">User</Button>
    </Link>

    <Link to="/tickets">
      <Button className="btn btn-secondary m-1">Ticket List</Button>
    </Link>
  </Container>
);

export default Navbar;
