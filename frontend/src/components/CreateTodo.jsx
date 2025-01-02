import { useEffect, useState } from "react";
import { Todos } from "./Todos";

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
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    'content-Type': 'application/json'
                }
            }).then((res)=> {
                const json = res.json();
                alert("Todo Added")
                setCount(count+1)
            })
            
        }}>Add a Todo</button>
    </div>
}