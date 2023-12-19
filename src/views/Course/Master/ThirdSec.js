import React from 'react'
import Slider from "react-slick";
import double from '../../../assets/images/double.webp'
import quote from '../../../assets/images/Quote2.webp'
import per1 from '../../../assets/images/per-1.svg'
import shivam from '../../../assets/images/shivam.svg'
import shivani from '../../../assets/images/shivani.svg'
import abhishek from '../../../assets/images/abhishek.svg'
import { PrevArrow, NextArrow } from './Arrow';
import star from '../../../assets/images/star.webp'
import enroll1 from '../../../assets/images/num1.webp'
import enroll2 from '../../../assets/images/num2.webp'
import enroll3 from '../../../assets/images/sum3.webp'
import enroll4 from '../../../assets/images/num4.webp'


const ThirdSec = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

      };
  return (
    <div className='third-sec'>
        <h1>This Might Be You!</h1>
        <Slider {...settings}>
      <div className='card'>
      <div className="card-img">
      <img src={double} alt="" />
      <h3>Shivani Ravi</h3>
      </div>

        <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

       <div className="quotems">
        <img className="per" src={shivani} alt="" />

       <img src={quote} alt="" />
       </div>
       
      </div>
      <div className='card'>
      <div className="card-img">
      <img src={double} alt="" />
      <h3>Abhishek Kumar</h3>
      </div>

        <p>LEcture up to the mark,concepts are crystal clear to the mentors and th best part abouth the course is weekly assigments were provided to us which were not just good but ensuring that we were understanding the concepts </p>

       <div className="quotems">
        <img className="per" src={abhishek} alt="" />

       <img src={quote} alt="" />
       </div>
       
      </div>
      <div className='card'>
      <div className="card-img">
      <img src={double} alt="" />
      <h3>Nikhil</h3>
      </div>

        <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

       <div className="quotems">
        <img className="per" src={per1} alt="" />

       <img src={quote} alt="" />
       </div>
       
      </div>
      <div className='card'>
      <div className="card-img">
      <img src={double} alt="" />
      <h3>Shivam Gupta</h3>
      </div>

        <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

       <div className="quotems">
        <img className="per" src={shivam} alt="" />

       <img src={quote} alt="" />
       </div>
       
      </div>
      
    </Slider>


    <h1>By The End Of This Course, You Will Be Able To</h1>


   <div className="bot">
    <img src={star} alt="" />
   <div className="bottom">
            <div className="note-card">
               <div className="card-img">
               <img src={enroll1} alt="" />
               </div>
                <div className="txt">4 star and above in CodeChef</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll2} alt="" />
               </div>
                <div className="txt">Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll3} alt="" />
               </div>
                <div className="txt">
                Candidate master and above in CodeForces</div>
            </div>
            <div className="note-card">
            <div className="card-img">
               <img src={enroll4} alt="" />
               </div>
                <div className="txt">Get certificate on course completion</div>
            </div>

        </div>
   </div>
    </div>
  )
}

export default ThirdSec