import { Card } from 'react-bootstrap';
export const Item = (props)=>{
    return (
        <>
            <Card>
                    <Card.Img variant="top" src={props.thumbnail} />
                    <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    </Card.Body>
            </Card>
        </>
    )
}