import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import BottomFooter from '../../components/header/BottomFooter'

const Home = () => {
  return (
    <div className='container home'>
       <FirstSection/>
       <SecondSection/>
       <ThirdSection/>
    </div>
  )
}

export default Home