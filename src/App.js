import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Menu from './components/Menu';
import Sandwichs from "./components/Sandwichs";
import Desserts from "./components/Desserts";
import Boissons from "./components/Boissons";
import Accueil from "./components/Accueil";
import Panier from "./components/Panier";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Commande from "./components/Commande";
import React from "react";


function App() {

    return (
        <BrowserRouter>
            <Container className="App">
                <Row className="text-center mt-2">
                    <Col>
                        <Button className="mr-1">
                            <Link to="/" className="m-2 text-light">Accueil</Link>
                        </Button>
                        <Button className="mr-1">
                            <Link to="/menus" className="m-2 text-light">Menus</Link>
                        </Button>
                        <Button className="mr-1">
                            <Link to="/sandwichs" className="m-2 text-light">Sandwichs</Link>
                        </Button>
                        <Button className="mr-1">
                            <Link to="/boissons" className="m-2 text-light">Boissons</Link>
                        </Button>
                        <Button>
                            <Link to="/desserts" className="m-2 text-light">Desserts</Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route path="/" exact={true} component={Accueil}/>
                            <Route path="/menus" component={Menu}/>
                            <Route path="/sandwichs" component={Sandwichs}/>
                            <Route path="/boissons" component={Boissons}/>
                            <Route path="/desserts" component={Desserts}/>
                        </Switch>
                    </Col>
                    <Col>
                        <Panier/>
                    </Col>
                </Row>
                <Commande />
            </Container>
        </BrowserRouter>
    );
}

export default App;
