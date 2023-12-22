import { createSlice } from "@reduxjs/toolkit";


const Slice  =  createSlice({
    name:"Slice",
    initialState:{},
    reducers:{
        getData : (state,action)=>{
            const name =action.payload.name
            state={...state,[name]:action.payload.data}
             return state

        },  postData : (state,action)=>{
            const name =action.payload.name
           state={...state,[name]:action.payload.data}
           return state

        },
        logoutUser:(state,action)=>{
         const token= localStorage.getItem('prepclone')
         if(token){
            localStorage.removeItem("prepclone")
            state.user={}
            return state
         }
         return state

             
        }

    }
})



export const {getData,postData,logoutUser} =Slice.actions
export default Slice.reducer