import React from 'react'

const EnrollBatch = () => {
  return (
    <div className='enroll-batch'>
        <div className="left">
            <p>SELECT BATCH</p>

        </div>
       <div className="right">
       <div className="batch">
            <div className="card">
                <h3>1st May</h3>
                <p>Enrollment Started</p>

            </div>
            <div className="card">
                <h3>15th May</h3>
                <p>Enrollment Started</p>

            </div>
           

        </div>
        <div className="price-tag">
                <h1> ₹ 25000</h1>
                <div className="button">
                    Enroll Now
                </div>
        </div>
       </div>
       

    </div>
  )
}

export default EnrollBatch