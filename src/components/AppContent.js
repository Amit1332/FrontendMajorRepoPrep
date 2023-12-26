import React, { Suspense } from 'react'
import routes from '../routes'
import { Route, Routes } from 'react-router-dom'
import loader from '../assets/images/loader.gif'
import ProtectedRoute from './ProtectedRoute'
const Dashboard = React.lazy(()=>import('../views/Dashboard'))

const loading = (
 <div className='h-100  pos-absolute'>
   <img src="/images/pblogo.png" alt="" className='loader' />
 </div>
)
const AppContent = () => {
  
  return (
    <div>
<Suspense fallback={loading}>

<Routes>
  {
    routes.map((route,idx)=>{
      return (
        route.element &&(
          <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          name={route.name}
          element={<route.element type={route.name}/>}
          
          />
        )
      )
    })
  }


<Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />
</Routes>
</Suspense>
    </div>
  )
}

export default AppContent