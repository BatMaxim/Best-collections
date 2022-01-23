import React, {useState} from "react";
import {FormControl, InputGroup, Button,Form} from "react-bootstrap";
import "./AddingField.css"
const AddingField = ({addField}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("String");

    return(
        <InputGroup className="mb-3" className="adding-field">
            <FormControl
                className="adding-field__input"
                placeholder="Name"
                aria-label="Field name"
                aria-describedby="basic-addon2"
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <Form.Select className="adding-field__select"
                         value={type}
                         onChange={(event)=>setType(event.target.value)}>
                <option value="String">String</option>
                <option value="Text">Text</option>
                <option value="Bool">Bool</option>
                <option value="Integer">Integer</option>
            </Form.Select>
            <Button variant="outline-secondary"
                    onClick={()=>{addField(name, type)}}>
                Add
            </Button>
        </InputGroup>
    )
}

export default AddingField;