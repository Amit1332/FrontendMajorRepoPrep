import axios from 'axios'
import { loadUser } from "./loadUserSlice";
import { getDataError, getDataStart, getDataSuccess } from './Slice';

const HelperFunction  = {
    fetchData: (url, name, token) => async (dispatch) => {
        try {
          dispatch(getDataStart()); // Dispatch a loading start action        
          const response  =await axios.get(url,{headers: {
            'Authorization': `Bearer ${token}`,
          }})
          dispatch(getDataSuccess({ data: response.data.data, name })); 
        } catch (error) {
          dispatch(getDataError(error)); 
        }
      },


    postData : (url,data,name)=>async(dispatch)=>{
        try {
          dispatch(getDataStart()); // Dispatch a loading start action        

            const response  =await axios.post(url,data)
            dispatch(getDataSuccess({data:response.data,name}))
            
        } catch (error) {
            dispatch(getDataError(error)); 
          }
    },
    loadUser : (url,token)=>async(dispatch)=>{
        try {
            const response  =await axios.get(url,{headers: {
                'Authorization': `Bearer ${token}`,
              }});
            dispatch(loadUser(response.data))
        } catch (error) {
           console.log(error);
        }
    },

    clearError:(name)=>async(dispatch)=>{
        try {
            dispatch(getDataSuccess({data:'',name})) 
        } catch (error) {
            
        }
    }

}




export default HelperFunction