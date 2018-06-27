const express = require("express");
const api = require("./api");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
var FileStore = require('session-file-store')(session);
const app = express();
const identityKey = "skey"; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: identityKey,
    // store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 1000 * 60 * 6  // 有效期，单位是毫秒
    }
}))
//登陆拦截
app.use(function (req, res, next) {
    const url = req.originalUrl;
    if (url != "/api/login" && !req.session.user) {
        res.json({
            success: false,
            msg: "请重新登陆"
        });
    } else {
        next();
    }
})
app.use(api);

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("*", (req, res) => {
    console.log(req)
    const html = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), "utf-8");
})
//允许跨域访问
app.all('/*',function (req, res, next) {
	console.log(req,res)
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(3000);
console.log("localhost:3000 in listening!");