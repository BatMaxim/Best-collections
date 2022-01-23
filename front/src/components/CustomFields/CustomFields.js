import React from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import CustomField from "../CustomField/CustomField";
const CustomFields = ({fields, fieldActions}) => {
    return(
        <Card>
            <Card.Header>
                Custom Fields
            </Card.Header>
            <ListGroup variant="flush">
                {fields.map(field=>{
                    return(<CustomField field={field}
                                        key={field.id}
                                        deleteField={fieldActions.delete}
                    />)
                })
                }

            </ListGroup>
        </Card>
    )
}

export default CustomFields;