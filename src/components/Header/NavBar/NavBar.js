import { Navbar, Container, Image, Nav, NavDropdown} from "react-bootstrap"
import { CartWidget } from "../../cartWidget";

import './navbar.css';

export const NavBar = () => {
    return(
        <>
            <Navbar className="color-nav" expand="lg">
                <Container>
                    <Navbar.Brand><Image src="./images/ECMlogo.png" roundedCircle style={{ width: 80, height: 'auto' }}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Tienda</Nav.Link>
                            <Nav.Link href="#">Nosotros</Nav.Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="sale">SALE!</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href="#Cart" className="sale"><CartWidget/></Nav.Link>
                </Container>
            </Navbar>
        </>
    )
}