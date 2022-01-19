import React from "react";
import {Button, Card} from "react-bootstrap";

const CollectionDescription = ({collection}) => {
    return(
        <Card className="collection">
            <Card.Header className="collection__header">
                <div className="collection__img-container">
                    <img className="collection__img" src={collection.picture}/>
                    <>Collection: {collection.id}</>
                </div>
                <Button variant="secondary">Edit</Button>
            </Card.Header>
            <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
                <Card.Text>
                    Author: {collection.author?.email}
                </Card.Text>
                <Card.Text>
                    {collection.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CollectionDescription;