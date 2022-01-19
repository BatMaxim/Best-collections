const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const {getAllUsers, deleteUser, setAdminRole, updateUser, getUser} = require("./firebaseAdmin");
const path = require("path");
const {getCollections,getCollection, addCollection} = require("./Database/Controllers/CollectionController");
const {getTopics} = require("./Database/Controllers/TopicController");
const app = express();

const PORT = process.env.PORT || 3001


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`build`));

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

app.delete("/api/users", (req, res)=>{
    try{
        req.body.users.forEach(user=>{deleteUser(user).then(()=>{res.json({mes: "OK"})})})
    }
    catch (e) {
        console.log(e);
    }
})

app.put("/api/users/admin",(req, res)=>{
    try{
        req.body.data.users.forEach(user=>{setAdminRole(user, req.body.data.admin).then(()=>{res.json({mes: "OK"})})})
    }
    catch (e) {
        console.log(e);
    }
})

app.put("/api/users/block",(req, res)=>{
    try{
        req.body.data.users.forEach(user=>{updateUser(user, {disabled:req.body.data.block}).then(()=>{res.json({mes: "OK"})})})
    }
    catch (e) {
        console.log(e);
    }
})

app.get("/api/collections", (req, res)=>{
    getCollections().then(collections=>{
        res.json(collections);
    })
})

app.post("/api/collections", (req, res)=>{
    addCollection(req.body.data).then(collection=>{
        res.json(collection);
    })
})

app.get("/api/collection/:collectionId", (req, res)=>{
    getCollection(req.params.collectionId).then(collection=>{
        res.json(collection);
    })
})

app.get("/api/topics", (req, res)=>{
    getTopics().then(topics=>{
        res.json(topics);
    })
})

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(PORT, ()=>{console.log("Started")});