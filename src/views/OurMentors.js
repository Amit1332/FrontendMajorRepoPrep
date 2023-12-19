import React from 'react'
import mentorbanner from "../assets/images/mentorbanner.png"
import mentor1 from "../assets/images/mentor1.webp"
import brand1 from "../assets/images/brandlogo9.svg"



const OurMentors = ({data}) => {
  return (
    <div className='our-mentors'>
        <h1>Our Mentors</h1>
        <p>Learn directly from experienced software developers and master full stack</p>
        <div className="cards">
           {
            data.map((elem)=>{
                return (
                    <>
                     <div className="card">
                <div className="card-top">
                    <img src={mentorbanner} alt="" />
                    <img className='ment' src={elem.img1} alt="" />
                </div>
                
                <div className="card-body">
                <h3>{elem.name}</h3>
                <p>{elem.title}</p>
                <div className="para">
                    <p>{elem.text}</p>
                </div>
                <div className="brand-img">
                    <img src={elem.logo} alt="" />
                </div>
                </div>
            </div>
                    
                    </>
                )
            })
           }
        </div>

    </div>
  )
}

export default OurMentors