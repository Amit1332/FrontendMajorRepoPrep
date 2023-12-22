import React, { useState } from 'react'
import share from "../../../assets/images/share.svg"
import info from "../../../assets/images/info.svg"
import past from  "../../../assets/images/prac-test-img.svg"
import dataFunc from '../../../helper/dateFunc'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'



const PastTest = ({data}) => {
    let token = localStorage.getItem('prepclone')
  
    const checkout  =async (item)=>{
     

        try {
          const stripe = await loadStripe('pk_test_51OJiJgSHqKSNDjqqHKxgDaTSizL4h16CRajI3zfwiZLZDF76n4MAZok17F7z48Y7XHvRxdZjavEJVHINlFBsEezb007QGqdmuZ');
          const res = await axios.post(`order/checkout`,[{testId:item._id, name:item.name, price:Number(item.price),quantity:1}],{headers: {
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
    <div className='past-mock'>

        {
            data&&data.filter((elem)=> elem.type==='past').map((item)=>{
                return(
                    <>
                     <div className="card">
            <div className="inf d-flex justify-content-between">
                <img src={info} alt="" />
                <img src={share} alt="" />

            </div>
            <div className="card-img">
                <img src={item.img_url} alt="" />
            </div>
            <div className="title">
           {item.name}
            </div>
            <div className="date">
                <div className="box">
                    <div> {dataFunc(item.start_data)} </div>
                    <p>Date</p>
                </div>
                <div className="box">
                    <div>$ {item.price}</div>
                    <p>Price</p>
                </div>
                <div className="box">
                    <div>{item.duration}</div>
                    <p>Duration</p>
                </div>
            </div>
            <div className="test-btn">
                <div className="btn" onClick={()=>checkout(item)}>Buy Now</div>
            </div>

        </div>
                    
                    </>
                )
            })

        }
       
        
    </div>
  )
}

export default PastTest