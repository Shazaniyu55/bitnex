import {createSlice} from '@reduxjs/toolkit'
import {userList} from "../../constant"



 const accountBalance =createSlice({
    name: "users",
    initialState:userList,
    reducers:{
       current: (state)=>{
        console.log(state)
       },

       fund:(state, action) =>{
         
       }
    }
})

export const {current, fund} = accountBalance.actions
export default accountBalance.reducer;