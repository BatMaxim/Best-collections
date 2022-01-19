import React from "react";
import {useParams} from "react-router-dom";
import "./CollectionPage.css";
import CollectionDescription from "../../components/CollectionDescription/CollectionDescription ";

const CollectionPage = () => {
    let { collectionId } = useParams();
    return(
        <div>
            <CollectionDescription collection={{}}/>
        </div>
    )
}

export default CollectionPage;