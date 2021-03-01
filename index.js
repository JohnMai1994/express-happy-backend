const express = require("express");
const app = express();
const downloadRouter = require("./components/download/index")
const uploadRouter = require("./components/upload/index")

const PORT = 8080;


app.get("/", (req,res) => {
    res.send("欢迎来到我Express后端，可以在这里任意添加路由器")
})

app.use("/download", downloadRouter);
app.use("/upload", uploadRouter);



app.listen(PORT);