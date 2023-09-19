import React,{useRef} from 'react'
import './styles.css'


interface Props{
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) =>void;
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAddTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <form className="input" onSubmit={(e)=>{handleAddTodo(e)
    inputRef.current?.blur()
    }}>
        <input type="input" value={todo} ref ={inputRef} placeholder='Enter a task' className = "input-inbox" 
         onChange = {(e)=>setTodo(e.target.value)}/>
        <button className="input_submit" type='submit'>valider</button>
    </form>
  )
}

export default InputField