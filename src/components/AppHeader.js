import React, { useState } from 'react'
import logo  from '../assets/images/logoPrepBytes.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import AppSideBar from './AppSideBar'


const AppHeader = () => {
  const Navigate = useNavigate()
  const [state,setState]=useState(false)

  const navchangetab = ()=>{
    setState(false)

  }

  return (
    <>
    <div className='navbar'>
         <div className="logo">
          <img src={logo} alt=""  className='h-10' onClick={()=>Navigate("/")}/>
         </div>
        <div className="right-int">
       
        <div className="nav-items">
         
        <div className="routes d-flex">
        <i class="ri-menu-line" onClick={()=>state===false? setState(true):setState(false)}></i>
          
         
        </div>
        </div>
        </div>

    </div>
   {
    state===true?
    <AppSideBar hideseek={navchangetab}/>
    :''
   }
    </>
  )
}

export default AppHeader