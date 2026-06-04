import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditTodo } from "../features/todo/todoSlice";
import "./Todos.scss";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button
              className="edit-btn"
              onClick={() =>
                // this is responsible for change in editId value
                dispatch(setEditTodo({ id: todo.id }))
              }
            >
              ✏️
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
