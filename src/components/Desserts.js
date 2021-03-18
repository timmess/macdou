import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Row} from "react-bootstrap";
import {data} from "../data/Carte";


export default function Desserts() {
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const lastId = state.lastId;

    return(
        <div>
            <h2 className="mt-3 mb-3">Desserts</h2>
                <Row>
                    {data.desserts.map((dessert, index) => (
                        <Col key={index}>
                            <h3>{dessert.name}</h3>
                            <p>{dessert.price} euros</p>
                            <Button onClick={() => buy(dessert)}>Ajouter au panier</Button>
                        </Col>
                    ))}
                </Row>
        </div>
    )

    function buy(value) {
        dispatch({
            type: 'BUY',
            data: {...value, lastId},
        })
    }
}