import React from 'react'
import futurskill from "../../../assets/images/futureskill.svg"
import banner from "../../../assets/images/fullstackbanner.png"

const FirstSec = () => {
  return (
    <div className='first-sec'>
        <div className="top">
            <img className='banner' src={banner} alt="" />
            <div className="left">
                <div className="cont">
                    <p>Partner With</p>
                    <img src={futurskill} alt="" />
                    <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                    <h2>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</h2>
                    <div className="button">Download Syllabus</div>
                </div>
            </div>
            <div className="left right">
            <div className="box">
                <h4>Next Batch starts: 1st May, 2023</h4>
                <p>Limited seats available</p>
            </div>
            <div className="box">
                <h4>Program Duration: 4 - 5 months</h4>
                <p>15-20 hours/week</p>
            </div>
            <div className="box">
                <h4>Learning Format</h4>
                <p>Recorded Lectures + Online Live Classes</p>
            </div>


            </div>


        </div>
        <div className="bottom">

            <div className="inner-bt">
                <div className="bb-x">
                    <p>SELECT BATCH</p>
                </div>
                <div className="bb-x">
                    <label className="card" htmlFor='batch1'>
                      <div className="input-ra">
                      <input type="radio" id='batch1' /> <span>1st May</span>
                      </div>
                        <p>Enrollment Started</p>
                    </label>
                    <label className="card" htmlFor='batch2'>
                    <div className="input-ra">
                        <input type="radio" id='batch2' /><span>15th May</span>
                        </div>
                        <p>Enrollment Started</p>
                    </label>

                </div>
                <div className="bb-x">
                    <h3>₹ 30000</h3>
                    <div className="button">
                        <div className="btn">Enroll Now </div>
                        <div className="btn"> Try for Free</div>

                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default FirstSec