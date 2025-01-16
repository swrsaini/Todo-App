import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Search } from "./Search";
import { todoList } from "../store/todoList";
import { useRecoilState, useRecoilValue } from "recoil";
export function Todos({ count, setCount }) {
    const [todos, setTodos] = useRecoilState(todoList)
    const todoRef = useRef({})

    useEffect(() => {
        axios.get("http://localhost:3000/todos")
            .then((res) => {
                setTodos(res.data);
            })
    }, [count])

    let sortedTodos = todos.slice().reverse()


    return <div className="flex-col justify-center w-1/2 ">
        <div><Search todoRef={todoRef}></Search></div>
        {sortedTodos.length > 0 ? (<div className="flex-col justify-center m-4 font-bold">NUMBER OF TODOS <div className="flex justify-center m-4"><p className="w-12  border rounded-full p-1 border-yellow-300 text-3xl text-yellow-300">{sortedTodos.length}</p></div></div>) : ''}
        
        {sortedTodos.map((e) => {
            return <div key={e._id} className={`h-full p-3 border-2 border-white mb-2 rounded-lg ${e.completed == true ? 'opacity-50 line-through' : ''} `}  ref={(el) => (todoRef.current[e._id] = el)}>
                <h2 className="text-3xl mb-2">{e.title}</h2>
                <p className="m-2"> {e.description}</p>
                <button style={{ margin: '5px' }} onClick={async () => {
                    await axios.put("http://localhost:3000/completed", {
                            id: e._id
                    })
                    setCount(count + 1);
                }}>{e.completed == true ? 'Completed' : "Mark as Complete"}</button>

                <button style={{ margin: '5px' }} onClick={async () => {
                    await axios.put("http://localhost:3000/remove", {
                        id: e._id
                })
                    setCount(count + 1);
                }}>Remove</button>
            </div>
        })}
    </div>
}