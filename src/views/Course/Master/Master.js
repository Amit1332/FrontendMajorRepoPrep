import React from 'react'
import FirstSec from './FirstSec'
import SecondSec from './SecondSec'
import EnrollBatch from './EnrollBatch'
import ThirdSec from './ThirdSec'

const Master = () => {
  return (
    <div className='container master-stack'>
      <div className="master-prg">
      <FirstSec/>
        <SecondSec/>
      </div>
       
       
        <EnrollBatch/>
        <ThirdSec/>

    </div>
     
  )
}

export default Master