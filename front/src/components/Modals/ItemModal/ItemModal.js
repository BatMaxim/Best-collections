import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import ReactTags from "react-tag-autocomplete";
import "./ItemModel.css";
import ModalCustomField from "./ModalCustomField/ModalCustomField";
const ItemModal = ({ show, close, modalInfo, suggestions, customFields }) =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState("")

    const sendForm = (event) => {

    }

    const addTag = (tag) => {
        setTags([...tags, tag]);
    }

    const deleteTag = (id) => {
        let newTags = [...tags];
        newTags.splice(id, 1);
        setTags(newTags);
    }

    return(
        <Modal show={show}
               onHide={close}
               backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo.title}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={sendForm}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                                      value={name}
                                      onChange={(event)=>setName(event.target.value)}
                                      placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="topic">
                        <Form.Label>Tags</Form.Label>
                        <ReactTags tags={tags}
                                   allowNew={true}
                                   onAddition={(tag)=>{addTag(tag)}}
                                   suggestions={suggestions}
                                   onDelete={(id)=>{deleteTag(id)}}
                                    classNames={
                                        {
                                            searchInput: 'form-control item-modal__tags',
                                            selectedTag: 'badge bg-secondary',
                                            selected: 'item-model__tags-container',
                                            suggestions: 'item-model__suggestions',
                                        }
                                    }/>

                    </Form.Group>
                    {customFields.map(customField=>{
                        return <ModalCustomField key={customField.id} customField={customField}/>
                    })}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary" type="submit">{modalInfo.title}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ItemModal;