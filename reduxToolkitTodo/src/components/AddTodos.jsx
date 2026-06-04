import { useState, useEffect } from "react";
import "./AddTodos.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setEditTodo, clearEdit } from "../features/todo/todoSlice";

function AddTodos() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { isEditing, editId } = useSelector((state) => state);
    const todos = useSelector((state) => state.todos);

    // Sync input when edit state changes
    useEffect(() => {
        if (isEditing && editId !== null) {
            // Find the todo being edited and set its text as input
            const todoToEdit = todos.find(todo => todo.id === editId);
            if (todoToEdit) {
                setInput(todoToEdit.text);
            }
        } else if (!isEditing) {
            // Clear input when not editing
            setInput("");
        }
    }, [isEditing, editId, todos]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (isEditing && editId !== null) {
            // Update existing todo
            dispatch(updateTodo({ id: editId, text: input }));
        } else {
            // Add new todo
            dispatch(addTodo(input));
        }
        // Always clear edit state after submission
        dispatch(clearEdit());
        setInput("");
    };

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

            {input.length > 0 && (
                <button type="submit" className="todo-btn">
                    {isEditing ? "Update" : "Add"}
                </button>
            )}
        </form>
    );
}

export default AddTodos;