import React from 'react'
import logo  from '../assets/images/logoPrepBytes.svg'
import nav from '../_nav'
import { NavLink, useNavigate } from 'react-router-dom'
const AppNavbar = () => {
  const Navigate = useNavigate()
  return (
    <div className='navbar'>
         <div className="logo">
          <img src={logo} alt=""  className='h-10' onClick={()=>Navigate("/")}/>
         </div>
        <div className="right-int">
        <div className="login">
            <div className="btn" onClick={()=>Navigate("/login")}>Login</div>
            <div className="btn" onClick={()=>Navigate("/login")}>Signup</div>

          </div>
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
              {/* <div className="dashboard">
                 <div className="box">A</div>
                  <div className='color-primary fw-600'>Hi Amitesh</div>
              </div> */}

        </div>
        </div>










    </div>
  )
}

export default AppNavbar