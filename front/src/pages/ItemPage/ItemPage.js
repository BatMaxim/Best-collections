import React from "react";
import {useParams} from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";

const ItemPage = () =>{
    let { itemId } = useParams();
    return(
        <ItemDescription item={{id: itemId}}/>
    )
}

export default ItemPage;