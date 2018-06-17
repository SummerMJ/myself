const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ylc");

const mongodb = mongoose.connection;

mongodb.once('error', () => console.log('Mongo connection error'));
mongodb.once('open', () => console.log('Mongo connection successful'));

const articalSchema = new mongoose.Schema({
    startTime: String,
    title: String,
    content: String
}, {collection: "artical"});

const db = {
    artical: mongoose.model("artical", articalSchema)
}
module.exports = db;