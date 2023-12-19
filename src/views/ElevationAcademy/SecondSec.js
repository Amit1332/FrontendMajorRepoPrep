import React from 'react'
import img4 from "../../assets/images/eleimg4.webp"
import img5 from "../../assets/images/eleimg5.webp"
import img6 from "../../assets/images/eleimg6.webp"
// import img7 from "../../assets/images/eleimg7.webp"
// import img8 from "../../assets/images/eleimg8.webp"



const SecondSec = () => {
  return (
    <div className='second-sec'>
        <h1>How will you reach to your dream Job?</h1>


<div className="gg">
        <div className="cards">
            <div className="left">
                    <div className="vox">1</div>
                    <p>Application & Shortlisting</p>
            </div>
            <div className="line"></div>
            <div className="right">
                <p>Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)</p>
                <img src={img4} alt="" />
            </div>

        </div>


        <div className="cards">
            <div className="left">
                    <div className="vox">2</div>
                    <p>Attend Free Webinar</p>
            </div>
            <div className="line"></div>
            <div className="right">
                <p>Go through the free classes and learn the important concepts while understanding how the program unfolds.
</p>
                <img src={img5} alt="" />
            </div>

        </div>



        <div className="cards">
            <div className="left">
                    <div className="vox">3</div>
                    <p>Batch Commencement</p>
            </div>
            <div className="line"></div>
            <div className="right">
                <p>Embark on your journey of success once you receive the offer letter for successful enrolment.</p>
                <img src={img6} alt="" />
            </div>

        </div>



        <div className="cards">
            <div className="left">
                    <div className="vox">4</div>
                    <p>7 Months Program</p>
            </div>
            <div className="line"></div>
            <div className="right">
                <p>You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.</p>
                <img src={img4} alt="" />
            </div>

        </div>


        <div className="cards">
            <div className="left">
                    <div className="vox">5</div>
                    <p>Guaranteed Placement</p>
            </div>
            <div className="line"></div>
            <div className="right">
                <p>The program comes with interview opportunities and a placement guarantee of minimum 5 LPA.</p>
                <img src={img4} alt="" />
            </div>

        </div>
        </div>

    </div>
  )
}

export default SecondSec