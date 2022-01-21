import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./CollectionPage.css";
import CollectionDescription from "../../components/CollectionDescription/CollectionDescription ";
import {useDispatch, useSelector} from "react-redux";
import {getCollection} from "../../actions/currentCollectionActions";
import DNDModal from "../../components/Modals/DNDModal";
import CollectionDescriptionModal from "../../components/Modals/CollectionDescriptionModal";
import axios from "axios";

const CollectionPage = () => {
    const [showIgmModal, setShowIgmModal] = useState(false);
    const [showCollectionModal, setShowCollectionModal] = useState(false);
    const updateCollection = (newValues) => {
        axios.put(`${process.env.REACT_APP_PATH}/api/collections/${collection.id}`, newValues)
                .then(()=>{
                    dispatch(getCollection(collectionId));
                })
    }
    let { collectionId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollection(collectionId));
    }, [])
    const collection = useSelector((state)=>state.collection.collection);
    return(
        <div>
            <DNDModal  show={showIgmModal}
                       close={()=>{
                           setShowIgmModal(false);
                           dispatch(getCollection(collectionId));
                       }}/>

            <CollectionDescriptionModal show={showCollectionModal}
                                        close={()=>{setShowCollectionModal(false)}}
                                        modalInfo={
                                            {
                                                title: "Edit Collection"
                                            }
                                        }
                                        collection={collection}
                                        send={updateCollection}
            />

            <CollectionDescription collection={collection}
                                   openImgModal={()=>{setShowIgmModal(true)}}
                                   openCollectionModal={()=>{setShowCollectionModal(true)}}/>
        </div>
    )
}

export default CollectionPage;