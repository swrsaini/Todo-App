const mongoose = require("mongoose");
require('dotenv').config();
const dbUri = process.env.DB_URI;
mongoose.connect(dbUri)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}