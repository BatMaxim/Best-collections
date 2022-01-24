import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CardItem = ({item, customFields, DeleteItem}) => {
    const navigate = useNavigate();
    return(
        <tr onClick={()=>{navigate(`/item/${item.id}`)}}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            {customFields.map(field=>{
                return(
                    <td key={field.id}>
                        {
                            item.customFields.find(data => data.fieldsname.id===field.id) ?
                            item.customFields.find(data => data.fieldsname.id===field.id).value: "-"
                        }
                    </td>
                )
            })}
            <td className="collection-item__btn-container">
                <Button variant="danger" onClick={(event)=>{DeleteItem(event, item.id)}}>
                    Delete
                </Button>
            </td>
        </tr>
    );
}
export default CardItem;