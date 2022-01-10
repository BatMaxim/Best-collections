import React from "react";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem/UserItem";

const UsersTable = ({users}) => {
    return(
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Email</th>
                <th>Ban status</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user=><UserItem key={user.uid} user={user}/>)
            }
            </tbody>
        </Table>
    )
}

export default UsersTable;