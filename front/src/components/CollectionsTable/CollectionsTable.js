import React from "react";
import {Table} from "react-bootstrap";
import CollectionItem from "../CollectionItem/CollectionItem";
import axios from "axios";

const CollectionsTable = ({ collections, deleteCollection}) => {
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Topic</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                collections.map(collection=>{
                    return <CollectionItem collection={collection}
                                           key={collection.id}
                                           deleteCollection={deleteCollection}/>
                })
            }
            </tbody>
        </Table>
    );
}
export default CollectionsTable;