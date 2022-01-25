import React from "react";
import {Badge, Button, Card, ListGroup} from "react-bootstrap";
import CustomFieldInItem from "../CustomFieldInItem";
import "./ItemDescription.css";

const ItemDescription = ({item}) =>{
    return(
        <Card className="item-description">

            <Card.Header  className="item-description__header">
                <div>
                    Item {item.id}
                </div>
                 <Button variant="secondary" >Edit</Button>
            </Card.Header>


            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Collection: {item.collection.name}</Card.Text>

                <Card.Subtitle>Tags: </Card.Subtitle>
                <div className="item-description__tags">
                    {
                        item.tags.map(tag=>{
                            return( <Badge key={tag.tag?.id} bg="secondary">{tag.tag?.name}</Badge>)
                        })
                    }
                </div>
                <Card.Subtitle>Custom Fields: </Card.Subtitle>
                <ListGroup variant="flush">
                    {
                        item.customFields.map(customField=>{
                            return(<CustomFieldInItem key={customField.id} field={customField}/>)
                        })
                    }
                </ListGroup>

            </Card.Body>
        </Card>

    )
}

export default ItemDescription;