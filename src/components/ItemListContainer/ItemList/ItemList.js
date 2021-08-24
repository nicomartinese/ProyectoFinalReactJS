import { useState, useEffect } from 'react';
import { CardGroup, Row, Col } from 'react-bootstrap';
import { Item } from './Item/Item';
import { productos } from '../../../productos';

export const ItemList = ()=>{
    const [items, setItems] = useState([]);
    useEffect(
        ()=>{
            setTimeout(async()=>{
                setItems(productos);
            }, 2000);
        },
    );
    return (
        <>
            <CardGroup>
                <Row xs={2} md={5} className="g-4">
                {items.map((item) => (
                    <Col key={item.id}>
                      <Item {...item}/>
                    </Col>
                ))}
                </Row>
            </CardGroup>
        </>
    )
}