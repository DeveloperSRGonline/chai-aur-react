import { useState } from "react";
import "./AddTodos.scss";
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form
    onSubmit={addTodoHandler}
    className="todo-form"
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
}

export default AddTodos;