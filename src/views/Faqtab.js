import React, { useState } from 'react'

const Faqtab = ({data}) => {
    const [state,setState]=useState(0)

  return (
    <>

    {
        data.map((elem,index)=>{
            return(
                <>


<div className="faqtab">
         <div className={`tab ${state===index+1?'card-body-full-stack-third-sec-bg':''}`} onClick={()=>state===index+1?setState(0):setState(index+1)}>
            <div className="txt">{elem.first}</div>
           {
            state===index+1?
            <i class="ri-subtract-line"></i>
 :


            <i class="ri-add-line"></i>
           }
         </div>
         {
            state===index+1 ?
            <div className="cont">
            <p>{elem.inner}</p>
         </div>
         :'' 
         }


        </div>
                </>
            )
        })
    }

       
    </>
  )
}

export default Faqtab