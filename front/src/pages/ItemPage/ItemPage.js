import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import {useDispatch, useSelector} from "react-redux";
import {addComment, addComments, getItem} from "../../actions/currentItemActions";
import ItemModal from "../../components/Modals/ItemModal/ItemModal";
import {getTags} from "../../actions/tagsActions";
import {getFields} from "../../actions/currentCollectionActions";
import axios from "axios";
import {SocketContext} from "../../socket";
import ItemComments from "../../components/ItemComments/ItemComments";
import "./ItemPage.css"
import CommentsForm from "../../components/CommentsForm/CommentsForm";
const ItemPage = () =>{
    const [showItemModal, setShowItemModal] = useState(false);
    const [editRule, setEditRule] = useState(false)
    let { itemId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);
    const item = useSelector((state)=>state.currentItem);

    const tags = useSelector((state)=>state.tags.tags);
    const fields = useSelector((state)=>state.collection.fields);
    const socket = useContext(SocketContext);
    useEffect(()=>{
        dispatch(getItem(itemId))
        dispatch(getTags());
    },[])

    useEffect(()=>{
        dispatch(getFields(item.collection.id));
    },[item])

    useEffect(()=>{
        console.log(user.uid, )
        setEditRule(user.uid===item.collection.authorId || user.admin)
    },[user, item])

    useEffect(() => {
        socket.emit("USER_ONLINE", {itemId: itemId, user: user.userName});
        socket.on("SET_ALL_COMMENTS", data=>{
            dispatch(addComments(data));
            }
        );
        socket.on("NEW_COMMENT", data=>{
                console.log(data);
                dispatch(addComment(data));
            }
        );
        return () => {
            socket.emit("LEAVE_ROOM", {itemId: itemId, user: user.userName});
        };
    }, [socket]);



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

    const sendComment = ( message ) => {
        if(message.trim())
            socket.emit("SEND_COMMENT", {itemId: itemId, message:message, sender: user.userName});
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
            <ItemDescription item={item}
                             showModal={()=>{setShowItemModal(true)}}
                             editRule={editRule}/>
            <h3 className="item-page__comments">Comments: </h3>
            <ItemComments comments={item.comments}/>
            {user.uid && <CommentsForm sendComment={sendComment}/>}
        </>
    )
}

export default ItemPage;