const express = require("express");
const downloadRouter = express.Router();
const path = require("path")
const mime = require("mime")
const fs = require("fs")

downloadRouter.use((req, res, next) => {
    console.log("连接到：localhost:8000/components/download");
    next();
});



// 方法一：使用 express自带的 res.download方法
downloadRouter.route("/method1")

    .get((req, res) => {
        let fileName = req.param("name")
        let file = `${__dirname}/assert/${fileName}`
        console.log("下载文件地址: " + file)

        res.download(file, (err) => {
            if (err) {
                console.log("下载失败")
                res.send(err)
                res.end();

            } else {
                console.log("下载成功")
            }

        })
    })

    .post((req, res) => {
        res.send("download Post");
    })

    .put((req, res) => {
        res.send("download Put");

    })

    .delete((req, res) => {
        res.send("download Delete");
    });

// 方法二: 使用fs方法，读取文件，然后通过stream下载
downloadRouter.route("/method2")
    .get((req, res) => {
        let fileName = req.param("name")
        let file = `${__dirname}/assert/${fileName}`
        console.log("下载文件地址: " + file)
        let mimeType = mime.getType(file);
        console.log(mimeType)

        res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
        res.setHeader('Content-type', mimeType);
        let fileReadStream = fs.createReadStream(file);
        fileReadStream.pipe(res)
    })



downloadRouter.route("/:id")
    .get((req, res) => {
        res.send("download id Get");
    })

module.exports = downloadRouter;

