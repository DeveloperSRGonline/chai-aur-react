import { configureStore} from "@reduxjs/toolkit"
// using the reducer to update changes here
import todoReducer from "../features/todo/todoSlice"

// to store global data
export const store = configureStore({
    reducer: {
        todo: todoReducer,  // Ab todo ka sara data 'state.todo' mein milega
        auth: authReducer,  // Auth ka data 'state.auth' mein milega
        cart: cartReducer   // Cart ka data 'state.cart' mein milega
    }
})