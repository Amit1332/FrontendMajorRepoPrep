import React from 'react'
import hf1 from "../../assets/images/hf1.svg"
import hf2 from "../../assets/images/hf2.svg"
import hf3 from "../../assets/images/hf3.svg"
import hf4 from "../../assets/images/hf4.svg"
import hf5 from "../../assets/images/hf5.svg"
import hf6 from "../../assets/images/hf6.svg"
import courseimg from "../../assets/images/course-img.png"



const Professional = () => {
  return (
    <div className='pfrofessional-sec'>
        <div className="left">
            <h1>Are you an Experienced Professional willing to Switch?</h1>


            <div className="boxes">
                <div className="box">
                    <img src={hf1} alt="" />
                    <h3>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</h3>
                </div>
                <div className="box">
                    <img src={hf2} alt="" />
                    <h3>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</h3>
                </div>
                <div className="box">
                    <img src={hf3} alt="" />
                    <h3>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</h3>
                </div>
            </div>
            <p> <strong>PrepBytes Elevation Academy</strong>- 4 months Full Stack Program with Job Guarantee</p>

                <div className="button"> Know more</div>
        </div>
        <div className="right">
            <div className="one">
                <img src={hf4} alt="" />
            </div>
            <div className="two">
                <img src={courseimg} alt="" />

             <div className="innertwo">
                <img src={hf5} alt="" />
                <img src={hf6} alt="" />
            </div>
            </div>

        </div>


    </div>
  )
}

export default Professional