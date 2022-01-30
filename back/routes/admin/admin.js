const {getCustomToken, getDecodedToken} = require("../../firebaseAdmin");

module.exports = (app) => {
    app.get("/api/login", (req, res)=>{
        getCustomToken(req.headers["authorization"]).then(data=>{
            res.json(data);
        });
    })

    app.get("/api/admin", (req, res)=>{
        getDecodedToken(req.headers["authorization"]).then(data=>{
            res.json(data.admin ? data.admin : false);

        });
    })

}