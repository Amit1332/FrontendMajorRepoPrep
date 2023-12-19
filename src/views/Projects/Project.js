import React, { useState } from 'react'
import data from './data'
import { useNavigate } from 'react-router-dom'
import { AppFooter } from '../../components'

const Project = ({type}) => {
       const navigate =  useNavigate()
   const [state,setState]= useState(0)
   
  return (
    <div className='project-tab'>
        <div className="banner">
            <img src="/images/projectbanner.png" alt="" />
        </div>
        <div className="tab">
            <div className="button" style={{backgroundColor:`${type==="html"? 'white':''}`,color:`${type==="html"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/html')}>Html</div>
            <div className="button" style={{backgroundColor:`${type==="css"? 'white':''}`,color:`${type==="css"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/css')}>Css</div>
            <div className="button" style={{backgroundColor:`${type==="javascript"? 'white':''}`,color:`${type==="javascript"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/javascript')}>Javascript</div>
            <div className="button" style={{backgroundColor:`${type==="react"? 'white':''}`,color:`${type==="react"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/react')}>React</div>
            <div className="button" style={{backgroundColor:`${type==="nodejs"? 'white':''}`,color:`${type==="nodejs"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/nodejs')}>Nodjes</div>
            <div className="button" style={{backgroundColor:`${type==="mongodb"? 'white':''}`,color:`${type==="mongodb"? '#CF0EFF':''}`}} onClick={()=>navigate('/project/mongodb')}>Mongodb</div>

        </div>

        {
        data.filter((elem)=>elem.type===type).map((ele)=>{
            return(
                <>
                   <div className='project-sec'>
        <div className="left">

        {ele.project.map((item,index)=>{
            return(
                <>
                  <div>
          <h2>{index+1}. {item.name} - {type.toUpperCase()}</h2>
            <div className="gallery">
                <div className="left-inner">
                   {
                    item.images.map((img,index)=>{
                        return(
                            <>
                             <div className="card-img" onClick={()=>setState(index)}>
                    <img src={img} alt="" />
                    </div>
                            </>
                        )
                    })
                   }
                    
                </div>
                <div className="right-inner">
                    <img src={item.images[state]} alt="" />
                </div>

            </div>
            <div className="desc">
                <h3>Title - {item.title} - </h3>
                <p><h3>Description- </h3>{item.desc}</p>
            </div>


          </div>
                </>
            )
        })}

        </div>
        
        <div className="right">
                <h2>{type.toUpperCase()} Topics</h2>
           {
            ele.topics.map((elem)=>{
                return(
                    <>
                     <div className="card">
               {elem}

            </div>
                    </>
                )
            })
           }
            
        </div>

     

    </div>
                </>
            )
        })
      }

      <AppFooter/>
      
    </div>
  )
}

export default Project