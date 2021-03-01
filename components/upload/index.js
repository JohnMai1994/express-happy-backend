const express = require("express");
const multer=require("multer");
const path = require('path');
const fs = require("fs")
const uploadRouter = express.Router();

// 使用中间件，每次使用的时候都会打印一下
uploadRouter.use((req, res, next) => {
    console.log("连接到：localhost:8000/components/upload");
    next();
});

// 使用的是 multer的磁盘存储引擎
let storage = multer.diskStorage({
    // 用于确定文件存储在哪个文件夹中
    destination: function (req, file, cb) {
        let _path = path.join(__dirname, "/assert");
        if(!fs.existsSync(_path)){
            fs.mkdirSync(_path);
        }
        cb(null, _path);    // 保存的路径，备注：需要自己创建
    },
    // 用于确定文件夹中的文件名
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
const upload = multer({ storage: storage })


uploadRouter.route("/")
    .post(
        // 这里调用multer的中间件
        upload.single("fileName"), (req, res) => {
        console.log(req.file);
        console.log(req.body);
        res.send("文件上传成功");
    })




module.exports = uploadRouter;

