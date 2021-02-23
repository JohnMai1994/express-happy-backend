const express = require("express");
const app = express();
const downloadRouter = require("./components/download/index")

const PORT = 8080;



/*

中间件
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);
*/


app.get("/", (req,res) => {
    res.send("欢迎来到我Express后端，可以在这里任意添加路由器")
})

app.use("/download", downloadRouter);



app.listen(PORT);