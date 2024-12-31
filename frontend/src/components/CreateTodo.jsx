export function CreateTodo(){
    return <div>
        <input style={{padding: 10, margin: 10}} type="text" placeholder="title" />
        <input style={{padding: 10, margin: 10}} type="text" placeholder="description" />
        <button>Add a Todo</button>
    </div>
}