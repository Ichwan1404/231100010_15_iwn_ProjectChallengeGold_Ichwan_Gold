import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";



const NavbarCom = () => {
  return (
    <div className="Aduh">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
  <Navbar.Brand as={Link} to="/"> Car Rent</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/ourservice">Our Service</Nav.Link>
          <Nav.Link as={Link} to="/whyus">Why Us</Nav.Link>
          <Nav.Link as={Link} to="/testimonial">Testimonial</Nav.Link>
          <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
