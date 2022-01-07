import React from "react";

const UserItem = ({user}) => {
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td>{user.uid}</td>
            <td>{user.email}</td>
            <td></td>
        </tr>
    )
}

export default UserItem;