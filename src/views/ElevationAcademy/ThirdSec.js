import React from 'react'
import ee1 from "../../assets/images/ee1.webp"
import ee2 from "../../assets/images/ee2.webp"
import ee3 from "../../assets/images/ee3.webp"
import ee4 from "../../assets/images/ee4.webp"
import ee5 from "../../assets/images/ee5.webp"
import ee6 from "../../assets/images/ee6.webp"


const ThirdSec = () => {
  return (
    <div className='third-sec'>
        <h1>Why PrepBytes Elevation Academy?</h1>


        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src={ee1} alt="" />
                </div>
                <h3>Live Learning</h3>
                <p>Master Mern Stack in Live Classes taken by Experts</p>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={ee2} alt="" />
                </div>
                <h3>Learn with Industry Experts</h3>
                <p>Learn with leading tech mentors and gain access to real-time web development experience.</p>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={ee3} alt="" />
                </div>
                <h3>Learn by Doing</h3>
                <p>Gain in depth experience by building real world projects</p>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={ee4} alt="" />
                </div>
                <h3>Resume Building</h3>
                <p>Get a resume that companies would shortlist</p>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={ee5} alt="" />
                </div>
                <h3>Mock Interviews</h3>
                <p>Interview practice with industry veterans with real-time feedbacks</p>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={ee6} alt="" />
                </div>
                <h3>Interview Opportunities</h3>
                <p>Get developer interview opportunities after course completion</p>
            </div>
        </div>


    </div>
  )
}

export default ThirdSec