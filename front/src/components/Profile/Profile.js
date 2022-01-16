import React from "react";

const Profile = ({user}) =>{
    return(
        <div>
            <h4>Email: {user.userName}</h4>
            <h4>Id: {user.uid}</h4>

        </div>
    )
}
export default Profile;