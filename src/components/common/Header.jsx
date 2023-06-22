import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/');
  }
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          SafeLife
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link"} to={'/'}>Recetas</NavLink>
            <NavLink end className={"nav-item nav-link"} to={'/'}>Nosotros</NavLink>
            {
              usuarioLogueado.nombreUsuario?(
                <>
                <NavLink end className={"nav-item nav-link"} to={'/administrador'}>Administrador</NavLink>
                <Button variant="success" onClick={cerrarSesion}>Logout</Button>
                </>
              ):(
                <NavLink end className={"nav-item nav-link"} to={'/login'}>Login</NavLink>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
