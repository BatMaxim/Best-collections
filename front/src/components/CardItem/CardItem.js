import React from "react";
import {Button} from "react-bootstrap";

const CardItem = ({item}) => {
    return(
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td className="collection-item__btn-container">
                <Button variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
}
export default CardItem;