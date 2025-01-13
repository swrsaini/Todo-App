import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  
  const [count,setCount] = useState(0)

  return (
    <>
    <div className='mb-4'>
      <h1>To Do App</h1>
    </div>
      <CreateTodo count={count} setCount={setCount} />
      <div className='flex justify-center items-center w-full'>
      <Todos count={count} setCount={setCount}></Todos>
      </div>
      
    </>
  )
}

export default App
