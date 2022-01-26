import React from "react";
import ItemComment from "./ItemComment/ItemComment";

const ItemComments = ({comments}) =>{
    console.log(comments);
    return(
        <div>
            {comments.map(comment=>{
                return(<ItemComment key={comment.id} comment={comment} />)
            })}
        </div>
    )
}

export default ItemComments;