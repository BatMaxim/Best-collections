const fs = require("fs");
const express = require("express");
const cors = require("cors");
const {getAllUsers} = require("./firebaseAdmin");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001


app.use(cors());
app.use(express.static(`build`));

app.get("/api/users", (req, res)=>{
    getAllUsers()
        .then(users=>{
            res.json(users);
        });
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(PORT, ()=>{console.log("Started")});