import { Container, Col, Row, Image } from 'react-bootstrap';
import './servicios.css';

export const Servicios = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Row>
                            <Image src="../images/footer/payment.svg" rounded className="image-container"/>
                            <div className="caption-container">
                                <h2>
                                    Elegí cómo pagar
                                </h2>
                                <p>
                                    Podés pagar con tarjeta, débito, efectivo.
                                </p>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Image src="../images/footer/shipping.svg" rounded className="image-container"/>
                            <div className="caption-container">
                                <h2>
                                    Envío gratis desde $ 3.500
                                </h2>
                                <p>
                                    Tenés envíos gratis en todos los productos desde $3500.
                                </p>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Image src="../images/footer/protected.svg" rounded className="image-container"/>
                            <div className="caption-container">
                                <h2>
                                    Seguridad, de principio a fin
                                </h2>
                                <p>
                                    ¿No te gusta? ¡Devolvelo! Siempre estas protegido.
                                </p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}