import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../actions/currentItemActions";
import ItemModal from "../../components/Modals/ItemModal/ItemModal";
import {getTags} from "../../actions/tagsActions";
import {getFields} from "../../actions/currentCollectionActions";
import {setItemCustomFields} from "../../actions/currenFieldsActions";
import axios from "axios";

const ItemPage = () =>{
    const [showItemModal, setShowItemModal] = useState(false);
    let { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.currentItem);
    const tags = useSelector((state)=>state.tags.tags);
    const fields = useSelector((state)=>state.collection.fields);

    useEffect(()=>{
        dispatch(getItem(itemId))
        dispatch(getTags());
    },[])
    useEffect(()=>{
        dispatch(getFields(item.collection.id));
    },[item])

    const getCustomFieldsValues = (type, fieldsValues, itemId) =>{
        const Fields = fields.filter(el=>el.type==type);
        const Values = Fields.map(el=>{
            return {
                id: item.customFields.find(field=>field.fieldsnameId === el.id)?.id,
                fieldsnameId: el.id,
                value:type==="Bool" || type==="Integer" ? +fieldsValues[el.id]: fieldsValues[el.id],
            };
        })
        return Values;
    }

    const EditItem = (name, tags, fields) => {
        const BoolValues = getCustomFieldsValues("Bool", fields);
        const TextValues = getCustomFieldsValues("Text", fields);
        const StringValues = getCustomFieldsValues("String", fields);
        const IntegerValues = getCustomFieldsValues("Integer", fields);


        axios.put(`${process.env.REACT_APP_PATH}/api/cards/`,{
            id:item.id,
            name: name,
            tags: tags,
            BoolValues: BoolValues,
            TextValues: TextValues,
            StringValues: StringValues,
            IntegerValues: IntegerValues
        }).then(()=>{
            setShowItemModal(false);
            dispatch(getItem(itemId))
            dispatch(getTags());
        })
    }

    return(
        <>
            <ItemModal modalInfo={
                {
                    title: "Edit Item"
                }
            }
                       show={showItemModal}
                       close={()=>{setShowItemModal(false)}}
                       suggestions={tags}
                       customFields={fields}
                       item={item}
                       send={EditItem}/>
            <ItemDescription item={item} showModal={()=>{setShowItemModal(true)}}/>
        </>
    )
}

export default ItemPage;