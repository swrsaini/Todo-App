import { useState , useEffect } from "react";
export function Todos({count , setCount}){
    const [todos, setTodos] = useState([])
    
    
      useEffect(()=>{fetch("http://localhost:3000/todos")
      .then(async (res)=> {
        const json = await res.json();
        setTodos(json);
      })}, [count]) 

    let sortedTodos = todos.slice().reverse()
    console.log(sortedTodos)

    return <div>
        {sortedTodos.map((e)=>{
            return <div key={e._id}>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                
                <button style={{margin: '5px'}} onClick={async()=>{
                    await fetch("http://localhost:3000/completed", {
                        method: 'PUT',
                        body: JSON.stringify({
                            id: e._id
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    setCount(count+1);
                }}>{e.completed == true ? "Completed" : "Mark as Complete"}</button>

                <button style={{margin: '5px'}} onClick={async()=>{
                    await fetch("http://localhost:3000/remove", {
                        method: 'PUT',
                        body: JSON.stringify({
                            id: e._id
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    setCount(count+1);
                }}>Remove</button>
            </div>
        })}
    </div>
}