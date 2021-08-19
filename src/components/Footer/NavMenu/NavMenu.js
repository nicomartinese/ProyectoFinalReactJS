import { Navbar, Container, Image, Nav } from "react-bootstrap"
import "./navmenu.css";

export const NavMenu = () => {
    return(
        <>
            <Navbar className="menu-container">
                <Container>
                    <Navbar.Brand><Image src="./images/ECMlogo.png" roundedCircle style={{ width: 80, height: 'auto' }}/></Navbar.Brand>
                        <Nav className="me-auto flex-column">
                            <Nav.Link href="#sale">Tienda</Nav.Link>
                            <Nav.Link href="#contacto">Nosotros</Nav.Link>
                            <Nav.Link href="#contacto">Políticas de privacidad y datos</Nav.Link>
                            <Nav.Link href="#contacto">Políticas de devolución</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}