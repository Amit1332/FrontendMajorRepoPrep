import React from 'react'
import sect1 from "../../assets/images/sect-1.webp"
import sect1a from "../../assets/images/sect-1-a.webp"
import sect2 from "../../assets/images/sect-2.webp"
import sect2b from "../../assets/images/sect-2-b.webp"
import sect3 from "../../assets/images/sect-3.webp"
import sect3c from "../../assets/images/sect3-c.webp"
import arrR from "../../assets/images/arrow-right.svg"



const ThirdSection = () => {
  return (
    <div className='third-section'>
        <h1 className='text-center'>I WANT TO</h1>
        <div className="card-sec">
            <div className="card">
                <div className="back-img"><img src={sect1} alt="" /></div>
                <div className="card-body">
                    <div className="card-img"><img src={sect1a} alt="" /></div>
                    <div className="content">
                        PREPARE FOR CAMPUS PLACEMENT
                    </div>
                </div>
                <div className="arrow-circ">
            <div className="box">
            <img src={arrR} alt="" />

            </div>
        </div>
            </div>
            <div className="card">
            <div className="back-img"><img src={sect2} alt="" /></div>
                <div className="card-body">
                    <div className="card-img"><img src={sect2b} alt="" /></div>
                    <div className="content">
                       MASTER COMPETITIVE PROGRAMMING
                    </div>
                </div>
                <div className="arrow-circ">
            <div className="box">
            <img src={arrR} alt="" />

            </div>
        </div>
            </div>
            <div className="card">
            <div className="back-img"><img src={sect3} alt="" /></div>
                <div className="card-body">
                    <div className="card-img"><img src={sect3c} alt="" /></div>
                    <div className="content">
                      BUILD DEVELOPMENT PROJECTS
                    </div>
                </div>
                <div className="arrow-circ">
            <div className="box">
                  <img src={arrR} alt="" />
            </div>
        </div>
            </div>
            
        </div>
        




    </div>
  )
}

export default ThirdSection