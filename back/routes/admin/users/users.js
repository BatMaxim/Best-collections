const {getAllUsers, getUser, deleteUser, setAdminRole, updateUser} = require("../../../firebaseAdmin");

module.exports = (app, io)=>{
    app.get("/api/users", (req, res)=>{
        getAllUsers()
            .then(users=>{
                res.json(users);
            });
    })

    app.get("/api/users/:uid", (req, res)=>{
        getUser(req.params.uid)
            .then(user=>{
                res.json(user);
            });
    })

    const getSockets = (uid) =>{
        let ids = [];
        for (let s of io.sockets.sockets.values()) {
            if(s.uid===uid)
                ids.push(s.id)
        }
        return ids;

    }

    const SendToUser = (uid, message) =>{
        getSockets(uid).forEach((id)=>{
            io.sockets.sockets.get(id).emit(message);
        })
    }

    app.delete("/api/users", async (req, res)=>{
        try{
            for(let i=0; i < req.body.users.length; i++){
                await deleteUser(req.body.users[i]);
                SendToUser(req.body.users[i], 'LOG_OUT');
            }
            res.json({mes: "OK"})
        }
        catch (e) {
            console.log(e);
        }
    })

    app.put("/api/users/admin",async (req, res)=>{
        try{
            for(let i=0; i < req.body.users.length; i++){
                await setAdminRole(req.body.users[i], req.body.admin);
                SendToUser(req.body.users[i], 'CHECK_ADMIN_STATUS');
            }
            res.json({mes: "OK"});
        }
        catch (e) {
            console.log(e);
        }
    })

    app.put("/api/users/block",async (req, res)=>{
        try{
            for(let i=0; i < req.body.users.length; i++){
                await updateUser(req.body.users[i], {disabled:req.body.block});
                if(req.body.block)
                    SendToUser(req.body.users[i], 'LOG_OUT');

            }
            res.json({mes: "OK"})
        }
        catch (e) {
            console.log(e);
        }
    })
}