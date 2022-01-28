import {Badge} from "react-bootstrap";
import React from "react";
import "./Tag.css"

const Tag = ({tag})=>{
    return(
        <Badge className="all-tags__tag" bg="secondary">{tag.tag.name}</Badge>
    )
}

export default Tag;