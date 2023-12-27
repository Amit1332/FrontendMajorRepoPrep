import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../store/actions'
import dataFunc from '../../../helper/dateFunc'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'

const EnrollBatch = () => {
    const dispatch =useDispatch()
    const {courses ,isLoading} = useSelector((state)=>state.data)

  useEffect(() => {
    dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/courses`,"courses"))
  
  }, [])


  const [items,setItem] =useState({
    courseId:'',
    name:'',
    price:'',
    quantity:1

  })

  let token = localStorage.getItem('prepclone')

  const checkout  =async ()=>{
     
    try {
      const stripe = await loadStripe('pk_test_51OJiJgSHqKSNDjqqHKxgDaTSizL4h16CRajI3zfwiZLZDF76n4MAZok17F7z48Y7XHvRxdZjavEJVHINlFBsEezb007QGqdmuZ');
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/checkout`,[items],{headers: {
        'Authorization': `Bearer ${token}`,
      }})
      const result = stripe.redirectToCheckout({
        sessionId:res.data.id

      })
     
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='enroll-batch'>
        <div className="left">
            <p>SELECT BATCH</p>

        </div>
       <div className="right">
       <div className="batch">
           {
            !isLoading ?
            courses&&courses.map((elem)=>{
                return(
                    <>
                     <div className={`card ${elem._id==items.courseId ? 'bg-primary':''}`} onClick={()=>setItem({courseId:elem._id,name:elem.name, price:Number(elem.price),quantity:1})}>
                <h3 className={`${elem._id==items.courseId ? 'color-white':''}`}>{dataFunc(elem.start_data)}</h3>
                <p>Enrollment Started</p>

            </div>
                    </>
                )
            })
            
            :
            <div className="load-cotent">
                <img src="/images/loader.webp"  alt="" />
            </div>
           }
           
           

        </div>
        <div className="price-tag">
                <h1> ₹ {items.price? items.price :'00000'}</h1>
                <div className="button" onClick={()=>checkout()}>
                    Enroll Now
                </div>
        </div>
       </div>
       

    </div>
  )
}

export default EnrollBatch