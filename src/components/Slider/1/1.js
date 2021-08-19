import { Container, Row, Col, Carousel } from "react-bootstrap";
import './1.css';

export const BodySlider = () => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={4}>        
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/gatos/1.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/gatos/2.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/gatos/3.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/gatos/4.jpg"
                            alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} md={4}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/slider2/curiosidad1.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/slider2/curiosidad2.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/slider2/curiosidad3.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} md={4}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/perros/1.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/perros/2.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/perros/3.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./images/clientes/perros/4.jpg"
                            alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>

    )
}