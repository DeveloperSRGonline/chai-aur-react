import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state ka kaam hi yahi hai ki aap pehle se fix kar dete ho ki data ka type kya hoga aur uski starting value kya hogi.
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
  isEditing: false,// tracks if we're in edit mode
  editId: null,// id of todo being edited updation done by onclick in todos.jsx component
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state = purana data, action = jo naya data aaya hai (payload)
    addTodo: (state, action) => {
        // 
      const todo = {
        id:nanoid(),
        text:action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    updateTodo:(state,action) => {
      const {id,text} = action.payload
      
      const index = state.todos.findIndex(todo => todo.id === id)
      if(index !== -1){
        state.todos[index].text = text
      }
    },
    setEditTodo:(state,action) => {
      state.isEditing = true;
      state.editId = action.payload.id;
      // Note: We're not setting the text here because the AddTodos component will handle that via useEffect
    },
    clearEdit:(state) => {
      state.isEditing = false;
      state.editId = null;
    }
  },
});

// individually functionalities ko use karne ke liye
export const {addTodo,removeTodo,updateTodo,setEditTodo,clearEdit} = todoSlice.actions

// reducer export for store because only reducer can update anything in store
export default todoSlice.reducer