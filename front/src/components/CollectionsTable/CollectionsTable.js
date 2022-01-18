import React from "react";
import {Table} from "react-bootstrap";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionsTable = ({ collections }) => {
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Topic</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                collections.map(collection=>{
                    return <CollectionItem collection={collection} key={collection.id}/>
                })
            }
            </tbody>
        </Table>
    );
}
export default CollectionsTable;