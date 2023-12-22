import React, { useEffect, useState } from 'react'
import futurskill from "../../../assets/images/futureskill.svg"
import banner from "../../../assets/images/fullstackbanner.png"
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../store/actions'
import dataFunc from '../../../helper/dateFunc'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
const FirstSec = () => {
    const dispatch =useDispatch()
    const data = useSelector((state)=>state.data.courses)
//   useEffect(() => {
//     dispatch(HelperFunction.fetchData('courses',"courses"))
  
//   }, [])




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
    <div className='first-sec'>
        <div className="top">
            <img className='banner' src={banner} alt="" />
            <div className="left">
                <div className="cont">
                    <p>Partner With</p>
                    <img src={futurskill} alt="" />
                    <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                    <h2>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</h2>
                    <div className="button">Download Syllabus</div>
                </div>
            </div>
            <div className="left right">
            <div className="box">
                <h4>Next Batch starts: 1st May, 2023</h4>
                <p>Limited seats available</p>
            </div>
            <div className="box">
                <h4>Program Duration: 4 - 5 months</h4>
                <p>15-20 hours/week</p>
            </div>
            <div className="box">
                <h4>Learning Format</h4>
                <p>Recorded Lectures + Online Live Classes</p>
            </div>


            </div>


        </div>
        <div className="bottom">

            <div className="inner-bt">
                <div className="bb-x">
                    <p>SELECT BATCH</p>
                </div>
                <div className="bb-x">
                  {data&&data.map((elem)=>{
                    return(
                        <>
                          <label className={`card ${elem._id==items.courseId ? 'bg-primary':''}`} htmlFor='batch1' onClick={()=>setItem({courseId:elem._id,name:elem.name, price:Number(elem.price),quantity:1})}>
                      <div className="input-ra">
                      <input type="radio" id='batch1' name={elem.name} /> <span>{dataFunc(elem.start_data)}</span>
                      </div>
                        <p>Enrollment Started</p>
                    </label>
                        
                        </>
                    )
                  })}
                 

                </div>
                <div className="bb-x">
                    <h3>₹ {items.price? items.price :'00000'}</h3>
                    <div className="button">
                        <div className="btn"  onClick={()=>checkout()}>Enroll Now </div>
                        <div className="btn"> Try for Free</div>

                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default FirstSec