import React from "react";
import {Form} from "react-bootstrap";

const ModalCustomField = ({customField}) =>{

    const renderInput = () =>{
        {
            switch(customField.type){
                case "String":
                    return(<Form.Control type="text"
                                         placeholder={`Enter ${customField.name}`} />);
                case "Bool":
                    return(<Form.Check aria-label="option 1" />);
                case "Integer":
                    return(<Form.Control type="number"
                                         placeholder={`Enter ${customField.name}`}/>);
                case "Text":
                    return(<Form.Control type="number"
                                         as="textarea"
                                         placeholder={`Enter ${customField.name}`}/>);
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