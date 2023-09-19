import React from 'react'
import './styles.css'
import { Todo } from '../models/models'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todos">

      {todos.map((todo) =>

      <ul>
        <li>{todo.todo}</li>
      </ul>
      )}
    </div>
    
  )
}

export default TodoList;