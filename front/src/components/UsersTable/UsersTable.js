import React from "react";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem/UserItem";

const UsersTable = () => {
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
                <UserItem user={{uid: 1235468432123548231, email: "abc@test.tu"}}/>
                <UserItem user={{uid: 1235468432123548231, email: "abc@test.tu"}}/>
                <UserItem user={{uid: 1235468432123548231, email: "abc@test.tu"}}/>
            </tbody>
        </Table>
    )
}

export default UsersTable;