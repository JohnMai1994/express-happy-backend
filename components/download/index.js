const express = require("express");
const downloadRouter = express.Router();

downloadRouter.use((req, res, next) => {
    console.log("Connection to components/download")
    next();
});

downloadRouter.route("/")

    .get((req, res) => {
        res.send("download Get")

    })

    .post((req, res) => {
        res.send("download Post")
    })

    .put((req, res) => {

    })

    .delete((req, res) => {

    })

module.exports = downloadRouter;

