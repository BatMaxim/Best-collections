import React from "react";
import {Form} from "react-bootstrap";

const ModalCustomField = ({customField, value, setValue}) =>{

    const renderInput = () =>{
        {
            switch(customField.type){
                case "String":
                    return(<Form.Control type="text"
                                         placeholder={`Enter ${customField.name}`}
                                         value={value}
                                         onChange={event => setValue(customField.id, event.target.value)}/>);
                case "Bool":
                    return(<Form.Check aria-label="option 1"
                                       checked={value}
                                       onChange={event => setValue(customField.id, event.target.checked)}/>);
                case "Integer":
                    return(<Form.Control type="number"
                                         placeholder={`Enter ${customField.name}`}
                                         value={value}
                                         onChange={event => setValue(customField.id, event.target.value)}/>);
                case "Text":
                    return(<Form.Control type="number"
                                         as="textarea"
                                         placeholder={`Enter ${customField.name}`}
                                         value={value}
                                         onChange={event => setValue(customField.id, event.target.value)}/>);
            }
        }
    }
    return(
        <Form.Group className="mb-3" controlId={customField.name}>
            <Form.Label>{customField.name}</Form.Label>
            {renderInput()}
        </Form.Group>
    )
}

export default ModalCustomField;