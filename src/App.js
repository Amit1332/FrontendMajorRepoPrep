import './App.css';
import React, {Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import loader from './assets/images/loader.gif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const loading = (
  <div className='h-100 d-flex align-items-center justify-content-center w-100 pos-absolute'>
  <img src={loader} alt="" className='w-9' />
</div>
)

const DefaultLayout = React.lazy(()=>import('./layout/DefaultLayout'))
const Project = React.lazy(()=>import('./views/Projects/Project'))

function App() {
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



            <Route exact path="/500" name="Page 500" element='' />
            <Route exact path="/404" name="Page 404" element='' />

            <Route path="*" name="Home" element={<DefaultLayout />} />

        </Routes>

      </Suspense>



   </HashRouter>
  );
}

export default App;
