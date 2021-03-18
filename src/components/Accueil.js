import React from "react"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Boissons() {
    return (
        <div className="mt-2 text-center d-flex align-items-center h-100">
            <div className="d-block">
                <h4 className="mb-4">Codez comme vous êtes !</h4>
                <Button>
                    <Link to='/menus' className="text-light">
                        Commander !
                    </Link>
                </Button>
            </div>
        </div>
    )
}