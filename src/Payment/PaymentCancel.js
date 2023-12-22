import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentCancel = () => {
  const navigate = useNavigate()

  return (
    <div className='payment-cancel payment-success'>

    <div className="button" onClick={()=>navigate('/')}>Go To Home</div>

  </div>
  )
}

export default PaymentCancel