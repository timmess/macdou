import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import Commande from "./Commande";

export default function Panier() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <Container>
            <h2 className="mt-3 mb-3">Mon panier</h2>
            <Row>
                {state.panier.map((achat, index) => (
                    <div className="col-6 mt-2 mb-2" key={index}>

                        {achat.category === "menu" ?
                            <>
                                <h4>{achat.category} {achat.name}</h4>
                                <ul>
                                    <li>{achat.sandwich}</li>
                                    <li>{achat.boisson}</li>
                                    <li>{achat.dessert}</li>
                                    <li>{achat.price} euros</li>
                                </ul>
                            </>

                            :

                            <>
                                <h4>{achat.category}</h4>
                                <ul>
                                    <li>{achat.name}</li>
                                    <li>{achat.price} euros</li>
                                </ul>
                            </>
                        }
                        <Button onClick={() => removeItem(achat)}>Retirer du panier</Button>
                    </div>
                ))}
            </Row>

            {state.panier.length > 0 &&
            <Row>
                <Col className="text-center mt-5">
                    <p><strong>Prix total : {state.totalPrice} euros</strong></p>
                </Col>
            </Row>
            }

            {state.panier.length === 0 &&
            <Row>
                <Col className="text-center mt-5">
                    <p>Faites vos achats</p>
                </Col>
            </Row>
            }

            <Button disabled={state.panier.length === 0}
                    onClick={() => setModalShow(true)}
                    className="mt-4">Valider</Button>

            <Commande
                show={modalShow}
                onHide={() => setModalShow(false)}
                onPay={handlePay}
            />

            <hr/>
            <Button disabled={state.panier.length === 0} onClick={handleReset}>Annuler</Button>
        </Container>
    )

    function handlePay() {
        alert("Vous avez été prélevé de " + state.totalPrice + " euros !");
    }

    function handleReset() {
        dispatch(
            {type: "RESET"}
        )
    }

    function removeItem(value) {
        dispatch({
            type: 'REMOVE_ITEM',
            data: value
        })
    }
}