import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../store/actions'
import dataFunc from '../helper/dateFunc'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('prepclone')
    const data = useSelector((state)=> state.data.order)
    const Navigate = useNavigate()

    useEffect(()=>{
        dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/order`,'order',token))
        if(!token){
            Navigate('/')
        }
    },[])

    const [state,setState]=useState(1)
  return (
    <div className='container dashboard-sec'>
        <div className="left">
            <h3 onClick={()=>setState(1)} className={`${state===1 ? 'bg-light-sky-active':''}`}> <i class="ri-graduation-cap-fill" ></i> My Courses</h3>
            <h3 onClick={()=>setState(2)} className={`${state===2 ? 'bg-light-sky-active':''}`}><i class="ri-a-b" ></i> My Tests</h3>

        </div>
        <div className="right">

            {
                state===1?
                data&&data.filter(elem=> elem.courseId).map((item)=>{
                    return(
                        <>
                       <div className="card">
                        <div className="top">
                            <div className="left">
                                <img src="/images/pblogo.png" alt="" />
                            </div>
                            <div className="right">
                                <h3><img src="/images/cal.svg" alt="" />{dataFunc(item.courseId.start_data)} 2023</h3>
                                <h3><img src="/images/cal.svg" alt="" />{item.courseId.duration }</h3>

                            </div>
                        </div>
                        <h2>{item.courseId.name } Elevevation Academy Full Stack Web ..</h2>
                        <div className="button">
                            Go to Course
                        </div>

                       </div>
                        
                        </>
                    )
                })

                :''
            }


            {
                state===2 ? 
                
                data&&data.filter(elem=> elem.testId).map((item)=>{
                    console.log(item);
                    return(
                        <>
                       <div className="card">
                        <div className="top">
                            <div className="left">
                                <img src="/images/pblogo.png" alt="" />
                            </div>
                            <div className="right">
                                <h3><img src="/images/cal.svg" alt="" />{dataFunc(item.testId.start_data)} 2023</h3>
                                <h3><img src="/images/cal.svg" alt="" />{item.testId.duration }</h3>

                            </div>
                        </div>
                        <h2>{item.testId.name }.</h2>
                        <div className="button">
                            Test Now
                        </div>

                       </div>
                        
                        </>
                    )
                })
                
                
                :''
            }


        </div>

    </div>
  )
}

export default Dashboard