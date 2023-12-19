import React from 'react'
import image1 from '../../assets/images/image1.svg'
import brand1 from '../../assets/images/brand1.webp'
import brand2 from '../../assets/images/brand2.webp'
import brand3 from '../../assets/images/brand3.webp'
import brand4 from '../../assets/images/brand4.webp'



const FirstSection = () => {
  return (
    <div className='first-section'>
            <div className="first-sec-top">
                <div className="left">
                 <div className="content">
                     <h1 className='color-F78077'>Start your journey of success</h1>
                     <h1>Personalised Coding Programs</h1>
                        <h1>to make coding easier for you</h1>
                        <h2 className='color-F78077'>Want to know how PrepBytes can help you?</h2>    

                        <div className="know-more">
                            Know More
                        </div>
             </div>

                </div>
                <div className="right">
                    <img src={image1 } alt="" />
                </div>

            </div>
            <div className="first-sec-bot">
            <div className="box-img">
                    <img src={brand4} alt="" />
                </div>
                <div className="box-img">
                    <img src={brand3} alt="" />
                </div>
                <div className="box-img">
                    <img src={brand2} alt="" />
                </div>
                <div className="box-img">
                    <img src={brand1} alt="" />
                </div>
              
              
               
            </div>


    </div>
  )
}

export default FirstSection