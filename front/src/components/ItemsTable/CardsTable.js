import React from "react";
import {Table} from "react-bootstrap";
import CardItem from "../ItemsTableItem/CardItem";

const CardsTable = ({items, customFields, DeleteItem, showActions}) =>{
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                {customFields.map(field=>{

                    return(<th key={field.id}>{field.name}</th>)
                })}
                {showActions && <th>Action</th>}

            </tr>
            </thead>
            <tbody>
            {
             items.map(item=>{
                    return <CardItem item={item}
                                     customFields={customFields}
                                     showActions={showActions}
                                           key={item.id}
                                     DeleteItem={DeleteItem}/>
                })
            }
            </tbody>
        </Table>
    )
}

export default CardsTable;