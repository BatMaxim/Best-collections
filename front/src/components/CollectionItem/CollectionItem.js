import React from "react";

const CollectionItem = ({collection}) => {
    return(
            <tr>
                <td><img src={collection.picture} alt={collection.name}/></td>
                <td>{collection.name}</td>
                <td>{collection.topic.name}</td>
                <td>{collection.description}</td>
            </tr>
    );
}
export default CollectionItem;