import React from "react";
import {Table} from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

const CardsTable = ({items, customFields}) =>{
    return(
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                {customFields.map(field=>{
                    
                    return(<th key={field.id}>{field.name}</th>)
                })}
                <th>Action</th>

            </tr>
            </thead>
            <tbody>
            {
             items.map(item=>{
                    return <CardItem item={item}
                                     customFields={customFields}
                                           key={item.id}/>
                })
            }
            </tbody>
        </Table>
    )
}

export default CardsTable;