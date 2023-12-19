import React from 'react'

const Title = ({title1,title2}) => {
  return (
    <div className='title'>

        <h1>{title1}</h1>
        <div className="subtitle">
            <div className="line"></div>
            <h3>{title2}</h3>
            <div className="line"></div>

        </div>

    </div>
  )
}

export default Title