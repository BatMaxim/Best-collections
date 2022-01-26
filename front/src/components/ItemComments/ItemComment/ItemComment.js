import React from "react";
import {Card} from "react-bootstrap";
import "./ItemComment.css"
const ItemComment = ({comment}) =>{
    const date = new Date(comment.date);

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
    };
    return(

        <Card  body className="item-comment">
            <Card.Subtitle className="mb-2 text-muted">{comment.sender}</Card.Subtitle>
            <Card.Text className="item-comment__message">
                {comment.message}
            </Card.Text>
            <Card.Text className="item-comment__date">
                {date.toLocaleString("ru", options)}
            </Card.Text>

        </Card>

    )
}

export default ItemComment;