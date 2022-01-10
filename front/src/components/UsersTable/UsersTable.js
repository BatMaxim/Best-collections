import React from "react";
import {Table} from "react-bootstrap";
import UserItem from "../UserItem/UserItem";
import {AllCheckerCheckbox, CheckboxGroup} from "@createnl/grouped-checkboxes";

const UsersTable = ({users}) => {
    const onCheckboxChange = (checkboxes) => {
        console.log(checkboxes);
    }

    return(
        <CheckboxGroup onChange={onCheckboxChange}>
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
        </CheckboxGroup>
    )
}

export default UsersTable;