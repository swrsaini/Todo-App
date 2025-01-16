import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { RecoilRoot } from 'recoil'


function App() {
  

  return (
    <>
    
    <div className='mb-4'>
      <h1>To Do App</h1>
    </div>
    <RecoilRoot>
      <CreateTodo />

      <div className='flex justify-center items-center w-full'>
      
      <Todos></Todos>
    
      
      </div>
      </RecoilRoot>
      
    </>
  )
}

export default App
