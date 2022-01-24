import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./CollectionPage.css";
import CollectionDescription from "../../components/CollectionDescription/CollectionDescription ";
import {useDispatch, useSelector} from "react-redux";
import {deleteCards, getCards, getCollection, getFields} from "../../actions/currentCollectionActions";
import DNDModal from "../../components/Modals/DNDModal";
import CollectionDescriptionModal from "../../components/Modals/CollectionDescriptionModal";
import axios from "axios";
import CardsTable from "../../components/CardsTable/CardsTable";
import AddingField from "../../components/AddingField/AddingField";
import CustomFields from "../../components/CustomFields/CustomFields";
import {Button} from "react-bootstrap";
import ItemModal from "../../components/Modals/ItemModal/ItemModal";
import {getTags} from "../../actions/tagsActions";

const CollectionPage = () => {
    const [showIgmModal, setShowIgmModal] = useState(false);
    const [showCollectionModal, setShowCollectionModal] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
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
        dispatch(deleteCards());
        dispatch(getCards(collectionId));
        dispatch(getFields(collectionId));
        dispatch(getTags());
    }, [])
    const collection = useSelector((state)=>state.collection.collection);
    const cards = useSelector((state)=>state.collection.cards);
    const fields = useSelector((state)=>state.collection.fields);
    const tags = useSelector((state)=>state.tags.tags);

    const addField = (name, type) => {
        axios.post(`${process.env.REACT_APP_PATH}/api/fields/name`, {
            name: name ? name: "New Field",
            type: type,
            collectionId: collection.id
        }).then(
            ()=>{
                dispatch(getFields(collectionId));
            }
        )
    }
    const deleteField = (id) => {
        axios.delete(`${process.env.REACT_APP_PATH}/api/fields/name/${id}`).then(
            ()=>{
                dispatch(getFields(collectionId));
            }
        )
    }

    const EditField = (id, newName) => {
        axios.put(`${process.env.REACT_APP_PATH}/api/fields/name/${id}`,{
            name: newName
        }).then(
            ()=>{
                dispatch(getFields(collectionId));
            }
        )
        console.log(id, newName)
    }

    const getCustomFieldsValues = (type, fieldsValues, itemId) =>{
        const Fields = fields.filter(el=>el.type==type);
        const Values = Fields.map(el=>{
            return {
                fieldsnameId: el.id,
                value:type==="Bool" || type==="Integer" ? +fieldsValues[el.id]: fieldsValues[el.id],
            };
        })
        return Values;
    }

    const AddItem = async (name, tags, fieldsValues) => {
        const BoolValues = getCustomFieldsValues("Bool", fieldsValues);
        const TextValues = getCustomFieldsValues("Text", fieldsValues);
        const StringValues = getCustomFieldsValues("String", fieldsValues);
        const IntegerValues = getCustomFieldsValues("Integer", fieldsValues);
        const newItem = await axios.post(`${process.env.REACT_APP_PATH}/api/cards/`,{
            collectionId:collection.id,
            name: name,
            BoolValues: BoolValues,
            TextValues: TextValues,
            StringValues: StringValues,
            IntegerValues: IntegerValues,
            tags: tags,

        })
        setShowItemModal(false);
        dispatch(deleteCards());
        dispatch(getCards(collectionId));
        dispatch(getTags());
    }

    const DeleteItem = (event, id) => {
        event.stopPropagation();
        axios.delete(`${process.env.REACT_APP_PATH}/api/cards/${id}`).then(()=>{
            dispatch(deleteCards());
            dispatch(getCards(collectionId));
            dispatch(getTags());
        })
    }

    return(
        <div>
            <ItemModal modalInfo={
                            {
                                title: "Add Item"
                            }
                        }
                       show={showItemModal}
                       close={()=>{setShowItemModal(false)}}
                       suggestions={tags}
                       customFields={fields}
                       send={AddItem}
            />
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
            <AddingField addField={addField}/>
            {fields.length>0 &&  <CustomFields fields={fields}
                          fieldActions={{
                              delete: deleteField,
                              edit:EditField,
                          }}/>}
            <div className="collections__cards-header">
                <h4>Items:</h4>
                <Button variant="secondary" onClick={()=>{setShowItemModal(true)}}>Add Item</Button>
            </div>
            <CardsTable items={cards}
                        customFields={fields}
                        DeleteItem={DeleteItem}/>
        </div>
    )
}

export default CollectionPage;