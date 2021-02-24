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

    .put((req, res) => {
        res.send("download Put");

    })

    .delete((req, res) => {
        res.send("download Delete");
    });

uploadRouter.route("/:id")
    .get((req, res) => {
        res.send("download id Get");
    })

module.exports = uploadRouter;

