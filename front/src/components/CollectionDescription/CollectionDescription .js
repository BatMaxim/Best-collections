import React from "react";
import {Button, Card} from "react-bootstrap";
import {useSelector} from "react-redux";

const CollectionDescription = ({collection}) => {
        const user = useSelector((state)=>state.user);
        return(
        <Card className="collection">
            <Card.Header className="collection__header">
                <div className="collection__img-container">
                    <img className="collection__img" src={collection.picture}/>
                    <>Collection: {collection.id}</>
                </div>
                {user.uid===collection.author?.id && <Button variant="secondary">Edit</Button>}
            </Card.Header>
            <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
                <Card.Text>
                    Topic: {collection.topic?.name}
                </Card.Text>
                <Card.Text>
                    Author: {collection.author?.email}
                </Card.Text>
                <Card.Text>
                    Description: {collection.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CollectionDescription;