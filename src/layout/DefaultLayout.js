import React from 'react'
import { AppContent, AppFooter, AppHeader, AppNavbar } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
        <AppNavbar/>
        <div>
            {/* <AppHeader/> */}
            <div>
                <AppContent/>
            </div>
             <AppFooter/>
        </div>

    </div>
  )
}

export default DefaultLayout