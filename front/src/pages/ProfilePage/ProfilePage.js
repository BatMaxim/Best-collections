import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";
import CollectionsTable from "../../components/CollectionsTable/CollectionsTable";
import { getCollections } from "../../actions/collectionsActions";
import CollectionDescriptionModal from "../../components/Modals/CollectionDescriptionModal";

const ProfilePage = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollections());
    }, [])
    const user = useSelector((state)=>state.user);
    const collections = useSelector((state)=>state.collections.collections);
    return(
        <div className="profile">
            <CollectionDescriptionModal
                show={show}
                close={()=>{setShow(false)}}
                modalInfo={
                    {
                        title: "Add Collection"
                    }
                }
            />
            <h3>User Info:</h3>
            <Profile user={user}/>
            <div className="profile__collections">
                <h3>Collections:</h3>
                <Button variant="secondary" onClick={()=>{setShow(true)}}>Add collection</Button>
            </div>

            <CollectionsTable collections={collections}/>
        </div>
    )
}

export default ProfilePage;