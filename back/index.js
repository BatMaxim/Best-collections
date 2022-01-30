const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");


const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
        origin: ['http://localhost:3000']
    } });

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`build`));

require("./routes/admin/users/users")(app, io);
require("./routes/admin/admin")(app);
require("./routes/collections")(app);
require("./routes/fields")(app);
require("./routes/tags")(app);
require("./routes/items")(app);
require("./routes/topics")(app);

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

require("./sockets/socket")(io);

httpServer.listen(PORT, ()=>{console.log("Started")});