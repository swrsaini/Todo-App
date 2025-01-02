export function Todos({todos}){
    return <div>
        {todos.map((e)=>{
            return <div key={e._id}>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                
                <button onClick={async ()=>{
                    await fetch("http://localhost:3000/completed", {
                        method: 'PUT',
                        body: JSON.stringify({
                            id: e._id
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                }}>{e.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}