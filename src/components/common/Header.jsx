import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="success" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="text-white">
          SafeLife
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link text-white"} to={'/login'}>Login</NavLink>
            <NavLink end className={"nav-item nav-link text-white"} to={'/'}>Recetas</NavLink>
            <NavLink end className={"nav-item nav-link text-white"} to={'/'}>Nosotros</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
