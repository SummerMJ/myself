const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/text");

const db = mongoose.connection();

db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successful'));

const loginSchema = mongoose.Schema({
    account: String,
    password: String
});

// const Models = {
//     Login: mo
// }