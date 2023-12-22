import  {configureStore} from '@reduxjs/toolkit'
import Slice from './Slice'
import loadUserSlice from './loadUserSlice'

const store = configureStore({
    reducer:{
        data:Slice,
        loadUser:loadUserSlice
    }
})


export default store