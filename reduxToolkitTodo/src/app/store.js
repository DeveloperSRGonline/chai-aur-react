import { configureStore} from "@reduxjs/toolkit"
// using the reducer to update changes here
import todoReducer from "../features/todo/todoSlice"

// to store global data
export const store = configureStore({
    reducer:todoReducer
})