const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const {getAllUsers, deleteUser, setAdminRole, updateUser, getUser, checkToken, getUserByToken} = require("./firebaseAdmin");
const path = require("path");
const {getCollections,getCollection, addCollection, updateCollection, deleteCollection} = require("./Database/Controllers/CollectionController");
const {getTopics} = require("./Database/Controllers/TopicController");
const {getItems, addItem, deleteItem, getItem, updateItem} = require("./Database/Controllers/ItemController");
const {addFieldName, getFieldsNames, deleteFieldName, updateFieldName} = require("./Database/Controllers/FieldsNamesController");
const {getStrField, getIntField, getTextField, getBoolField, addFields, updateField} = require("./Database/Controllers/CustomFieldController");
const {getTags, AddTags} = require("./Database/Controllers/TagController");
const {AddTagsItems, getTagsItems, DeleteTagsItems} = require("./Database/Controllers/TagItemController");
const {DeleteItem} = require("./Database/Database");
const {getComments, AddComment} = require("./Database/Controllers/CommentController");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
        origin: ['http://localhost:3000']
    } });


const PORT = process.env.PORT || 3001


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`build`));


app.get("/api/login", (req, res)=>{
    checkToken(req.headers["authorization"]).then(data=>{
        res.json(data);
    });
})

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

app.delete("/api/users", async (req, res)=>{
    try{
        for(let i=0; i < req.body.users.length; i++){
            await deleteUser(req.body.users[i]);
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
        }
        res.json({mes: "OK"})
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

app.get("/api/card/:cardId", (req, res)=>{
    getItem(req.params.cardId).then(cards=>{
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
    const newTags = req.body.tags.filter(tag=>!tag.id)
    const item = await addItem(newItem);
    await addFields("Bool", getValues(req.body.BoolValues))
    await addFields("Text", getValues(req.body.TextValues))
    await addFields("String", getValues(req.body.StringValues))
    await addFields("Integer", getValues(req.body.IntegerValues))
    const tags = await AddTags(newTags);
    const allTags = [...tags, ...oldTags].map(el=>{
               return{
                   tagId: el.id,
                   name: el.name,
                   itemId:item.dataValues.id,
               }
           })

    await AddTagsItems(allTags)
    res.json({item: "ok"});
})
const updateAndAddFields = async (fields, fieldsType, itemId) => {
    const getValues = (values) => values.map(value => ({itemId: itemId,...value}));
    const oldFields = fields.filter(field=>field.id)
    const newFields = fields.filter(field=>!field.id)
    await addFields(fieldsType, getValues(newFields));

    for(let i=0; i< oldFields.length; i++){
            await updateField(fieldsType, {value: oldFields[i].value}, {
                where:{
                    id:oldFields[i].id
                }});
         }
}

app.put("/api/cards",async (req, res)=>{
    const getNewTags = (UsersTags, tags) => UsersTags.filter(tag=>  !tags.find(el=>el.tag.id===tag.id));
    const getDeletedTags = (UsersTags, tags) =>tags.filter(tag=>!UsersTags.find(el=>el.id===tag.tag.id));

    const item = req.body;
    await updateItem({
        name: item.name
    },{
        where:{
            id: item.id
        }
    })
    const tags = await getTagsItems(item.id);
    const newTags = getNewTags(item.tags, tags);
    const deletedTags = getDeletedTags(item.tags, tags);
    const unknownTags =newTags.filter(tag=>!tag.id)
    const knownTags =newTags.filter(tag=>tag.id)
    const addedTags = await AddTags(unknownTags);
    const allNewTags = [...knownTags, ...addedTags].map(el=>{
        return{
            tagId: el.id,
            name: el.name,
            itemId:item.id,
        }
    })
    await AddTagsItems(allNewTags)

   for(let i=0; i< deletedTags.length; i++){
       await DeleteTagsItems(deletedTags[i].id);
    }

    await updateAndAddFields(item.BoolValues, "Bool", item.id)
    await updateAndAddFields(item.StringValues, "String", item.id)
    await updateAndAddFields(item.TextValues, "Text", item.id)
    await updateAndAddFields(item.IntegerValues, "Integer", item.id)

    res.json({item: "ok"});
})

app.delete("/api/cards/:itemId", (req, res)=>{
    const params = {
        where: {
            id: req.params.itemId
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

app.get("/api/tags/:itemId", (req, res)=>{
    getTagsItems(req.params.itemId).then(tags=>{
        res.json(tags);
    })
})

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

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

httpServer.listen(PORT, ()=>{console.log("Started")});