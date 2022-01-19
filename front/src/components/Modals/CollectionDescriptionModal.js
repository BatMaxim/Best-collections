import React, {useEffect} from "react";
import {Button, Form, Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {getTopics} from "../../actions/collectionsActions";

const CollectionDescriptionModal = ({show, close, modalInfo}) =>{
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getTopics());
    }, []);
    const topics = useSelector((state)=>state.collections.topics);

    return(
        <Modal show={show}
               onHide={close}
               backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="topic">
                        <Form.Label>Topic</Form.Label>
                        <Form.Select>
                            {topics.map(topic=>{
                                return(<option key={topic.id} value={topic.id}>{topic.name}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Description</Form.Label>
                        <Form.Control  as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CollectionDescriptionModal;