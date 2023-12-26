import React, { useRef } from 'react'
import FirstSec from './FirstSec'
import SecondSec from './SecondSec'
import EnrollBatch from './EnrollBatch'
import ThirdSec from './ThirdSec'

const Master = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='container master-stack'>
      <div className="master-prg">
      <FirstSec scrollff={scrollToSection}/>
        <SecondSec/>
      </div>
       
       
       <div ref={sectionRef}>
       <EnrollBatch/>
       </div>
        <ThirdSec/>

    </div>
     
  )
}

export default Master