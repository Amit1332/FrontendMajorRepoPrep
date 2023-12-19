import React from 'react'
import imgbann from "../../../assets/images/fourthsecimgban.webp"
import ft1 from "../../../assets/images/ft1.svg"
import ft2 from "../../../assets/images/ft2.svg"
import ft3 from "../../../assets/images/ft3.svg"



const FourthSec = () => {
  return (
    <div className='fourth-sec'>
            <div className="left">
                <img src={imgbann} alt="" />

            </div>
            <div className="right">
                <h1>What you will be after finishing the program?</h1>
                <div className="card-box">
                    <div className="card">
                        <img src={ft1} alt="" />
                        <p>Certified Full stack Developer</p>
                    </div>
                    <div className="card">
                        <img src={ft2} alt="" />
                        <p>Experience of Real world work</p>
                    </div>
                    <div className="card">
                        <img src={ft3} alt="" />
                        <p>Ready to crack any web developer interview</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default FourthSec