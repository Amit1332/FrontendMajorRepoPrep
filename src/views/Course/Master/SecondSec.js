import React, { useState } from 'react'
import empl1 from "../../../assets/images/empl-1.webp"
import empl2 from "../../../assets/images/empl-2.webp"
import empl3 from "../../../assets/images/empl-3.webp"
import branda from "../../../assets/images/branda.webp"
import brandb from "../../../assets/images/brandb.webp"
import brandc from "../../../assets/images/brandc.webp"
import tb1 from "../../../assets/images/tb-1.webp"
import tb2 from "../../../assets/images/tb-2.webp"
import tb3 from "../../../assets/images/tb-3.webp"
import tb4 from "../../../assets/images/tb-4.webp"
import tb5 from "../../../assets/images/tb-5.webp"
import tb6 from "../../../assets/images/tb-6.webp"
import tb7 from "../../../assets/images/tb-7.webp"
import tb8 from "../../../assets/images/tb-8.webp"
import bannermast from "../../../assets/images/banner-mas.svg"
import compbanner from "../../../assets/images/comp-banner.webp"
import ele from "../../../assets/images/11.webp"
import twe from "../../../assets/images/12.webp"
import thir from "../../../assets/images/13.webp"
import curimg from "../../../assets/images/cur-img.webp"















const SecondSec = () => {
   const [id,setId]= useState(0)
  return (
    <div className='second-sec'>
        <h1>Get Guidance From Industry Leading Mentors</h1>
        <h2>Other Mentors You Will Be Interacting With</h2>
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src={empl1} alt="" />
                </div>
                <div className="cont">
                    <h3>Mamta</h3>
                    <p>Co, Founders ,Prepbytes</p>
                    <div className="brand">
                    <img src={branda} alt="" />
                </div>
                </div>
                
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={empl2} alt="" />
                </div>
                <div className="cont">
                    <h3>Kushdeep</h3>
                    <p>Co, Founders ,Prepbytes</p>
                    <div className="brand">
                    <img src={brandb} alt="" />
                </div>
                </div>
                
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={empl3} alt="" />
                </div>
                <div className="cont">
                    <h3>Aveek</h3>
                    <p>Co, Founders ,Prepbytes</p>
                    <div className="brand">
                    <img src={brandc} alt="" />
                </div>
                </div>
                
            </div>
        </div>

        <h1>Master Competitive Programming With Us</h1>

        <div className="cont-tables">
            <div className="left">
                <div className="card">
                    <div className="cont">
                        <h4>Personalised Program</h4>
                        <p>Master your skills from where you are, with</p>
                        <p>India's only personalised program</p>
                    </div>
                    <div className="card-img">
                        <img src={tb1} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="cont">
                        <h4>Quick Doubt Support</h4>
                        <p>Get your doubts cleared by coding experts and</p>
                        <p>have a smooth learning</p>
                    </div>
                    <div className="card-img">
                        <img src={tb2} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="cont">
                        <h4>250+ Coding Questions</h4>
                        <p>Best way to master a language is by coding in</p>
                        <p>the language</p>
                    </div>
                    <div className="card-img">
                        <img src={tb3} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="cont">
                        <h4>50+ Hours of Videos</h4>
                        <p>Recorded video lectures by experts to help you</p>
                        <p>understand the concepts easily</p>
                    </div>
                    <div className="card-img">
                        <img src={tb4} alt="" />
                    </div>
                </div>
            </div>
            <div className="center">
                <img src={bannermast} alt="" />
            </div>
            <div className="left right">
                
                <div className="card">
                <div className="card-img">
                        <img src={tb5} alt="" />
                    </div>
                    <div className="cont">
                        <h4>Expert Mentors</h4>
                        <p>Get career guidance, mentorship, time</p>
                        <p>management strategies from industry experts</p>
                    </div>
                   
                </div>
                <div className="card">
                <div className="card-img">
                        <img src={tb6} alt="" />
                    </div>
                    <div className="cont">
                        <h4>Get Certified</h4>
                        <p>Get recognized on course completion with</p>
                        <p>highly reputed PrepBytes certificates</p>
                    </div>
                    
                </div>
                <div className="card">
                <div className="card-img">
                        <img src={tb7} alt="" />
                    </div>
                    <div className="cont">
                        <h4>20+ Live Coding Sessions</h4>
                        <p>Code live and get mentorship with the</p>
                        <p>top-rated coders of the country.</p>
                    </div>
                   
                </div>
                <div className="card">
                <div className="card-img">
                        <img src={tb8} alt="" />
                    </div>
                    <div className="cont">
                        <h4>40+ Coding quizes</h4>
                        <p>Small quizzes after every topic to give you</p>
                        <p>a quick check on your understandings</p>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="countdown">
            <div className="one">
                <h1>10K+</h1>
                <h4>Student Enrolled</h4>
            </div>
            <div className="one">
                <h1>1000K+</h1>
                <h4>Doubts Solved   </h4>
            </div>
            <div className="one">
                <h1>2k+ hrs</h1>
                <h4>Mentor Interaction</h4>
            </div>
        </div>

        <h1>Crack Reputed Coding Contests</h1>
        <div className="comp-banner">
            <img src={compbanner} alt="" />
        </div>

        <h1>Curriculum</h1>


        <div className="curriculam">
            <div className="left">
                <div className="card" onClick={()=>setId(0)} style={id===0? {color:'#00A6EB',fontWeight:"600"}:{color:'rgb(94, 93, 93)'}}>
                    <div className="card-img">
                        <img src={ele} alt="" />
                    </div>
                    <div className="lag">
                    Language Fundamentals (Choose any one of C/C++/Java/Python)
                    </div>
                </div>
                <div className="card" onClick={()=>setId(1)} style={id===1? {color:'#00A6EB',fontWeight:"600"}:{color:'rgb(94, 93, 93)'}}>
                    <div className="card-img">
                        <img src={twe} alt="" />
                    </div>
                    <div className="lag">
                    Data Structures and Algorithms
                    </div>
                </div>
                <div className="card" onClick={()=>setId(2)} style={id===2? {color:'#00A6EB',fontWeight:"600"}:{color:'rgb(94, 93, 93)'}}>
                    <div className="card-img">
                        <img src={thir} thiralt="" />
                    </div>
                    <div className="lag">
                    Competitive Maths
                    </div>
                </div>

                <div className="imagee">
                    <img src={curimg} alt="" />
                </div>
            </div>
            <div className="left right">

                  {
                    id===0 ?
                    <div className="line">
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>C/C++/Java/Python Overview</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Logic Building</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Data Types</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Loops and Conditions</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Pattern Programming</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Operators and Expressions</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Input/Output</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Functions</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Functions and OOPs(Python)</p>
                    </div> 
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Pointers(C/C++)</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Arrays</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Structures</p>
                    </div>

                    

                    
                 </div>
                 :''
                  }


{
                    id===1 ?
                    <div className="line">
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Linked List</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Stack</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Queues</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Trees</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Heaps</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Graphs</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Segment Trees</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Searching</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Sorting</p>
                    </div> 
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Hashing</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Intro to DS/Algo</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Time Complexity</p>
                    </div>

                 </div>
                 :''
                  }

{
                    id===2 ?
                    <div className="line">
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Prime Numbers</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Permutation & Combinations</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>GCD</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>LCM</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Probablities</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Number Theory</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Modular Arithmetic</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Binary Exponention</p>
                    </div>
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Matrix Exponentiation</p>
                    </div> 
                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Game Theory</p>
                    </div>

                    <div className="aa d-flex">
                    <div className="bullets"></div>
                     <p>Computational Geometry</p>
                    </div>
                 </div>
                 :''
                  }



            </div>


        </div>

    </div>
  )
}

export default SecondSec