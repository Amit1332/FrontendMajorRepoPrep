import React from 'react'
import topicper from "../../../assets/images/topic-per.svg"
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
const TopicWise = ({data}) => {
  let token = localStorage.getItem('prepclone')

  const checkout  =async (item)=>{
     

    try {
      const stripe = await loadStripe('pk_test_51OJiJgSHqKSNDjqqHKxgDaTSizL4h16CRajI3zfwiZLZDF76n4MAZok17F7z48Y7XHvRxdZjavEJVHINlFBsEezb007QGqdmuZ');
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/checkout`,[{testId:item._id, name:item.name, price:Number(item.price),quantity:1}],{headers: {
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
    <div className='past-mock topic-wise'>
    {
            data&&data.filter((elem)=> elem.type==='prac').map((item)=>{
                return(
                    <>

<div className="card">
            
            <div className="card-img">
                <img src={item.img_url} alt="" />
            </div>
            <div className="title">
           {item.name}
            </div>
            <div className="test-btn">
                <div className="btn" onClick={()=>checkout(item)}>Buy Now</div>
            </div>

        </div>


                    </>
                )})

       }
       
       
       
        
    </div>
  )
}

export default TopicWise