const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const {getAllUsers, deleteUser, setAdminRole, updateUser, getUser} = require("./firebaseAdmin");
const path = require("path");
const {getCollections,getCollection, addCollection, updateCollection, deleteCollection} = require("./Database/Controllers/CollectionController");
const {getTopics} = require("./Database/Controllers/TopicController");
const {getItems} = require("./Database/Controllers/ItemController");
const {addFieldName, getFieldsNames, deleteFieldName} = require("./Database/Controllers/FieldsNamesController");
const {getStrField, getIntField, getTextField, getBoolField} = require("./Database/Controllers/CustomFieldController");
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

app.get("/api/collections/:collectionId", (req, res)=>{
    getCollection(req.params.collectionId).then(collection=>{
        res.json(collection);
    })
})

app.put("/api/collections/:collectionId", (req, res)=>{
   const params = {
       where:{
           id:req.params.collectionId,
       }
   }
    updateCollection(req.body, params).then(collection=>{
        res.json(collection);

    })
})

app.delete("/api/collections/:collectionId", (req, res)=>{
    console.log(req.params.collectionId)
    const params = {
        where:{
            id:req.params.collectionId,
        }
    }
    deleteCollection(params).then(collection=>{
        res.json(collection);
    })
})

app.get("/api/topics", (req, res)=>{
    getTopics().then(topics=>{
        res.json(topics);
    })
})

app.get("/api/cards/:collectionId", (req, res)=>{
  getItems(req.params.collectionId).then(cards=>{
      res.json(cards);
  })
})

app.get("/api/fields/values/:id", async (req, res)=>{
    const strfields = await getStrField(req.params.id);
    const intfields = await getIntField(req.params.id);
    const textfields = await getTextField(req.params.id);
    const boolfields = await getBoolField(req.params.id);

    res.json([...strfields, ...intfields, ...textfields, ...boolfields]);
})

app.get("/api/fields/name/:collectionId", (req, res)=>{
    getFieldsNames(req.params.collectionId).then(fieldsNames=>{
        res.json(fieldsNames);
    })
})

app.post("/api/fields/name", (req, res)=>{
    addFieldName(req.body).then(fieldName=>{
        res.json(fieldName);
    })
})

app.delete("/api/fields/name/:fieldId", (req, res)=>{
    const params = {
        where:{
            id:req.params.fieldId,
        }
    }
    deleteFieldName(params).then(field=>{
        res.json(field);
    })
})

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(PORT, ()=>{console.log("Started")});