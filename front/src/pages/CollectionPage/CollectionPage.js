import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import "./CollectionPage.css";
import CollectionDescription from "../../components/CollectionDescription/CollectionDescription ";
import {useDispatch, useSelector} from "react-redux";
import {getCollection} from "../../actions/currentCollectionActions";
import DNDModal from "../../components/Modals/DNDModal";

const CollectionPage = () => {
    let { collectionId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollection(collectionId));
    }, [])
    const collection = useSelector((state)=>state.collection.collection);
    return(
        <div>
            <DNDModal />
            <CollectionDescription collection={collection}/>
        </div>
    )
}

export default CollectionPage;