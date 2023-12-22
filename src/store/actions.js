import { getData } from "./Slice";
import axios from 'axios'
import { loadUser } from "./loadUserSlice";

const HelperFunction  = {
    fetchData : (url,name,token)=>async(dispatch)=>{
        try {
            const response  =await axios.get(url,{headers: {
                'Authorization': `Bearer ${token}`,
              }})
            dispatch(getData({data:response.data.data,name}))
        } catch (error) {
                console.log(error);
        }

    },
    postData : (url,data,name)=>async(dispatch)=>{
        try {
            const response  =await axios.post(url,data)
            dispatch(getData({data:response.data,name}))
            
        } catch (error) {
            console.log(error);
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
    }

}




export default HelperFunction