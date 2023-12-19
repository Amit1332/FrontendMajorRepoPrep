import React from 'react'
import courseimg from "../../../assets/images/course-img.png"

const SecondSec = () => {
  return (
    <div className='second-sec'>
        <div className="left">
            <h1>Languages & Tools you will learn</h1>
            <p>Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>

        </div>
        <div className="right">
            <img src={courseimg} alt="" />
        </div>

    </div>
  )
}

export default SecondSec