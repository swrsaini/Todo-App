import { json } from "express";
import express from express

const app = express();

app.use(express.json());

app.get('/todos', (req,res) => {
    res.send('todos')
})

app.post('/todos', (req,res) => {

})

app.put('/completed', (req,res) => {
    
})

app.listen(3000);