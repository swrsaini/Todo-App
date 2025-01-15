import { useEffect, useState } from "react";
import { Todos } from "./Todos";
import axios from 'axios'
export function CreateTodo({count , setCount}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    function createTodo(){
        if(title == "" || description == ""){
            alert("Title or Description can't be empty");
        }
        else{
            axios.post('http://localhost:3000/todo',{
                title: title,
                description: description
            }).then((res)=> {
                alert("Todo Added")
                setCount(count+1)
            })
        }
    }

    function handeKeyEvent(e){
        if(e.key == 'Enter'){
            createTodo();
        }
    }

    return <div>
        <input style={{padding: 10, margin: 10}} type="text" placeholder="title" onKeyDown={handeKeyEvent} onChange={(e)=>{
            setTitle(e.target.value)
            console.log(e.target.value)
        }} />
        <input style={{padding: 10, margin: 10}} type="text" placeholder="description" onKeyDown={handeKeyEvent} onChange={(e)=>{
            setDescription(e.target.value)
            console.log(e.target.value)
        }} />
        <button onClick={createTodo}>Add a Todo</button>
    </div>
}