const {getAllTagsWithItems, getTagsItems} = require("../Database/Controllers/TagItemController");

module.exports = (app)=>{
    app.get("/api/tags", (req, res)=>{
        getAllTagsWithItems().then(tags=>{
            res.json(tags);
        })
    })

    app.get("/api/tags/:itemId", (req, res)=>{
        getTagsItems({
            where:{
                itemId:req.params.itemId,
            }
        }).then(tags=>{
            res.json(tags);
        })
    })
}