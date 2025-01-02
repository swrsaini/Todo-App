import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  
  const [count,setCount] = useState(0)

  return (
    <>
      <CreateTodo count={count} setCount={setCount} />
      <Todos count={count} setCount={setCount}></Todos>
    </>
  )
}

export default App
