import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import ReactTags from "react-tag-autocomplete";
import "./ItemModel.css";
const ItemModal = ({ show, modalInfo, suggestions }) =>{
    console.log(suggestions)
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState("")

    const sendForm = (event) => {
        // event.preventDefault();
        // send({
        //     name:name.length? name : "New Collection",
        //     topicId:topicId,
        //     description:description
        // })
        // close();
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
        <Modal show={true}
               onHide={()=>{}}
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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{}}>Close</Button>
                    <Button variant="primary" type="submit">{modalInfo.title}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ItemModal;