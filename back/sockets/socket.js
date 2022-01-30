const {getComments, AddComment} = require("../Database/Controllers/CommentController");

module.exports = (io) => {
    io.on('connection', (socket) => {

        socket.on("USER_ONLINE", data=>{
            socket.join(data.itemId);
            const params = {
                where:{
                    itemId: data.itemId
                }
            }
            getComments(params).then(data=>{
                socket.emit("SET_ALL_COMMENTS", data)
            })
        });

        socket.on("SET_UID", data=>{
            socket.uid = data.user;
        });

        socket.on("LEAVE_ROOM", data=>{
            socket.leave(data.itemId);
        });

        socket.on("SEND_COMMENT", data=>{
            const newComment = {
                ...data,
                date:Date.now(),
            }

            AddComment(newComment).then(comment=>{
                console.log(`${comment.itemId}`)
                socket.emit("NEW_COMMENT", comment);
                socket.to(comment.itemId).emit("NEW_COMMENT", comment);
            })
        });

    });
}