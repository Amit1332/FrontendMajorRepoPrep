import React from 'react'

const MentorColleges = () => {
  return (
    <div className='mentor-colleges'>
        <h1>PrepBytes for <b>Mentors & Colleges</b></h1>
        <p>"Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src="/images/home4.png" alt="" />
                </div>
                <h3>Be a part of growing Mentor Community of PrepBytes</h3>
                <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
           
                <div className="button">
                    Know More
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="/images/home5.png" alt="" />
                </div>
                <h3>Futuristic ALGO-driven Personalised learning module for your college</h3>
                <p>Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college</p>
           
                <div className="button">
                    Know More
                </div>
            </div>
        </div>

    </div>
  )
}

export default MentorColleges