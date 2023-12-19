import React, { useState } from 'react'
import Faqtab from '../../Faqtab'

const Faq = () => {
    const [state,setState]=useState(0)
    const data =[
      {
       first:"What is the duration of th program ?",
       inner:"Duration of this Program is 3-4 months"
      },{
       first:"What is the primary language of this program ?",
       inner:"Javascript would be the primary language"
      },

      {
       first:"Is there any pre-requeste for this program ?",
       inner:"No there are no pre-requisite"
      },
      {
         first:"What if i miss the live session?",
         inner:"Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard."
        },
        {
         first:"How is the program different from other full stack course",
         inner:"This program provides not only learning but also complete experience of a full stack developer & software development cycle."
        },

     
   ]

  return (
    <div className='faq'>
        <div className="getintouch">
            <h2>Still confused! Drop your details & get a call back from our academic counselling expert</h2>
                <div className="touch-btn">
                    Get in touch
                </div>
        </div>


        <h1>FAQs</h1>
         <Faqtab data={data}/>
    
    </div>
  )
}

export default Faq