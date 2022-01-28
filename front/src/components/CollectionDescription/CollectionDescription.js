import React from "react";
import {Button, Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const CollectionDescription = ({collection, openImgModal, openCollectionModal, editRule}) => {
        return(
        <Card className="collection">
            <Card.Header className="collection__header">
                <div className="collection__img-container" onClick={()=>{
                    if(editRule)
                        openImgModal()
                }}>
                    <img className="collection__img" src={collection.picture}/>
                    <>Collection: {collection.id}</>
                </div>
                {editRule && <Button variant="secondary" onClick={openCollectionModal}>Edit</Button>}
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
                    Description:
                </Card.Text>
                <div>
                    <ReactMarkdown children={collection.description}
                                   remarkPlugins={[remarkGfm]}/>
                </div>

            </Card.Body>
        </Card>
    )
}

export default CollectionDescription;