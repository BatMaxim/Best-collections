import React from "react";
import {Button} from "react-bootstrap";

const CardItem = ({item, customFields}) => {
    return(
        <tr>
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
                <Button variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
}
export default CardItem;