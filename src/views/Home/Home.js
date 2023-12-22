import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import BottomFooter from '../../components/header/BottomFooter'
import Instructor from './Instructor'
import PlacedStudent from './PlacedStudent'
import OurMentors from '../OurMentors'
import CollegeBanner from './CollegeBanner'
import MentorColleges from './MentorColleges'
import PopularBlogs from './PopularBlogs'

const Home = () => {
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
     {
      name:"Harshita Sharma",
      img1:'/images/mentor3.webp',
      title:"Product Engineer, AskSid.ai",
      text:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
      logo:'/images/brandlogo10.svg'
    }
    , {
      name:"Harshita Sharma",
      img1:'/images/mentor3.webp',
      title:"Product Engineer, AskSid.ai",
      text:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
      logo:'/images/brandlogo10.svg'
    },
    {
      name:"Harshita Sharma",
      img1:'/images/mentor3.webp',
      title:"Product Engineer, AskSid.ai",
      text:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
      logo:'/images/brandlogo10.svg'
    },
    
  ]
  return (
    <div className='container home'>
       <FirstSection/>
       <SecondSection/>
       <ThirdSection/>
       <Instructor/>
       <PlacedStudent/>
       <OurMentors data={data}/>
       <CollegeBanner/>
       <MentorColleges/>
       <PopularBlogs/>
    </div>
  )
}

export default Home