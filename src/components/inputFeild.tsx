import React from 'react'
import "./style.css"

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void;
}

const inputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form 
    className='input'
    onSubmit={handleAdd}
    >
      <input
       className='input__box'
       value={todo}
       onChange={(e) => setTodo(e.target.value)}
       placeholder='Enter a task'
       type='input'
       />
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default inputFeild
