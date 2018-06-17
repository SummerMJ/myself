const express = require("express");
const router = express.Router();
const db = require("./db");


//抓取文章列表
router.get("/api/getArtical",(req, res) => {
    db.artical.find({}, (err, doc) => {
        err ? res.status(500).end() : res.json(doc);
    })
});

//登录
router.get("/api/login", (req, res) => {
    db.user.find({user: req.body.user}, (err, doc) => {
        if (err) {
            res.status(500).end()
        } else if (doc.length) {
            if (doc[0].password === req.body.password) {
                
            }
        }
    })
})
module.exports = router;