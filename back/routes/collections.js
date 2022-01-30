const {getPopularCollections, getCollections, addCollection, getCollection, updateCollection, deleteCollection} = require("../Database/Controllers/CollectionController");

module.exports = (app) =>{
    app.get("/api/popular/collections", (req, res)=>{
        getPopularCollections().then(collections=>{
            res.json(collections);
        })
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
}