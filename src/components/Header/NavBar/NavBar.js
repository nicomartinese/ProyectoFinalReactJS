import { Col, Container, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import { CartWidget } from "../../cartWidget";

import './navbar.css';

export const NavBar = () => {
    return(
        <>
            <Navbar className="color-nav" variant="dark" expand="lg">
                <Container>
                    <Col>
                        <Navbar.Brand><Link to="/"><Image src="./images/ECMlogo.png" roundedCircle style={{ width: 80, height: 'auto' }}/></Link></Navbar.Brand>
                    
                    </Col>
                    <Col>
                        <Nav.Link className="sale"><CartWidget/></Nav.Link>
                    </Col>
                    <Col>
                        <Row>

                        </Row>
                        <Row>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="">
                                <Nav className="me-auto">
                                    <Nav.Link><Link to="/Shop" className="nav-menu">Tienda</Link></Nav.Link>
                                    <Nav.Link><Link to="/Nosotros" className="nav-menu">Nosotros</Link></Nav.Link>
                                    <NavDropdown title="Categorías" id="basic-nav-dropdown" className="nav-menu">
                                        <NavDropdown.Item><Link to="/Shop">Perros</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item><Link to="/Shop">Gatos</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item><Link to="/Shop">Accesorios</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className="sale">SALE!</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Row>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}