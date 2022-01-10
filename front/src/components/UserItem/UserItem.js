import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
const UserItem = ({user}) => {
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td> {user?.customClaims?.admin && <FontAwesomeIcon icon={faTools} /> } {user.email}</td>
            <td>{user.uid}</td>
            <td></td>
        </tr>
    )
}

export default UserItem;