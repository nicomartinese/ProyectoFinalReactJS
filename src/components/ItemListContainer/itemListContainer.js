import { Row, Col } from "react-bootstrap";
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { ItemList } from "./ItemList/ItemList"
import './itemlistcontainer.css';

export const ItemListContainer = () => {
    return(
        <>
            <div className="item-container">
                <Row>
                    <Col xs={3}>
                        <h1>
                            FILTROS
                        </h1>
                        <h2>
                            filtros1
                        </h2>
                        <h2>
                            filtros2
                        </h2>
                        <h2>
                            filtros3
                        </h2>
                    </Col>
                    <Col XS={9}>
                            <ItemList />
                    </Col>
                </Row>
            </div>
        </>
    )
}