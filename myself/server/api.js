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
router.post("/api/login", (req, res) => {
    var sess = req.session;
    db.user.find({user: req.body.user}, (err, doc) => {
        if (err) {
            res.status(500).end()
        } else if (doc.length) {
            if (doc[0]._doc.password === req.body.password) {
                req.session.regenerate(function (err) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "登陆失败"
                        })
                    } else {
                        req.session.user = req.body.user;
                        res.json({success: true, msg:"登陆成功", data: req.session.id})
                    }
                })
            } else { 
                res.json({
                    success: false,
                    msg: "账号或者密码错误"
                })
            }
        } else {
            res.json({
                success: false,
                msg: "账号或者密码错误"
            })
        }
    })
})

//登出
router.get("/api/signOut", (req, res) => {
    delete req.session.user;
    res.json({success: true, data: null, msg: "登出成功"})

})
module.exports = router;