import React from "react";

const CollectionItem = ({collection}) => {
    console.log(collection.picture)
    return(
            <tr>
                <td><img src={collection.picture} alt={collection.name}/></td>
                <td>Name</td>
                <td>Topic</td>
                <td>Description</td>
            </tr>
    );
}
export default CollectionItem;