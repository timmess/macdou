import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Row} from "react-bootstrap";
import {data} from "../data/Carte";

export default function Sandwichs() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const lastId = state.lastId;

    return(
        <div>
            <h2 className="mt-3 mb-3">Sandwichs</h2>
            <Row>
                {data.sandwichs.map((sandwich, index) => (
                    <Col key={index}>
                        <h3>{sandwich.name}</h3>
                        <p>{sandwich.price} euros</p>
                        <Button onClick={() => buy(sandwich)}>Ajouter au panier</Button>
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