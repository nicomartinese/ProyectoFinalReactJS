import { CardGroup, Row, Col } from 'react-bootstrap';
import { Item } from './Item';
import { productos } from '../productos';
export const ItemList = ()=>{

    return (
        <>
            <CardGroup>
                <Row xs={2} md={5} className="g-4">
                {productos.map((producto) => (
                    <Col>
                      <Item {...producto}/>
                    </Col>
                ))}
                </Row>
            </CardGroup>
        </>
    )
}