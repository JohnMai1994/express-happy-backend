const express = require("express");
const uploadRouter = express.Router();

uploadRouter.use((req, res, next) => {
    console.log("连接到：localhost:8000/components/download");
    next();
});


uploadRouter.route("/")

    .post((req, res) => {
        res.send("download Post");
    })

module.exports = uploadRouter;

