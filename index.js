const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
    console.log("opened page")
})
app.listen(process.env.port || 3003, () => {
    console.log("server start")
})
