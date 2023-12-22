import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AppSideBar = () => {
  const [state,setState]=useState(0)
  const navigate = useNavigate()
  return (
    <div className='container sidebar'>
     <div className="items" onClick={()=>navigate("/mock-tests")}>
     <h4> Mock Test</h4>
     </div> 
     <div className="items" onClick={()=>navigate("/preperation-videos")}>
      <h4>Video Tutorial</h4>
     </div>

     <div className="items" onClick={()=>navigate("/master-competitive-programming")}>
      <h4>  Master Competitive Programming</h4>
     </div>

     <div className="items" onClick={()=>navigate("/full-stack-developer")}>
     <h4> Full Stack</h4>
     </div>

     <div className="items" onClick={()=>navigate("/elevation-academy")}>
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
          <h4 onClick={()=>navigate("/project/html")}>Html</h4>
          <h4 onClick={()=>navigate("/project/css")}>Css</h4>
          <h4 onClick={()=>navigate("/project/javascript")}>Javascript</h4>
          <h4 onClick={()=>navigate("/project/react")}>React Js</h4>
          <h4 onClick={()=>navigate("/project/nodejs")}>Node js</h4>
          <h4 onClick={()=>navigate("/project/mongodb")}>Mongodb</h4>
        </div>
        :''
        }
     </div>

     <div className="items" onClick={()=>navigate("/login")}>
     <h4>Login / Signup</h4>
     </div>
    </div>
  )
}

export default AppSideBar