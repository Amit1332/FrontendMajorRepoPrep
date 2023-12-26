import React, { useRef } from 'react'
import masterlogo from "../../../assets/images/master-logo.webp"
import enroll1 from '../../../assets/images/enroll-1.webp'
import enroll2 from '../../../assets/images/enroll-2.webp'
import enroll3 from '../../../assets/images/enroll-3.webp'
import enroll4 from '../../../assets/images/enroll-4.webp'


const FirstSec = ({scrollff}) => {
   
    
  return (
    <div className='first-sec'>
        <div className="top">
            <div className="left">
                <h2>MASTER COMPETITIVE PROGRAMMING</h2>
                <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <b>Under The Guidance Of Top Competitive Programmers</b></p>
                    <div className="button" onClick={scrollff}>
                        Enrol Now
                    </div>
            </div>
            <div className="left">
                <img src={masterlogo} alt="" />
            </div>

        </div>
        <div className="bottom">
            <div className="note-card">
               <div className="card-img">
               <img src={enroll1} alt="" />
               </div>
                <div className="txt">9 months intensive bootcamp</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll2} alt="" />
               </div>
                <div className="txt">Quick doubt resolution</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll3} alt="" />
               </div>
                <div className="txt">
Live coding sessions with top-rated coders</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll4} alt="" />
               </div>
                <div className="txt">Get certificate on course completion</div>
            </div>

        </div>

    </div>
  )
}

export default FirstSec