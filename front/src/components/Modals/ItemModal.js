import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {getTopics} from "../../actions/collectionsActions";

const ItemModal = ({ show, modalInfo }) =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [topicId, setTopicId] = useState(1);
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
                        <Form.Select />

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