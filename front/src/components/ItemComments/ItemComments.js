import React from "react";
import ItemComment from "./ItemComment/ItemComment";
import "./ItemComments.css";

const ItemComments = ({comments}) =>{
    console.log(comments);
    return(
        <div className="item-comments">
            {comments.map(comment=>{
                return(<ItemComment key={comment.id}
                                    comment={comment}/>)
            })}
        </div>
    )
}

export default ItemComments;