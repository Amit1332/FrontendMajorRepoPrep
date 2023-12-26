import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()
  return (
    <div className='payment-success'>

      <div className="button" onClick={()=>navigate('/dashboard')}>Go To Dasboard</div>

    </div>
  )
}

export default PaymentSuccess