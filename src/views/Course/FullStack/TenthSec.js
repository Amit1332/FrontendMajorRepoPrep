import React from 'react'
import imgbann from "../../../assets/snipping/certificatebanner.png"
import stt1 from "../../../assets/images/stt1.svg"
import stt2 from "../../../assets/images/stt2.svg"
import stt3 from "../../../assets/images/stt3.svg"




const TenthSec = () => {
  return (
    <div className='fourth-sec'>
           
            <div className="right">
                <h1>Get a real time project</h1>
                <div className="card-box">
                    <div className="card">
                        <img src={stt1} alt="" />
                        <p>Certified Full stack Developer</p>
                    </div>
                    <div className="card">
                        <img src={stt2} alt="" />
                        <p>Experience of Real world work</p>
                    </div>
                    <div className="card">
                        <img src={stt3} alt="" />
                        <p>Ready to crack any web developer interview</p>
                    </div>
                </div>
            </div>
            <div className="left">
                <img src={imgbann} alt="" />

            </div>

    </div>
  )
}

export default TenthSec