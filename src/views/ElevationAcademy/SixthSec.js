import React, { useState } from 'react'
import procimg1 from "../../assets/images/processimg1.webp"
import procimg2 from "../../assets/images/processimg2.webp"
import procimg3 from "../../assets/images/processimg3.webp"
import procimg4 from "../../assets/images/processimg4.webp"
import success from "../../assets/images/success.svg"



const SixthSec = () => {
    const [state,setState]=useState(1)
  return (
    <div className='sixth-sec'>
        <div className="top">
                <h1> How can you be part of the next batch</h1>
                <p>Experts mentors designed to get you job-ready, designed for complete beginners as well. All this with absolute zero cost including real-time assignments that help you practice what you have learnt. for complete beginners as well.</p>
        </div>

        <div className="bottom">
            <div className="left">
                <div className={`card ${state===1?'webinar-active':''}`} onClick={()=>setState(1)}>
                    <img src={procimg1} alt="" />
                   <h2> Application</h2>
                </div>
                <div className={`card ${state===2?'webinar-active':''}`} onClick={()=>setState(2)}>

                    <img src={procimg2} alt="" />
                   <h2> Shortlisting</h2>
                </div>
                <div className={`card ${state===3?'webinar-active':''}`} onClick={()=>setState(3)}>

                    <img src={procimg2} alt="" />
                   <h2> Free Webinars</h2>
                </div>
                <div className={`card ${state===4?'webinar-active':''}`} onClick={()=>setState(4)}>

                    <img src={procimg3} alt="" />
                   <h2> Enrolment</h2>
                </div>
                <div className={`card ${state===5?'webinar-active':''}`} onClick={()=>setState(5)}>

                    <img src={procimg4} alt="" />
                   <h2> Batch commencement</h2>
                </div>

            </div>
            <div className="right">
             {
                state===1? 
                <div className="cont">
                <h1>Application</h1>
                  <p><img src={success} alt="" />We are inviting applications for 2023, 2022 & 2021 passouts.</p>
                  <p><img src={success} alt="" />Apply for the next batch by filling up the application form.</p>
                  <p><img src={success} alt="" />Fill all the information correctly.</p>
                  <p><img src={success} alt="" />Any false information will lead to disqualification.</p>
  
                </div>
                :''
             }


{
                state===2? 
                <div className="cont">
                <h1>Shortlisting</h1>
                  <p><img src={success} alt="" />After you have submitted the application, your application will be reviewed by PrepBytes team.</p>
                  <p><img src={success} alt="" />ACandidates meeting the eligibility criteria will be shortlisted and the free webinars link will be shared to them over email.</p>
  
                </div>
                :''
             }




{
                state===3? 
                <div className="cont">
                <h1>Free Webinars</h1>
                
                  <p><img src={success} alt="" />Attend Free Webinar conducted by expert mentors.</p>
                  <p><img src={success} alt="" />Understand the importance of Web Development and pathway to crack Web Development Jobs</p>
  
                </div>
                :''
             }
              



              {
                state===4? 
                <div className="cont">
                <h1>Enrolment</h1>
                  <p><img src={success} alt="" />Students clearing the interview will be provided with admission letters.</p>
                  <p><img src={success} alt="" />Selected students have to sign the offer letter and pay enrolment amount to enrol in the program.</p>
                  <p><img src={success} alt="" />Enrolment Fees is 100% refundable if candidate wants to come out of the program within 7 days.</p>

  
                </div>
                :''
             }


{
                state===5? 
                <div className="cont">
                <h1>Batch commencement</h1>
                  <p><img src={success} alt="" />Batch will be started post enrolment. Classes will be completely live</p>
  
                </div>
                :''
             }
            </div>

        </div>


    </div>
  )
}

export default SixthSec