import { useState } from 'react'
import './AddTodo.scss'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice"

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === '') return
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
        <form onSubmit={addTodoHandler} className="add-todo-form">
          <input 
            type="text" 
            className="add-todo-input" 
            placeholder="Add a new todo..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="add-todo-btn">Add</button>
        </form>
    </div>
  )
}

export default AddTodo