import React from "react";
import {useSelector} from "react-redux";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";


export default function Commande(props) {

    const state = useSelector(state => state);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ma commande
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
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

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onPay}>Payer</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
