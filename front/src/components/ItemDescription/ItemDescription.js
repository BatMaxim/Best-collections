import React from "react";
import {Badge, Card} from "react-bootstrap";

const ItemDescription = ({item}) =>{
    return(
        <Card>
            <Card.Header>
               Item {item.id}
            </Card.Header>
            <Card.Body>
                <Card.Title>New Item</Card.Title>
                <Card.Text>Author: Test</Card.Text>
                <Card.Text>Collection: 12</Card.Text>

                <Card.Subtitle>Tags: </Card.Subtitle>
                <div>
                    <Badge bg="secondary">213</Badge>
                    <Badge bg="secondary">321</Badge>
                </div>
                <Card.Subtitle>Custom Items: </Card.Subtitle>
            </Card.Body>
        </Card>

    )
}

export default ItemDescription;