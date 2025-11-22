"use client";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-glass sticky-top py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-primary">
          <i className="bi bi-music-note-list me-2"></i>
          New<span className="text-dark">Jeans</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 fw-medium">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#discography" className="mx-2">Discography</Nav.Link>
            <Nav.Link href="#activities" className="mx-2">Activities</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Community</Nav.Link>
          </Nav>
          <Button variant="primary" className="ms-3 rounded-pill px-4">
            Join Bunnies Club
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;