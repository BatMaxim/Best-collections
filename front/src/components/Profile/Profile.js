import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faIdBadge} from '@fortawesome/free-solid-svg-icons'
const Profile = ({user}) =>{
    return(
        <div>
            <h4><FontAwesomeIcon icon={faEnvelope} /> {user.userName}</h4>
            <h4><FontAwesomeIcon icon={faIdBadge} /> {user.uid}</h4>

        </div>
    )
}
export default Profile;