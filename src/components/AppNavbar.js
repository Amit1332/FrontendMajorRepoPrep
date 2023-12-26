import React, { useEffect, useState } from 'react'
import logo  from '../assets/images/logoPrepBytes.svg'
import nav from '../_nav'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../store/Slice'
import HelperFunction from '../store/actions'
const AppNavbar = () => {
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
 

  },[dispatch,isLoggedIn,data])

  const [isShow, setIsShow]=useState(false)

  return (
    <>
    <div className='navbar'>
         <div className="logo">
          <img src={logo} alt=""  className='h-10' onClick={()=>Navigate("/")}/>
         </div>
        <div className="right-int">
        {
          !isLoggedIn&&<div className="login">
          <div className="btn" onClick={()=>Navigate("/login")}>Login</div>
          <div className="btn" onClick={()=>Navigate("/login")}>Signup</div>

        </div>
        }
        <div className="nav-items">
         
        <div className="routes d-flex">
              {
                nav.map((elem)=>{
                  return(
                    <>
                     <NavLink className='navl' to={elem.to&&elem.to}>{elem.name}{(elem.inner&&elem.inner)? <i class="ri-arrow-down-s-fill"></i>:''}
                     
                    {
                      (elem.inner&&elem.inner) ? <ul className='subnav-list'>
                      <div>
                      {
                         elem.inner&&elem.inner.map((item)=>{
                           return(
                             <>
                            <NavLink className="d-block" to={item.to}>{item.name}</NavLink>
 
                             </>
                           )
                         })
                       }
                      </div>
                      </ul>
                      :''
                    }
                     </NavLink>
                    </>
                  )
                })
              }
          
          </div>
              {
                isLoggedIn && <div className="dashboard" onClick={()=>isShow===false ? setIsShow(true):setIsShow(false)}>
                <div className="box">{data&&data.name&&data&&data.name[0].toUpperCase()}</div>
                 <div className='color-primary fw-600'>Hi {data&&data.name&&data&&data.name.split(' ')[0]}</div>
             </div>
              }

             
        </div>
        </div>





      




    </div>

{
  isShow && isLoggedIn?
  <div className='container dashboartab'>
  <h3 onClick={()=>Navigate('/dashboard')}><i class="ri-dashboard-line" ></i> My Dashboard</h3>
  <h3 onClick={logout}>Logout</h3>

</div>
:''

}
   
    </>
  )
}

export default AppNavbar