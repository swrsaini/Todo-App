export function Todos({todos}){
    return <div>
        {todos.map((e)=>{
            return <div>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <button>Mark as Completed</button>
            </div>
        })}
    </div>
}