import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const initialState = {
    todos:[{
        id:1,
        text:"Hello world"
    }]
}

// function sayHello(){
//     console.log("Hello");
// }

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // addTodo:sayHello
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload // payload object hai
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer

// state - current state ka access deta hai
// action - values / data action se milega