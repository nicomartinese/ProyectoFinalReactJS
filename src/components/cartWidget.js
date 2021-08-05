import { NavDropdown, Card, Button} from "react-bootstrap";
export const CartWidget = () => {
    return(
        <>
            <NavDropdown.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Carrito</Card.Title>
                        <Card.Text>
                        ESTE ES EL WIDGET DE CARRITO
                        </Card.Text>
                        <Button variant="primary">ESTE ES UN BOTON DE CARRITO</Button>
                    </Card.Body>
                </Card>
            </NavDropdown.Item>
        </>
    )
}