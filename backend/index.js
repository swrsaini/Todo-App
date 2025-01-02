
const express = require('express')
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());

app.get('/todos', async (req,res) => {
    const todos = await todo.find({});
    res.json(todos)
})

app.post('/todo', async (req,res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({msg: "you sent the wrong inputs"})
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({msg: "todo created"})
})

app.put('/completed', async (req,res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({msg: "wrong inputs"})
        return;
    }

    await todo.updateOne({_id: req.body.id}, {completed: true})

    res.json({msg: "done"})
    

})

app.put('/remove', async(req,res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({msg: "wrong inputs"})
        return;
    }

    await todo.deleteOne({_id: req.body.id})
    res.json({msg: 'done'})
})

app.listen(3000);