import React, { useState } from 'react'
import Faqtab from '../Faqtab'

const Question = () => {
    const [state,setState]= useState(1)
    const data1 =[
       {
        first:"Can i apply if i am in college",
        inner:"Current batch is focussed on 2022, 2021 and 2020 passouts."
       },{
        first:"Can i apply if i am fron non cse branch",
        inner:"Yes, if you are willing to work hard on your coding skills, you can apply."
       },

       {
        first:"Do i need to have strong coding skills",
        inner:"No, you do not need to have strong coding skills. You just need to have good fundamentals and willingness to work hard."
       },

       {
        first:"How can i apply",
        inner:"Click on apply button on the top banner and fill the complete application form."
       },
    ]


    const data2 =[
        {
         first:"What is th process of enrolling in batch ?",
         inner:"You need to fill the application form and wait for our team to get in touch with you."
        },{
         first:"Classes will be live or recorded",
         inner:"Classes will be completely Live"
        },
 
        {
         first:"What will be the class timings ?",
         inner:"Classes generally happen post 6 pm, Monday to Friday."
        },
 
       
     ]


     const data3 =[
        {
         first:"when will i get placement support",
         inner:"You will get placement support after you have completed the program and have finished all projects"
        },{
         first:"How exactly is placement support provided",
         inner:"Post course completion , your resume will be shared by the partner companies and after your resume is shortlised you will get interview oppurtunity"
        },
 
        {
         first:"For how long will i get placement support   ",
         inner:"You will get placement support for 12 months post course completion"
        },
 
        {
         first:"What if my resume not getting shortlisted",
         inner:"We have crafted the program very carefully , keeping in mind what recruiters look for in a candidate and their resume so there is a high probablity of resume getting shortlited. In worse case, if resume does not get shortlisted, we will work together on your resume and ensure it gets shortlisted"
        },
     ]
  return (
    <div className='question-sec'>
        <h1>Frequently Asked Questions</h1>
        <div className="tab-card">
            <div className={`button ${state===1?'bgskyactive':''}`} onClick={()=>setState(1)}>Eligibility Criteria</div>
            <div className={`button ${state===2?'bgskyactive':''}`} onClick={()=>setState(2)}>Batch Enrolment</div>

            <div className={`button ${state===3?'bgskyactive':''}`} onClick={()=>setState(3)}>Placement Support</div>

        </div>
       {
        state===1 ?
        <Faqtab  data={data1}/>
        :''
       }


{
        state===2 ?
        <Faqtab  data={data2}/>
        :''
       }


{
        state===3 ?
        <Faqtab  data={data3}/>
        :''
       }

    </div>
  )
}

export default Question