import React from "react";
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

import "./CustomField.css"

const CustomField = ({field}) => {
    return(
        <ListGroup.Item className="custom-field">
            <div>{field.name}</div>
            <div>{field.type}</div>
            <div>
                <ButtonGroup>
                    <Button variant="secondary"><FontAwesomeIcon icon={faEdit} /></Button>
                    <Button variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </ButtonGroup>
            </div>
        </ListGroup.Item>
    )
}

export default CustomField;