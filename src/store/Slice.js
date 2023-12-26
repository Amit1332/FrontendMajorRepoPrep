import { createSlice } from "@reduxjs/toolkit";


const Slice  =  createSlice({
    name:"Slice",
    initialState:{
        isLoading: false,
      },
    reducers:{
          getDataStart: (state) => {
            state.isLoading = true;
            return state
          },
          getDataSuccess: (state, action) => {
            const { name, data } = action.payload;
            state = { ...state, [name]: data, isLoading: false };
            return state
          },
          getDataError: (state, action) => {
            state.isLoading = false;
            const {error} =action.payload
            console.log(error);
            return state

          },

        //   postDataStart: (state) => {
        //     state.isLoading = true;
        //   },
        //   postDataSuccess: (state, action) => {
        //     const { name, data } = action.payload;
        //     state = { ...state, [name]: data, isLoading: false };
        //   },
        //   postDataError: (state, action) => {
        //     state.isLoading = false;
        //   },

        
        logoutUser:(state,action)=>{
         const token= localStorage.getItem('prepclone')
         if(token){
            localStorage.removeItem("prepclone")
            state.user={}
            action.payload('/login')
            return state
         }
         return state

             
        }

    }
})



export const {getDataStart,getDataSuccess,getDataError,postDataStart,postDataSuccess,postDataError,logoutUser} =Slice.actions
export default Slice.reducer