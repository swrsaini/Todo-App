const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:bXHE7KbHMo2UmYRF@cluster0.2no7u.mongodb.net/todo-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}