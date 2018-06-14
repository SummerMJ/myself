const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/text");

const db = mongoose.connection();

db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successful'));

const articalSchema = new mongoose.Schema({
    startTime: String,
    title: String,
    content: String
});

const db = {
    artical: mongoose.model("artical", articalSchema)
}
// const Models = {
//     Login: mo
// }