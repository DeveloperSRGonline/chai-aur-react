import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import "./Todos.scss";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todos-container">
      <div className="todos-header">Todos</div>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {todo.text}
          <button className="todo-delete-btn" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
