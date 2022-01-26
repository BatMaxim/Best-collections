import React from "react";
import {Form, Button} from "react-bootstrap";
import "./CommentsForm.css"

const CommentsForm = () =>{
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Comment: </Form.Label>
                <Form.Control as="textarea" rows={3} />
                <div className="comment-form__button-container">
                    <Button variant="secondary">Send</Button>
                </div>
            </Form.Group>
        </Form>
    )
}

export default CommentsForm;