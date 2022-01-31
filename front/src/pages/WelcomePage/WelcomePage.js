import React, {useEffect, useState} from "react";
import axios from "axios";
import CardsTable from "../../components/ItemsTable/CardsTable";
import CollectionsTable from "../../components/CollectionsTable/CollectionsTable";
import AllTags from "../../components/AllTags/AllTags";

const WelcomePage = () =>{
    const [items, setItems] = useState([]);
    const [collections, setCollections] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PATH}/api/last/items`).then((data)=>{
            setItems(data.data);
        })
        axios.get(`${process.env.REACT_APP_PATH}/api/popular/collections`).then((data)=>{
            setCollections(data.data);
        })
        axios.get(`${process.env.REACT_APP_PATH}/api/tags/`).then((data)=>{
            setTags(data.data);
        })
    }, []);


    return(
        <div>
            <h3>Last Items</h3>
            <CardsTable items={items}
                        customFields={[]}/>
            <h3>Popular collections</h3>
            <CollectionsTable collections={collections}/>
            <h3>Tags</h3>
            <AllTags tags={tags}/>
        </div>
    )
}
export default WelcomePage;