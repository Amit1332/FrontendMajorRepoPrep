import React from 'react'
import FirstSec from './FirstSec'
import SecondSec from './SecondSec'
import ThirdSec from './ThirdSec'
import FourthSec from './FourthSec'
import Testmonial from '../Course/FullStack/Testmonial'
import FifthSec from './FifthSec'
import SixthSec from './SixthSec'
import OurMentors from '../OurMentors'
import Question from './Question'
import FreeWebinar from './FreeWebinar'
import ApplyNow from './ApplyNow'

const ElevationAcademy = () => {
  const data = [
    {
      name:"Mamta Kumari",
      img1:'/images/mentor1.webp',
      title:"Ex Amazon, Samsung - Cofounder PrepBytes",
      text:"Mamta has 4.5 years of experience as a Software Developer. She has great passion towards coding and motivates students to pursue coding.Her mission is to use her knowledge and expertise to help students get placed in their dream company.",
      logo:'/images/brandlogo9.svg'
    },
    {
      name:"Kunal Dwivedi",
      img1:'/images/mentor2.webp',
      title:"Software Developer, Amazon",
      text:"Kunal has switched from Samsung to Amazon recently and likes to spend time teaching students who are walking down the same road. He love competitive programming and have secured under 100 rank in various coding challenges and 287 rank in Google Kickstart.",
      logo:'/images/brandlogo9.svg'
    }
    , {
      name:"Harshita Sharma",
      img1:'/images/mentor3.webp',
      title:"Product Engineer, AskSid.ai",
      text:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
      logo:'/images/brandlogo10.svg'
    },
    
  ]
  return (
    <div className='container elevation-stack'>
        <FirstSec/>
        <SecondSec/>
        <ThirdSec/>
        <FourthSec/>
        <ApplyNow/>
        <Testmonial/>
        <FifthSec/>
        <SixthSec/>
        <OurMentors data={data}/>
        <FreeWebinar/>
        <Question/>

    </div>
  )
}

export default ElevationAcademy