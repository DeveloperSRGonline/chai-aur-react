import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state ka kaam hi yahi hai ki aap pehle se fix kar dete ho ki data ka type kya hoga aur uski starting value kya hogi.
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
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
  },
});

// individually functionalities ko use karne ke liye
export const {addTodo,removeTodo} = todoSlice.actions

// reducer export for store because only reducer can update anything in store
export default todoSlice.reducer


// ***************** understanding purpose ***************************
// Redux Toolkit internally aisa ek object banata hai:
// todoSlice = {
//     name: 'todo',
//     reducer: (state, action) => { ... }, // Main reducer function
//     actions: {
//         addTodo: (payload) => { return { type: 'todo/addTodo', payload: payload } },
//         removeTodo: (payload) => { return { type: 'todo/removeTodo', payload: payload } }
//     }
// }