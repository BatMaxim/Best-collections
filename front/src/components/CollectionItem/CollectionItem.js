import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionItem.css"

const CollectionItem = ({collection}) => {
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
                <td>{collection.description}</td>
            </tr>
    );
}
export default CollectionItem;