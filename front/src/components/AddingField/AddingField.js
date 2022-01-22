import React from "react";
import {FormControl, InputGroup, Button,Form} from "react-bootstrap";
import "./AddingField.css"
const AddingField = () => {
    return(
        <InputGroup className="mb-3">
            <FormControl
                className="adding-field__input"
                placeholder="Name"
                aria-label="Field name"
                aria-describedby="basic-addon2"
            />
            <Form.Select className="adding-field__select">
                <option>String</option>
                <option>Text</option>
                <option>Bool</option>
                <option>Integer</option>
            </Form.Select>
            <Button variant="outline-secondary" id="button-addon2">
                Add
            </Button>
        </InputGroup>
    )
}

export default AddingField;