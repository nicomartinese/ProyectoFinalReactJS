import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap"
import './itemdetail.css'

export const ItemDetail = (props) => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col xs={12} md={2} lg={2}>
                                miniaturas
                            </Col>
                            <Col xs={12} md={10} lg={10}>
                                <img src={props.thumbnail} alt="imagen de producto"/>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={4}>
                            <Row>
                                <h5>
                                    {props.title+" "+props.price}
                                </h5>
                            </Row>
                            <Row>
                                <Button>Agregar al carrito</Button>
                            </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>
                            Descripción de producto
                        </h4>
                        <p>
                            {props.descpription}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}