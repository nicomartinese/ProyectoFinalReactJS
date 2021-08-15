import { Navbar, Container, Image, Nav, NavDropdown} from "react-bootstrap"
import { CartWidget } from "../cartWidget"
import './navbar.css';

export const NavBar = () => {
    return(
        <>
            <Navbar className="color-nav" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand><Image src="./images/ECMlogo.png" roundedCircle style={{ width: 80, height: 'auto' }}/></Navbar.Brand>
                    <Nav.Link href="#Cart"><CartWidget/></Nav.Link>
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