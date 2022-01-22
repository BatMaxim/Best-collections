import React from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import CustomField from "../CustomField/CustomField";
const CustomFields = () => {
    return(
        <Card>
            <Card.Header>
                Custom Fields
            </Card.Header>
            <ListGroup variant="flush">
                <CustomField />
            </ListGroup>
        </Card>
    )
}

export default CustomFields;