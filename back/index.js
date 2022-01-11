const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const {getAllUsers, deleteUser} = require("./firebaseAdmin");
const path = require("path");
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

app.delete("/api/users", (req, res)=>{
    try{
        req.body.users.forEach(user=>{deleteUser(user).then(()=>{res.json({mes: "OK"})})})
    }
    catch (e) {
        console.log(e);
    }
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(PORT, ()=>{console.log("Started")});