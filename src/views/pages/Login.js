import React, { useEffect, useState } from 'react'
import log1 from "../../assets/images/log-1.webp"
import log2 from "../../assets/images/log-2.webp"
import log3 from "../../assets/images/log-3.webp"
import log4 from "../../assets/images/log-4.webp"
import log5 from "../../assets/images/log-5.webp"
import log6 from "../../assets/images/log-6.webp"
import HelperFunction from '../../store/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const Navigate = useNavigate()
    const dispatch =  useDispatch()
     
    const [state,setState]= useState(true)
    const [hide,setHide]= useState(true)
    const {isAuthenticate }= useSelector((state)=>state.loadUser)

    const userData = useSelector((state)=>state.data.user)

    const token =  userData&&userData.token
    
    const [data, setData]= useState({
        name:"",
        mob:"",
        email:"",
        password:"",
        colleges:'',
        passyear:''
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(state){
                dispatch(HelperFunction.postData(`${process.env.REACT_APP_BASE_URL}/user/signup`,data,"user"))  
              
                           
      }
        else{
         dispatch(HelperFunction.postData(`${process.env.REACT_APP_BASE_URL}/user/login`,data,"user"))
        }
       
        if(isAuthenticate){
            setData({
                name:"",
                mob:"",
                email:"",
                password:"",
                colleges:"",
                passyear:""
            })
        }
       

}

useEffect(()=>{
    if(token){
        localStorage.setItem("prepclone",token)
        dispatch(HelperFunction.loadUser(`${process.env.REACT_APP_BASE_URL}/user/`,token))
        Navigate('/')
    }
},[token,userData])

  return (
    <div className='container login-page'>
        <div className="left">
            <img src={log1} alt="" />
        </div>
        <div className="center">
            <div className="box">
                <div className="preplg">
                    <img src={log6} alt="" />
                </div>
               <div className="inner-box">
               <div className="content">
                    <div className="img">
                        <img src={log2} alt="" />
                    </div>
                    <div className='text'>
                        <div className="tit">10k+</div>
                         <p>Student Enrolled</p>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={log3} alt="" />
                    </div>
                    <div className='text'>
                        <div className="tit">1000+</div>
                         <p>Reach in Colleges</p>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={log4} alt="" />
                    </div>
                    <div className='text'>
                        <div className="tit">10K+</div>
                         <p>Hours of Learning</p>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={log5} alt="" />
                    </div>
                    <div className='text'>
                        <div className="tit">1000+</div>
                         <p>Social Community</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
        <div className="right">
            <div className="card">
                <div className="button-toggle">
                    <div className={`btn ${state ? 'active':''}`} onClick={()=>setState(true)}>SIGNUP </div>
                    <div className={`btn ${!state ? 'active':''}`} onClick={()=>setState(false)}>LOGIN</div>

                </div>
                <h2 className='text-center'>{state ? "Create your new account":"Sign In to your account"} </h2>

                <form action="">    
                  {
                    state ?
                    <div className="field">
                    <input type="text" id='name'  name='name' placeholder='Name' onChange={handleChange}/>
                   </div>
                   :''
                  }
                   <div className="field">
                   {/* <label htmlFor="email">Email</label> */}
                    <input type="text" id='email'  name='email' placeholder='Email' onChange={handleChange}/>
                   </div>
                  {
                    state ? 
                    <div className="field">
                    <input type="number" id='phone'  name='mob' placeholder='Phone no.' onChange={handleChange}/>
                   </div> 
                   :''
                  }  
                   <div className="field">
                   {/* <label htmlFor="pass">Password</label> */}
                        <div className="hide-pass">
                    <input type={`${hide?'password':'text'}`}  id='pass' name='password' placeholder='Password' onChange={handleChange}/>
                            <div className="eye">
                                {
                                    hide ?
                                    <i class="ri-eye-fill" onClick={()=>setHide(false)}></i>

                                    :
                                   <i class="ri-eye-off-fill" onClick={()=>setHide(true)}></i>
                                    


                                }
                            
                            </div>
                        </div>
                   </div>

                  {
                    state ?
                    <div className="field select">
                    <input type="text" id='phone'  name='colleges' placeholder='Colleges' onChange={handleChange}/>
                       <select name="passyear" id="" onChange={handleChange}>
                        <option >Passing Year</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>



                       </select>
                   </div> 
                   :''
                  } 
                    {
                        state ? 
                        <div className="terms">
                        <input type="checkbox" />
     
                         <label htmlFor="">I agree to the <a href="">Term and Conditions</a></label>
                        </div>
                        :
                   <div className="forgot">Forgot Your Password ?</div>

                    }
                  

                    <div className="handlebtn">
                    <div className="button" onClick={handleSubmit}>{state ? "SIGN UP" :"SIGN IN"}</div>
                    {
                        !state ?
                        <div className="button">Login Via OTP</div>
                        : ''
                    }
                    
                    </div>
                   
                </form>
            </div>
        </div>


    </div>
  )
}

export default Login