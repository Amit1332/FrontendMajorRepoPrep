import React from 'react'
import Slider from "react-slick";
import per1 from '../../../assets/images/per-1.svg'
import shivam from '../../../assets/images/shivam.svg'
import shivani from '../../../assets/images/shivani.svg'
import abhishek from '../../../assets/images/abhishek.svg'


import { PrevArrow, NextArrow } from '../Master/Arrow';


const Testmonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          },
          {
            breakpoint: 850,
            settings: {
              arrows:false,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 540,
            settings: {
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      };
  return (
  <div className="master-stack ">
      <div className='testimonial'>
        <p>Testimonials</p>
    <h1>Our Students Speaks</h1>
    <Slider {...settings}>
 <div className="cards">
 <div className='card'>
  <div className="card-img">
  <img className="per" src={shivani} alt="" />
  <h3>Shivani Ravi</h3>
  </div>

    <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

  
   
  </div>
 </div>
 <div className="cards">
 <div className='card'>
  <div className="card-img">
  <img className="per" src={abhishek} alt="" />
  <h3>Abhishek Kumar</h3>
  </div>

    <p>LEcture up to the mark,concepts are crystal clear to the mentors and th best part abouth the course is weekly assigments were provided to us which were not just good but ensuring that we were understanding the concepts </p>

  
   
  </div>
 </div>
 <div className="cards">
 <div className='card'>
  <div className="card-img">
  <img className="per" src={per1} alt="" />

  <h3>Nikhil</h3>
  </div>

    <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

   
   
  </div>
 </div>
 <div className="cards">
 <div className='card'>
  <div className="card-img">
  <img className="per" src={shivam} alt="" />

  <h3>Shivam Gupta</h3>
  </div>

    <p>Prepbytes have helped me inproved analytical skills and helped me in all the wys possible my understanding of quotes and logic has also increased .the best think about prepbytes are the lectures it is so simple and everything is explained with examples</p>

 
   
  </div>
 </div>
  
</Slider>


</div>
  </div>
  )
}

export default Testmonial