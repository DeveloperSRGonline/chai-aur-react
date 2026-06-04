import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout:(state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login,logout } = authSlice.actions
export default authSlice.reducer


// ***************** Notes *****************
/* state se track karne mein madat and action se payload milta hai
login , logout ye sab actions hai 
logout ke pass bhi action ka access hai par as such us ki jarurat nahi hai
*/
