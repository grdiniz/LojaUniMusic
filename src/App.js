import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Main from "./components/main";
import Header from "./components/Header";
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  
  return (
    <>
    <Header />
        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  PÁGINAS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Registrar">Registrar</Nav.Link>
                  <Nav.Link href="/Guitarras">Guitarras</Nav.Link>
                  <Nav.Link href="/Violoes">Violoes</Nav.Link>
                  <Nav.Link href="/Contato">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="page-content" />
        <Main/>
        <Footer />
    </>
    )
}

export default App;
