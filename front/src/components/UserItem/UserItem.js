import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import {Checkbox} from "@createnl/grouped-checkboxes";
const UserItem = ({user}) => {
    return(
        <tr>
            <td><Checkbox value={user.uid}/></td>
            <td> {user?.customClaims?.admin && <FontAwesomeIcon icon={faTools} /> } {user.email}</td>
            <td>{user.uid}</td>
            <td></td>
        </tr>
    )
}

export default UserItem;