import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Row} from "react-bootstrap";
import {data} from "../data/Carte";

export default function Menus() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const lastId = state.lastId;

    return(
        <div>
            <h2 className="mt-3 mb-3">Menus</h2>
            <Row>
                {data.menus.map((menu, index) => (
                    <Col key={index}>
                        <h3>{menu.name} :</h3>
                        <ul>
                            <li>Sandwich : {menu.sandwich}</li>
                            <li>Boisson : {menu.boisson}</li>
                            <li>Dessert : {menu.dessert}</li>
                            <li>{menu.price} euros</li>
                        </ul>
                        <Button onClick={() => buy(menu)}>Ajouter au panier</Button>
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