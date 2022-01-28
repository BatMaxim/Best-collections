import React from "react";
import {Badge} from "react-bootstrap";
import "./AllTags.css";
import Tag from "./Tag/Tag";

const AllTags = ({tags})=>{
    return(
        <div className="all-tags">
            {tags.map(tag=>{
                return(<Tag key={tag.id} tag={tag} />)
            })}
        </div>
    )
}

export default AllTags;