import React, { Suspense } from 'react'
import routes from '../routes'
import { Route, Routes } from 'react-router-dom'
import loader from '../assets/images/loader.gif'

const loading = (
  <div className='h-100 d-flex align-items-center justify-content-center w-100 pos-absolute'>
  <img src={loader} alt="" className='w-9' />
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



</Routes>
</Suspense>
    </div>
  )
}

export default AppContent