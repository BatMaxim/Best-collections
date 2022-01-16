import React from "react";
import {useSelector} from "react-redux";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";
import CollectionsTable from "../../components/CollectionsTable/CollectionsTable";
const ProfilePage = () => {
    const user = useSelector((state)=>state.user);
    return(
        <div className="profile">
            <h3>User Info:</h3>
            <Profile user={user}/>
            <h3>Collections:</h3>
            <CollectionsTable />
        </div>
    )
}

export default ProfilePage;