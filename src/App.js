import './App.css';
import React, {Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import loader from './assets/images/loader.gif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaymentSuccess from './Payment/PaymentSuccess';
import PaymentCancel from './Payment/PaymentCancel';
import HelperFunction from './store/actions';
import { useDispatch } from 'react-redux';

const loading = (
  <img src="/images/pblogo.png" alt="" className='loader' />

)

const DefaultLayout = React.lazy(()=>import('./layout/DefaultLayout'))
const Project = React.lazy(()=>import('./views/Projects/Project'))

function App() {
  const dispatch = useDispatch()
        
  let token =localStorage.getItem("prepclone")
  useEffect(()=>{
    if(token){
        dispatch(HelperFunction.loadUser(`user/`,token))
    }
},[token])

  return (
   <HashRouter>
 
      <Suspense fallback={loading}>
        <Routes>
            <Route exact path="/project/html" name="html" element={<Project type="html"/>} />
            <Route exact path="/project/css" name="css" element={<Project type="css" />} />
            <Route exact path="/project/javascript" name="javascript" element={<Project type="javascript" />} />
            <Route exact path="/project/react" name="react" element={<Project type="react" />} />
            <Route exact path="/project/nodejs" name="nodejs" element={<Project type="nodejs"/>} />
            <Route exact path="/project/mongodb" name="mongodb" element={<Project type="mongodb"/>} />



            <Route path="/payment/success" name="Success" element={<PaymentSuccess/>}/>
            <Route  path="/payment/cancel" name="Cancel" element={<PaymentCancel/>} />

            <Route path="*" name="Home" element={<DefaultLayout />} />

        </Routes>

      </Suspense>



   </HashRouter>
  );
}

export default App;
