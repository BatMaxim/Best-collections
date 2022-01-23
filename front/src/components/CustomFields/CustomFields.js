import React from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import CustomField from "../CustomField/CustomField";
const CustomFields = ({fields}) => {
    return(
        <Card>
            <Card.Header>
                Custom Fields
            </Card.Header>
            <ListGroup variant="flush">
                {fields.map(field=>{
                    return(<CustomField field={field} key={field.id}/>)
                })
                }

            </ListGroup>
        </Card>
    )
}

export default CustomFields;