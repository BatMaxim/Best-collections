import React from "react";
import { useNavigate } from "react-router-dom";

const CollectionItem = ({collection}) => {
    const navigate = useNavigate();
    return(
            <tr onClick={()=>{navigate(`/collection/${collection.id}`)}}>
                <td><img src={collection.picture} alt={collection.name}/></td>
                <td>{collection.name}</td>
                <td>{collection.topic.name}</td>
                <td>{collection.description}</td>
            </tr>
    );
}
export default CollectionItem;