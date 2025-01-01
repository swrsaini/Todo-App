import { useState } from "react";

export function CreateTodo(){
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
            }).then(async (res)=> {
                const json = res.json();
                alert("Todo Added")
            })
        }}>Add a Todo</button>
    </div>
}