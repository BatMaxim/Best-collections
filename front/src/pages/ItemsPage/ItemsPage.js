import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CardsTable from "../../components/CardsTable/CardsTable";
import "./ItemsPage.css"

const ItemsPage = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PATH}/api/tag/items/${searchParams.get("tag")}`).then((data)=>{
            setItems(data.data.map(el=>el.item));
        })
    }, []);

    return(
        <div className="items-page">
            <CardsTable items={items}
                        customFields={[]}/>
        </div>
    )
}

export default ItemsPage;