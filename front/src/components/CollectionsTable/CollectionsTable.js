import React from "react";
import {Table} from "react-bootstrap";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionsTable = () => {
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
            <CollectionItem collection={{picture:"http://via.placeholder.com/100x100"}}/>
            </tbody>
        </Table>
    );
}
export default CollectionsTable;