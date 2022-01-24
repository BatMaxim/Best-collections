import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../actions/currentItemActions";

const ItemPage = () =>{
    let { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.currentItem);
    useEffect(()=>{
        dispatch(getItem(itemId))
    },[])
    return(
        <ItemDescription item={item}/>
    )
}

export default ItemPage;