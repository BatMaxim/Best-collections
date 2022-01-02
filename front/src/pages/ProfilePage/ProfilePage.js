import React from "react";
import {useSelector} from "react-redux";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";
const ProfilePage = () => {
    const user = useSelector((state)=>state.user);
    return(
        <div className="profile">
            <Profile user={user}/>
        </div>
    )
}

export default ProfilePage;