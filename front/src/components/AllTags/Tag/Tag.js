import {Badge} from "react-bootstrap";
import React from "react";
import "./Tag.css"
import {useNavigate, createSearchParams} from "react-router-dom";

const Tag = ({tag})=>{
    const navigate = useNavigate();


    return(
        <Badge className="all-tags__tag"
               bg="secondary"
               onClick={()=>{
                   navigate({
                       pathname: "items",
                       search: `?${createSearchParams({
                           tag: tag.tag.id
                       })}`
                   });
               }}>
            {tag.tag.name}
        </Badge>
    )
}

export default Tag;