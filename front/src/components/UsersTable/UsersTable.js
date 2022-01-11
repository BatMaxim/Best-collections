import React from "react";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem/UserItem";
import {AllCheckerCheckbox} from "@createnl/grouped-checkboxes";

const UsersTable = ({users}) => {
    return(
        <Table responsive="sm">
            <thead>
            <tr>
                <th><AllCheckerCheckbox /></th>
                <th>Email</th>
                <th>ID</th>
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