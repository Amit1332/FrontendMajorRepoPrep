import React from 'react'

const FreeWebinar = () => {
  return (
    <div className='free-web'>
        <div className="top">
            <div className="left">
                <img src="/images/calendar.webp" alt="" />
            </div>
            <div className="right">
                <h1>Free Webinar</h1>
                <p>Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                <div className="date">
               <h1>17 April</h1>
                </div>
                <div className="button">Register</div>
            </div>


        </div>
        <div className="bottom">
                <div className="one">
                    <img src="/images/ic1.svg" alt="" />
                    <div className="right">
                        <h1>100k+</h1>
                        <p>Student Coding Community</p>
                    </div>
                </div>
                <div className="one">
                    <img src="/images/ic2.svg" alt="" />
                    <div className="right">
                        <h1>800++</h1>
                        <p>Colleges</p>
                    </div>
                </div>
                <div className="one">
                    <img src="/images/ic3.svg" alt="" />
                    <div className="right">
                        <h1>100+</h1>
                        <p>Students placed</p>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default FreeWebinar