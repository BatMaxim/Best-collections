import React from "react";

const Profile = ({user}) =>{
    return(
        <div>
            <h3>Email: {user.userName}</h3>
            <h5>Id: {user.uid}</h5>

        </div>
    )
}
export default Profile;