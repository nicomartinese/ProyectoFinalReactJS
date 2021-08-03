import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
export const NavBar = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">El club de la mascota</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#sale">Sale</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}