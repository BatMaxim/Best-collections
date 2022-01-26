import React from "react";
import {Card} from "react-bootstrap";
import "./ItemComment.css"
const ItemComment = ({comment}) =>{
    return(

        <Card  body className="item-comment">
            <Card.Subtitle className="mb-2 text-muted">{comment.sender}</Card.Subtitle>
            <Card.Text className="item-comment__message">
                {comment.message}
            </Card.Text>
            <Card.Text className="item-comment__date">
                {comment.date} 12.03.2012 12:30
            </Card.Text>

        </Card>

    )
}

export default ItemComment;