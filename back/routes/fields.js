const { getStrField, getIntField, getTextField, getBoolField, addFields } = require("../Database/Controllers/CustomFieldController");
const { getFieldsNames, addFieldName, updateFieldName, deleteFieldName } = require("../Database/Controllers/FieldsNamesController");

module.exports = (app) => {
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

}