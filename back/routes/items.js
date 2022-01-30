const {getItems, getItem, addItem, updateItem, deleteItem} = require("../Database/Controllers/ItemController");
const {getTagsItems, AddTagsItems, DeleteTagsItems} = require("../Database/Controllers/TagItemController");
const {addFields, updateField} = require("../Database/Controllers/CustomFieldController");
const {AddTags} = require("../Database/Controllers/TagController");

module.exports = (app)=>{
    app.get("/api/last/cards/", (req, res)=>{
        const params =  {
            limit: 3,
            order: [ [ 'id', 'DESC' ]],
        }
        getItems(params).then(cards=>{
            res.json(cards);
        })
    })

    app.get("/api/cards/:collectionId", (req, res)=>{
        const params = {
            where:{
                collectionId: req.params.collectionId
            },
        }
        getItems(params).then(cards=>{
            res.json(cards);
        })
    })

    app.get("/api/tag/cards/:tagId", (req, res)=>{
        getTagsItems({
            where: {
                tagId: req.params.tagId,
            }
        }).then(cards=>{
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
        const tags = await getTagsItems( {
            where:{
                itemId:item.id,
            }
        });
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


}