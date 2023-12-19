import React from 'react'
import videbann  from "../../../assets/images/videobanner.png"
import tut1 from "../../../assets/images/video-tut1.png"
import tut2 from "../../../assets/images/video-tut2.png"
import tut3 from "../../../assets/images/video-tut3.png"
import tut4 from "../../../assets/images/video-tut4.png"
import tut5 from "../../../assets/images/video-tut5.png"
import tut6 from "../../../assets/images/video-tut6.png"
import ytutu from "../../../assets/images/yttut.svg"
import { useNavigate } from 'react-router-dom'



const VideoTutorial = () => {

const data = [
  {
    img1:tut1,
    title:"Competitive Programming",
    para:"Competitive programming question solved by top rated coders",
    link:"https://youtu.be/OMcxQ3IY-qc?si=X4ZE0szFjWkcKmIa"

  },
  {
    img1:tut2,
    title:"Interview Preperation",
    para:"Commonly asked coding interview questions solved by step by step",
    link:"https://youtu.be/U70MUq9C88w?si=USBMA_E9OSTiAS-x"

  },
  {
    img1:tut3,
    title:"Data Structure and Algorithoms",
    para:"Basic Concepts of Data Structures and Algo and Ds/Algo Problem Solved",
    link:"https://youtu.be/U70MUq9C88w?si=USBMA_E9OSTiAS-x"

  },
 
  {
    img1:tut4,
    title:"Aptitude",
    para:"Apptitude Practice Questions and puzzles to boost your thinking brain",
    link:"https://youtu.be/U70MUq9C88w?si=USBMA_E9OSTiAS-x"

  },
  {
    img1:tut5,
    title:"C++ Programming",
    para:"Deep dive into fundamental of C++ Programming",
    link:"https://youtu.be/U70MUq9C88w?si=USBMA_E9OSTiAS-x"

  },
  {
    img1:tut6,
    title:"Operating System",
    para:"Learn in depth concepts of operating system easily",
    link:"https://youtu.be/bkSWJJZNgf8?si=HHfZssp-qeamXpo8"

  }
]
const navigate = useNavigate()


  return (
    <div className='container study-mat'>
      <div className="videos-tut">
      <div className="banner">
        <div className="left">
          <h1>Prepbytes Video Library</h1>
          <p>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>
        </div>
        <div className="right">
          <img src={videbann} alt="" />
        </div>

</div>


<div className="category">
  <h3>CATEGORIES</h3>
  <hr />

  <div className="cards-tut">
  {
    data.map((elem)=>{
      return(
        <>
          <a href={elem.link} target="_blank" className="card">
      <div className="card-img">
        <img src={elem.img1} alt="" />
      </div>
      <div className="card-body">
        <h3>{elem.title}</h3>
        <p>{elem.para}</p>
        <div className="yttut">
        <img src={ytutu} alt="" />
        21 Videos
      </div>
      </div>

      

    </a>
        </>
      )
    })
  }
  </div>
</div>

      </div>
           



    </div>
  )
}

export default VideoTutorial