import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionItem.css"
import {Button} from "react-bootstrap";
import axios from "axios";

const CollectionItem = ({collection, deleteCollection}) => {
    const navigate = useNavigate();



    return(
            <tr onClick={()=>{navigate(`/collection/${collection.id}`)}}>
                <td className="collection-item__img-container">
                    <img src={collection.picture}
                         alt={collection.name}
                         className="collection-item__img"/>
                </td>
                <td>{collection.name}</td>
                <td>{collection.topic.name}</td>
                <td className="collection-item__btn-container"> <Button variant="danger" onClick={(event)=>deleteCollection(event, collection.id)}>Delete</Button></td>
            </tr>
    );
}
export default CollectionItem;