import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../store/Slice'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../store/actions'

const AppSideBar = ({hideseek}) => {
  const [state,setState]=useState(0)
  const navigate = useNavigate()




  const Navigate = useNavigate()
  const dispatch =useDispatch()
  const {data}= useSelector((state)=>state.loadUser)

  const [isLoggedIn,setIsLoggedIn]=useState(false)

  const logout =()=>{
    dispatch(logoutUser(Navigate))
    dispatch(HelperFunction.clearError('user'))
    setIsLoggedIn(false)
  }

  const isToken = localStorage.getItem("prepclone")


  useEffect(()=>{
    if(isToken){
      setIsLoggedIn(true)
    }
 

  },[dispatch,isLoggedIn])

  const [isShow, setIsShow]=useState(false)

  return (
    <div className='container sidebar'>

      {
        isLoggedIn ?
        <div className='items'>
          <h4  className='d-flex align-items-center' style={{fontSize:"20px",gap:"10px"}}><i class="ri-user-smile-fill"  style={{fontSize:"22px"}}></i> Hi {data&&data.name&&data&&data.name}</h4>
  <h4 onClick={()=>{
    Navigate('/dashboard')
    hideseek()
    }}><i class="ri-dashboard-line" ></i> My Dashboard</h4>
  <h4 onClick={()=>
  {
    logout()
     hideseek()
  }}>Logout</h4>

</div>
:''
      }



     <div className="items" onClick={()=>{
      navigate("/mock-tests") 
       hideseek()}}>
     <h4> Mock Test</h4>
     </div> 
     <div className="items" onClick={()=>{
      navigate("/preperation-videos")
       hideseek()
     }}>
      <h4>Video Tutorial</h4>
     </div>

     <div className="items" onClick={()=>{
      navigate("/master-competitive-programming") 
       hideseek()
     }}>
      <h4>  Master Competitive Programming</h4>
     </div>

     <div className="items" onClick={()=>{
      navigate("/full-stack-developer") 
      hideseek()
     }}>
     <h4> Full Stack</h4>
     </div>

     <div className="items" onClick={()=>{
      navigate("/elevation-academy")
      hideseek()}}>
        <h4> elevation Academy</h4>
       </div>


     <div className="items" >
        <div className="block" onClick={()=>state===1?setState(0): setState(1)}>
        <h4>Projects</h4>
        {
          state===1 ?
          <i class="ri-arrow-down-s-line"></i>


          :
          <i class="ri-arrow-right-s-line"></i>

        }
        </div>

        {
          state===1 ?
          <div className="inner-items">
          <h4 onClick={()=>{
            navigate("/project/html")
            hideseek()
          }}>Html</h4>
          <h4 onClick={()=>{
            navigate("/project/css")
              hideseek()
          }}>Css</h4>
          <h4 onClick={()=>{
            navigate("/project/javascript")
             hideseek()
          }}>Javascript</h4>
          <h4 onClick={()=>{
            navigate("/project/react") 
            hideseek()
          }}>React Js</h4>
          <h4 onClick={()=>{
            navigate("/project/nodejs") 
            hideseek()
          }}>Node js</h4>
          <h4 onClick={()=>{
            navigate("/project/mongodb") 
              hideseek()
          }}>Mongodb</h4>
        </div>
        :''
        }
     </div>

     

     {
  !isLoggedIn?
<div className="items" onClick={()=>{
  navigate("/login") 
   hideseek()
}}>
     <h4>Login / Signup</h4>
     </div>
:''

}
    </div>
  )
}

export default AppSideBar