import React from 'react'
import companylogo from "../../../assets/images/company-img.svg"
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'

const CompanyWise = ({data}) => {
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
    <div className='past-mock topic-wise company-wise'>

{
            data&&data.filter((elem)=> elem.type==='company').map((item)=>{
                return(
                    <>

    <div className="card">
        
        <div className="card-img">
            <img src={item.img_url} alt="" />
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

export default CompanyWise