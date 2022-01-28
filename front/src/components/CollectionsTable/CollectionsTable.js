import React from "react";
import {Table} from "react-bootstrap";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionsTable = ({ collections, deleteCollection, showActions}) => {
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Topic</th>
                {showActions && <th>Action</th>}
            </tr>
            </thead>
            <tbody>
            {
                collections.map(collection=>{
                    return <CollectionItem collection={collection}
                                           key={collection.id}
                                           deleteCollection={deleteCollection}
                                           showActions={showActions}/>
                })
            }
            </tbody>
        </Table>
    );
}
export default CollectionsTable;