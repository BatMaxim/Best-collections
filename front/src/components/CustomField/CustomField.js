import React, {useState} from "react";
import {Button, ButtonGroup, Form, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit, faSave} from '@fortawesome/free-solid-svg-icons'

import "./CustomField.css"

const CustomField = ({field, deleteField, editField}) => {
    const [editStatus, setEditStatus] = useState(false)
    const [name, setName] = useState(field.name)

    const saveName = () =>{
        editField(field.id, name);
        setEditStatus(false);
    }

    return(
        <ListGroup.Item className="custom-field">
            {!editStatus ? <div>{field.name}</div> : <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />}
            <div className="custom-field__type">{field.type}</div>
            <div className="custom-field__btn-container">
                <ButtonGroup>
                    {
                        !editStatus ?
                        <Button variant="secondary"
                                onClick={()=>setEditStatus(true)}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button> :
                        <Button variant="secondary"
                                onClick={saveName}>
                            <FontAwesomeIcon icon={faSave} />
                        </Button>
                    }
                    <Button variant="danger" onClick={()=>{deleteField(field.id)}}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </ButtonGroup>
            </div>
        </ListGroup.Item>
    )
}

export default CustomField;