import React, { useState } from 'react'
import imgbann1 from "../../../assets/images/img-ban1.svg"
import imgbann2 from "../../../assets/images/img-ban2.svg"
import imgbann3 from "../../../assets/images/img-ban3.svg"
import imgbann4 from "../../../assets/images/img-ban4.svg"
import imgbann5 from "../../../assets/images/img-ban5.svg"


const ThirdSec = () => {
  const [state,setState] =useState(1)
  return (
    <div className='third-sec'>
        <h1>How will your journey look like?</h1>
        <p>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>

         <div className="boxx">
         <div className="left">
          <div className="card">
          
            <div className={`card-body ${state===1 ? 'card-body-full-stack-third-sec-bg':'none'}`} onClick={()=>setState(1)}>
            <div className="circle">
              <div className="inner-cir">
                1
              </div>
             
            </div>
                Batch Commencement
              </div>
          </div>
          <div className="card">
          
          <div className={`card-body ${state===2 ? 'card-body-full-stack-third-sec-bg':'none'}`}  onClick={()=>setState(2)}>
          <div className="circle">
            <div className="inner-cir">
              2
            </div>
           
          </div>
          Learn required languages, framework & tools
            </div>
        </div>

      

        <div className="card">
          
          <div className={`card-body ${state===3 ? 'card-body-full-stack-third-sec-bg':'none'}`} onClick={()=>setState(3)}>
          <div className="circle">
            <div className="inner-cir">
              3
            </div>
           
          </div>
          Complete awesome real world projects
            </div>
        </div>




        <div className="card">
          
          <div className={`card-body ${state===4 ? 'card-body-full-stack-third-sec-bg':'none'}`} onClick={()=>setState(4)}>
          <div className="circle">
            <div className="inner-cir">
              4
            </div>
           
          </div>
          Experience the complete development lifecycle
            </div>
        </div>



        <div className="card">
          
          <div className={`card-body ${state===5 ? 'card-body-full-stack-third-sec-bg':'none'}`} onClick={()=>setState(5)}>
          <div className="circle">
            <div className="inner-cir">
              5
            </div>
           
          </div>
          Be a certified Full Stack Developer
            </div>
        </div>

 
</div>
<div className="right">


 {
  state===1 ?<div className="cont">
  <h2>Batch Commencement</h2>
  <div className="para">
  <p> <i class="ri-arrow-right-s-line"></i> Get access to dashboard & complete plan</p>
  <p> <i class="ri-arrow-right-s-line"></i> Introduction with lead mentor for this program</p>
  <p> <i class="ri-arrow-right-s-line"></i> Access to recorded video lectures</p>
  <p> <i class="ri-arrow-right-s-line"></i> Access to Mock Tests</p>
  <p> <i class="ri-arrow-right-s-line"></i> One live session with mentors per week</p>
  <p> <i class="ri-arrow-right-s-line"></i> Every live session will be of 2 hours duration</p>
 
 
 
 
  </div>
  <div className="card-img">
  <img src={imgbann1} alt="" />
  </div>
  </div>
  :''
 }


{
  state===2 ?<div className="cont">
  <h2>Learn required languages, framework & tools</h2>
  <div className="para">
  <p> <i class="ri-arrow-right-s-line"></i>Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS</p>
  <p> <i class="ri-arrow-right-s-line"></i> Learn the industry wide used tools like MongoDB, Git & Jira</p>

 
 
 
 
  </div>
  <div className="card-img">
  <img src={imgbann2} alt="" />
  </div>
  </div>
  :''
 }



{
  state===3 ?<div className="cont">
  <h2>Complete awesome real world projects</h2>
  <div className="para">
  <p> <i class="ri-arrow-right-s-line"></i> HTML Blog Page</p>
  <p> <i class="ri-arrow-right-s-line"></i> Reminder Clock App</p>
  <p> <i class="ri-arrow-right-s-line"></i> Todo App</p>
  <p> <i class="ri-arrow-right-s-line"></i> React Blog</p>
  <p> <i class="ri-arrow-right-s-line"></i> Chat App</p>
  <p> <i class="ri-arrow-right-s-line"></i> E-commerce Web App</p>
 
 
 
 
  </div>
  <div className="card-img">
  <img src={imgbann3} alt="" />
  </div>
  </div>
  :''
 }



{
  state===4?<div className="cont">
  <h2>Experience the complete development lifecycle</h2>
  <div className="para">
  <p> <i class="ri-arrow-right-s-line"></i> Learn the Agile Development Methodology</p>
  <p> <i class="ri-arrow-right-s-line"></i> Real time experience of complete software development lifecycle from development to deployment</p>
 
 
 
 
  </div>
  <div className="card-img">
  <img src={imgbann4} alt="" />
  </div>
  </div>
  :''
 }



{
  state===5 ?<div className="cont">
  <h2>Be a certified Full Stack Developer</h2>
  <div className="para">
  <p> <i class="ri-arrow-right-s-line"></i> Get certificate of course completion on completing projects, assignments & mock tests</p>
 
 
 
  </div>
  <div className="card-img">
  <img src={imgbann5} alt="" />
  </div>
  </div>
  :''
 }
    
</div>
         </div>


    </div>
  )
}

export default ThirdSec