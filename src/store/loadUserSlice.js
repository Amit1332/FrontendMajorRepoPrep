import { createSlice } from "@reduxjs/toolkit";




const loadUserSlice = createSlice({
    name:"handle",
    initialState:{
        isAuthenticate:false,
        data:{}
    },
    reducers:{
        loadUser: (state,action)=>{
          if(action.payload){
            state.data = action.payload
            return state
          }
          else{
            return state.data
          }
         
         
        },
        isAuthenticated:(state,action)=>{
            state.isAuthenticate=action.payload
            return state
        }
    }
})


export const { loadUser,isAuthenticated}= loadUserSlice.actions
export default loadUserSlice.reducer