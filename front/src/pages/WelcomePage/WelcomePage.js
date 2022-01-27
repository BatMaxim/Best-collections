import React, {useEffect, useState} from "react";
import axios from "axios";
import CardsTable from "../../components/CardsTable/CardsTable";

const WelcomePage = () =>{
    const [items, setItems] = useState([]);
    const [collections, setCollections] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PATH}/api/last/cards`).then((data)=>{
            setItems(data.data);
        })
    }, []);


    return(
        <div>
            <h3>Last Items</h3>
            <CardsTable items={items}
                        customFields={[]}/>
        </div>
    )
}
export default WelcomePage;