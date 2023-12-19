import React from 'react'
import FirstSec from './FirstSec'
import SecondSec from './SecondSec'
import ThirdSec from './ThirdSec'
import FourthSec from './FourthSec'
import FifthSec from './FifthSec'
import SeventhSec from './SeventhSec'
import NinthSec from './NinthSec'
import TenthSec from './TenthSec'
import Feature from './Feature'
import Testmonial from './Testmonial'
import Faq from './Faq'
import Syllabus from './Syllabus'

const FullStack = () => {
  return (
    <div className='container full-stack'>
        <FirstSec/>
        <SecondSec/>
        <ThirdSec/>
        <FourthSec/>
        <FifthSec/>
        <SeventhSec/>
    <Syllabus/>
      
        <TenthSec/>
        <Testmonial/>
        <Feature/>
        <Faq/>

    </div>
  )
}

export default FullStack