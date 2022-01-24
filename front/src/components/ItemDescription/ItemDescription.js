import React from "react";
import {Badge, Card, ListGroup} from "react-bootstrap";
import CustomFieldInItem from "../CustomFieldInItem";
import "./ItemDescription.css";

const ItemDescription = ({item}) =>{
    return(
        <Card className="item-description">
            <Card.Header>
               Item {item.id}
            </Card.Header>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Collection: {item.collection.name}</Card.Text>

                <Card.Subtitle>Tags: </Card.Subtitle>
                <div className="item-description__tags">
                    {
                        item.tags.map(tag=>{
                            return( <Badge bg="secondary">{tag.tag?.name}</Badge>)
                        })
                    }
                </div>
                <Card.Subtitle>Custom Fields: </Card.Subtitle>
                <ListGroup variant="flush">
                    {
                        item.customFields.map(customField=>{
                            return(<CustomFieldInItem field={customField}/>)
                        })
                    }
                </ListGroup>

            </Card.Body>
        </Card>

    )
}

export default ItemDescription;