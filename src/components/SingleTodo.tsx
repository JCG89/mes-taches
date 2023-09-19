import React from 'react'
import { Todo } from '../models/models'
import { AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { MdDone} from 'react-icons/md'
import { useState , useRef, useEffect} from 'react'
import './styles.css'
 type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
 }
const SingleTodo: React.FC<Props> = ({todo, setTodos, todos}) => {

    const[edit, setEdit] = useState<boolean>(false);
    const [editTodoText, setEditTodoText] = useState<string>(todo.todo);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) =>(todo.id ===id?{...todo, todo: editTodoText}:todo))
        );
        setEdit(false);
    }
    const handleDelete =(id:number) =>{
        setTodos(todos.filter((todo) =>todo.id !== id));
    }

    const handleIsDone = (id:number)=>{
        setTodos(todos.map((todo) =>todo.id === id?{ ...todo, isDone:!todo.isDone}:todo));
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
       inputRef.current?.focus();
    }, [edit]);
  return (
    <form action="" className="single_todos" onSubmit={(e)=>handleEdit(e, todo.id)}>
        {edit?(
         <input value={editTodoText} onChange = {(e)=>setEditTodoText(e.target.value)} 
         ref = {inputRef} className = "todos__single--text"/>
        ): todo.isDone?(
           <s className = "todos__single--text">{todo.todo}</s> 
        ):(
            <span className="todos__single--text">{todo.todo}</span>
        )

        }
        
        <div>
            <span className="icon" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }}>
            <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
            <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleIsDone(todo.id)}>
            <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo