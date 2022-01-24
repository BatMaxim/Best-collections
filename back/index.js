const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const {getAllUsers, deleteUser, setAdminRole, updateUser, getUser} = require("./firebaseAdmin");
const path = require("path");
const {getCollections,getCollection, addCollection, updateCollection, deleteCollection} = require("./Database/Controllers/CollectionController");
const {getTopics} = require("./Database/Controllers/TopicController");
const {getItems, addItem, deleteItem} = require("./Database/Controllers/ItemController");
const {addFieldName, getFieldsNames, deleteFieldName, updateFieldName} = require("./Database/Controllers/FieldsNamesController");
const {getStrField, getIntField, getTextField, getBoolField, addFields} = require("./Database/Controllers/CustomFieldController");
const {getTags, AddTags} = require("./Database/Controllers/TagController");
const {AddTagsItems} = require("./Database/Controllers/TagItemController");
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

app.post("/api/cards", async (req, res)=>{
    const newItem = {
        name:req.body.name,
        collectionId: req.body.collectionId,
    }
    const getValues = (values) => values.map(value => ({itemId: item.dataValues.id,...value}));
    const oldTags = req.body.tags.filter(tag=>tag.id)
    let newTags = req.body.tags.filter(tag=>!tag.id)
    const item = await addItem(newItem);
    await addFields("Bool", getValues(req.body.BoolValues))
    await addFields("Text", getValues(req.body.TextValues))
    await addFields("String", getValues(req.body.StringValues))
    await addFields("Integer", getValues(req.body.IntegerValues))
    const tags = AddTags(newTags);

    tags.then(data=>data.map(el=>el.dataValues)
    ).then((data)=>{
       const allTags = [...data, ...oldTags].map(el=>{
           return{
               tagId: el.id,
               name: el.name,
               itemId:item.dataValues.id,
           }
       })
        return allTags
    }).then(data=>{
        AddTagsItems(data)
    }).then(()=>{
        res.json({item: "ok"});
    })


})

app.delete("/api/cards/:itemId", (req, res)=>{
    const params = {
        where:{
            id:req.params.itemId,
        }
    }
    deleteItem(params).then(item=>{
        res.json(item);
    })
})

app.get("/api/fields/values/:id", async (req, res)=>{
    const strfields = await getStrField(req.params.id);
    const intfields = await getIntField(req.params.id);
    const textfields = await getTextField(req.params.id);
    const boolfields = await getBoolField(req.params.id);

    res.json([...strfields, ...intfields, ...textfields, ...boolfields]);
})

app.post("/api/fields/values/:type", async (req, res)=>{
    const fields = await addFields(req.params.type, req.body)

     res.json(fields);
})


app.get("/api/fields/name/:collectionId", (req, res)=>{
    getFieldsNames(req.params.collectionId).then(fieldsNames=>{
        res.json(fieldsNames);
    })
})

app.post("/api/fields/name/", (req, res)=>{
    addFieldName(req.body).then(fieldName=>{
        res.json(fieldName);
    })
})

app.put("/api/fields/name/:fieldId", (req, res)=>{
    const params = {
        where:{
            id:req.params.fieldId,
        }
    }
    updateFieldName(req.body, params).then(field=>{
        res.json(field);
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


app.get("/api/tags", (req, res)=>{
    getTags().then(tags=>{
        res.json(tags);
    })
})

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(PORT, ()=>{console.log("Started")});