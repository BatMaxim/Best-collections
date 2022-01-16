import React from "react";
import {useParams} from "react-router-dom";
import {Badge, Card, Button} from "react-bootstrap";
import "./CollectionPage.css";

const CollectionPage = () => {
    let { collectionId } = useParams();
    return(
        <div>
            <Card className="collection">
                <Card.Header className="collection__header">
                    <div className="collection__img-container">
                        <img className="collection__img" src={"http://via.placeholder.com/100x100"}/>
                        <>Collection: {collectionId}</>
                    </div>
                    <Button variant="secondary">Edit</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Test name</Card.Title>
                    <Card.Text>
                       Author: test@test.ru
                    </Card.Text>
                    <Card.Text>
                      Test Description
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CollectionPage;