import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import "./CommentsForm.css"

const CommentsForm = ({sendComment}) =>{
    const [message, setMessage] = useState("");
    const send = (event) => {
        event.preventDefault();
        sendComment(message)
        setMessage("");
    }
    return(
        <Form onSubmit={send}>
            <Form.Group className="mb-3">
                <Form.Label>Comment: </Form.Label>
                <Form.Control as="textarea"
                              rows={3}
                              value={message}
                              onChange={event=>{setMessage(event.target.value)}}/>
                <div className="comment-form__button-container">
                    <Button variant="secondary" type="submit">Send</Button>
                </div>
            </Form.Group>
        </Form>
    )
}

export default CommentsForm;