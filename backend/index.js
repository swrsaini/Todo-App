import { json } from "express";
import express from express
import { createTodo, updateTodo } from "./types";

const app = express();

app.use(express.json());

app.get('/todos', (req,res) => {
    res.send('todos')
})

app.post('/todo', (req,res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({msg: "you sent the wrong inputs"})
        return;
    }
})

app.put('/completed', (req,res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({msg: "wrong inputs"})
        return;
    }

})

app.listen(3000);