import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import ReactTags from "react-tag-autocomplete";
import "./ItemModel.css";
import ModalCustomField from "./ModalCustomField/ModalCustomField";
import {setItemCustomFields} from "../../../actions/currenFieldsActions";
const ItemModal = ({ show, close, modalInfo, suggestions, customFields, send, item}) =>{

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const fields = useSelector((state)=>state.currentFields.currentFields);

    useEffect(()=>{
        const newFields = {};
        customFields.forEach(field=>{
            newFields[field.id] = "";
        })
        item?.customFields.forEach(el=>{
            newFields[el.fieldsname.id] = el.value;
        })
        dispatch(setItemCustomFields(newFields));
        setName(item?.name);
        setTags(item?.tags.map(tag=>tag.tag)? item?.tags.map(tag=>tag.tag): []);

    },[customFields])

    const sendForm = (event) => {
        event.preventDefault();
        send(name, tags, fields)
    }

    const setCustomFields = (id, value) => {
        const newFields = {...fields}
        newFields[id] = value;
        dispatch(setItemCustomFields(newFields));
    }

    const addTag = (newTag) => {
        if(!tags.find(tag=>tag.name === newTag.name))
            setTags([...tags, newTag]);
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
                        return <ModalCustomField key={customField.id}
                                                 customField={customField}
                                                 value={fields[customField.id]}
                                                 setValue={setCustomFields}
                        />
                    })}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary"
                            type="submit">{modalInfo.title}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ItemModal;