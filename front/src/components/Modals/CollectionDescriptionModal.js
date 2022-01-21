import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {getTopics} from "../../actions/collectionsActions";

const CollectionDescriptionModal = ({show, close, send, modalInfo, collection}) =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [topicId, setTopicId] = useState(1);
    const [description, setDescription] = useState("")

    useEffect(() => {
        dispatch(getTopics());
        setName(collection?.name ? collection?.name: "");
        setTopicId(collection?.topicId ? collection?.topicId: 1);
        setDescription(collection?.description ? collection?.description: "");
    }, [collection]);

    const topics = useSelector((state)=>state.collections.topics);



    const sendForm = (event) => {
        event.preventDefault();
        send({
            name:name.length? name : "New Collection",
            topicId:topicId,
            description:description
        })
        close();
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
                        <Form.Label>Topic</Form.Label>
                        <Form.Select
                            value={topicId}
                            onChange={(event)=>setTopicId(+event.target.value)}>
                            {topics.map(topic=>{
                                return(<option key={topic.id} value={topic.id}>{topic.name}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Description</Form.Label>
                        <Form.Control  as="textarea"
                                       rows={3}
                                       value={description}
                                       onChange={(event)=>setDescription(event.target.value)}/>
                    </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Close</Button>
                <Button variant="primary" type="submit">{modalInfo.title}</Button>
            </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default CollectionDescriptionModal;