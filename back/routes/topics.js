const {getTopics} = require("../Database/Controllers/TopicController");

module.exports = (app) => {
    app.get("/api/topics", (req, res)=>{
        getTopics().then(topics=>{
            res.json(topics);
        })
    })
}