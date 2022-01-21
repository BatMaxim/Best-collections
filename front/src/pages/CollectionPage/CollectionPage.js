import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./CollectionPage.css";
import CollectionDescription from "../../components/CollectionDescription/CollectionDescription ";
import {useDispatch, useSelector} from "react-redux";
import {getCollection} from "../../actions/currentCollectionActions";
import DNDModal from "../../components/Modals/DNDModal";

const CollectionPage = () => {
    const [show, setShow] = useState(false);
    let { collectionId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollection(collectionId));
    }, [])
    const collection = useSelector((state)=>state.collection.collection);
    return(
        <div>
            <DNDModal  show={show}
                       close={()=>{
                           setShow(false);
                           dispatch(getCollection(collectionId));
                       }}/>
            <CollectionDescription collection={collection}
                                   openModal={()=>{setShow(true)}}/>
        </div>
    )
}

export default CollectionPage;