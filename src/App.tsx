import React from 'react'
import InputField from './components/InputField'
import {useState} from 'react'
import { Todo } from './models/models'
import './App.css'
import TodoList from './components/TodoList'

const App: React.FC = () => {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState<Todo[]>([])

const handleAddTodo = (e: React.FormEvent) =>{
  e.preventDefault()
  if(todo){
    setTodos([...todos,{id: Date.now(), todo:todo, isDone:false}])

    setTodo(" ")
  }
}

  return (
    <div className='App'>
      <span className="heading">Mes Tâches</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAddTodo = {handleAddTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App