const express = require("express");
const router = express.Router();
const db = require("./db");


//抓取文章列表
router.get("/api/getArtical",(req, res) => {
    db.artical.find({}, (err, doc) => {
        err ? res.status(500).end() : res.json(doc);
    })
})

module.exports = router;