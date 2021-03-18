import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Row} from "react-bootstrap";
import {data} from "../data/Carte";

export default function Boissons() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const lastId = state.lastId;

    return(
        <div>
            <h2 className="mt-3 mb-3">Boissons</h2>
            <Row>
                {data.boissons.map((boisson, index) => (
                    <Col key={index}>
                        <h3>{boisson.name}</h3>
                        <p>{boisson.price} euros</p>
                        <Button onClick={() => buy(boisson)}>Ajouter au panier</Button>
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