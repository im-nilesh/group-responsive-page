import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">My Groups</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
