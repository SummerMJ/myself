const express = require("express");
const api = require("./api");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(api);

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("*", (req, res) => {
    const html = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), "utf-8");
})
app.listen(3000);
console.log("localhost:3000 in listening!");