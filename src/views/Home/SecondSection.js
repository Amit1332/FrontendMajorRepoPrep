import React from 'react'
import studyBoy from  '../../assets/images/study-per.svg'
import rightarrow from "../../assets/images/arrow-down-r.svg"
import leftarrow from "../../assets/images/arrow-down-l.svg"
import one from "../../assets/images/one.svg"
import two from "../../assets/images/two.svg"
import three from "../../assets/images/three.svg"
import four from "../../assets/images/four.svg"
import achieve from "../../assets/images/achievement.svg"






const SecondSection = () => {
  return (
    <div className='second-section'>
            <div className="second-sec-left">
                <img src={studyBoy} alt="" />

            </div>
            <div className="second-sec-right">
                <h1>
              How PrepBytes Mentorship driven Personalised Learning works?</h1>

                <div className="content">
                    <div className="one">
                        <div className="left">
                            <h6>PERSONALISED LECTURES & WEEKLY PLAN</h6>
                            <div className="box">
                                <div className="lef">
                                    <div className="inner-box">
                                        <img src={four} alt="" />
                                    </div>
                                </div>
                                <div className="cont">
                                Get learning videos & weekly plan based on your coding skills
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={rightarrow} alt="" />
                        </div>
                    </div>
                    <div className="one">
                    <div className="right">
                            <img src={leftarrow} alt="" />
                        </div>
                        <div className="left">
                            <h6>PERSONALISED CODING ASSIGNMENTS</h6>
                            <div className="box">
                                <div className="lef">
                                    <div className="inner-box">
                                        <img src={three} alt="" />
                                    </div>
                                </div>
                                <div className="cont">
                                Practice coding questions that adapts based on your progress
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="one">
                        <div className="left">
                            <h6>DOUBT SOLVING BY CODING EXPERTS</h6>
                            <div className="box">
                                <div className="lef">
                                    <div className="inner-box">
                                        <img src={two} alt="" />
                                    </div>
                                </div>
                                <div className="cont">
                                Getting Stuck While Coding? Get all your doubts resolved.
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={rightarrow} alt="" />
                        </div>
                    </div>


                    <div className="one">
                    <div className="right">
                            <img src={leftarrow} alt="" />
                        </div>
                        <div className="left">
                            <h6>CODE LIVE WITH TOP CODERS</h6>
                            <div className="box">
                                <div className="lef">
                                    <div className="inner-box">
                                        <img src={one} alt="" />
                                    </div>
                                </div>
                                <div className="cont">
                                Topic wise Live Coding sessions with top rated coders
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="one">
                   <img src={achieve} alt="" />          
                    </div>
                </div>




            </div>

    </div>
  )
}

export default SecondSection