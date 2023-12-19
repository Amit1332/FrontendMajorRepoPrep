import React from 'react'
import elebanner from "../../assets/images/elebanner.webp"
import img1 from "../../assets/images/eleimg1.webp"
import img2 from "../../assets/images/eleimg2.webp"
import img3 from "../../assets/images/eleimg3.webp"



const FirstSec = () => {
  return (
    <div className='first-sec'>
        <div className="top">
            <div className="left">
                <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                <p>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
                <div className="para">
                <p><i class="ri-arrow-right-line"></i>Complete Live Class from experts</p>
                <p><i class="ri-arrow-right-line"></i>Be the best Full stack developer</p>
                <p><i class="ri-arrow-right-line"></i>Job Guarantee</p>
                </div>

                <div className="button">
                    <div className="btn">Apply Now</div>
                    <div className="btn">Get a call back</div>

                </div>

            </div>
            <div className="right">
                <img src={elebanner} alt="" />
            </div>

        </div>
        <div className="bottom">

            <div className="left">
                <h1>For 2023, 2022 & 2021 graduates</h1>
                <div className="batch">Batch Starting: 1st May 2023</div>

            </div>
            <div className="right">
                <div className="line"></div>
                <div className="one">
                    <img src={img1} alt="" />
                    <h3>Free Webinar</h3>
                    <div className="box">
                        17th April
                    </div>
                </div>


                <div className="one">
                    <img src={img2} alt="" />
                    <h3>1:1 Counselling session</h3>
                    <div className="box">
                    From 18th April
                    </div>
                </div>


                <div className="one">
                    <img src={img3} alt="" />
                    <h3>Batch Start</h3>
                    <div className="box">
                    01 May'23, Mon-Fri (7-10PM)
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default FirstSec