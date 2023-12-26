import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({Component ,type}) => {
    const Navigate = useNavigate()
let token = localStorage.getItem('prepclone')
useEffect(() => {
  if(!token){
  Navigate('/login')
  }
},[])
  return (
    <div>
        <Component type={type}/>

    </div>
  )
}

export default ProtectedRoute