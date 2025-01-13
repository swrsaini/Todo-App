import { useEffect, useState } from "react";
import { Todos } from "./Todos";
import axios from 'axios'
export function CreateTodo({count , setCount}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style={{padding: 10, margin: 10}} type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value)
            console.log(e.target.value)
        }} />
        <input style={{padding: 10, margin: 10}} type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value)
            console.log(e.target.value)
        }} />
        <button onClick={()=>{
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
            
            
        }}>Add a Todo</button>
    </div>
}