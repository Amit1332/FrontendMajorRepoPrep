import React, { useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader, AppNavbar, AppSideBar } from '../components/index'

const DefaultLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
        <div>
           {
            windowWidth <=1280 ?
           <div>
             <AppHeader/>
           
           </div>

            :
        <AppNavbar/>

           }
            <div>
                <AppContent/>
            </div>
             <AppFooter/>
        </div>

    </div>
  )
}

export default DefaultLayout