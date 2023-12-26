import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import yt from '../assets/images/yt.png'
import fb from '../assets/images/fb.png'
import inst from '../assets/images/inst.png'
import ld from '../assets/images/ld.png'
import chat  from "../assets/images/chatting.png"
import call  from "../assets/images/call.png"
import BottomFooter from './header/BottomFooter'



const AppFooter = () => {
  const navigate =useNavigate()
  return (
 <>
   <div className="footer-main">
     <div className='footer'>

<div className="first section ">
<div className="sec-1">
  <h3>FOLLOW US</h3>
  <div className="contact">
    <div className="social">
      <img src={fb} alt="" />
      <img src={inst} alt="" />
      <img src={ld} alt="" />
      <img src={yt} alt="" />

    </div>
  </div>
  </div>
  <div className="sec-1">
  <h3>CONTACT US</h3>
  <div className="contact">
  <div className="social">
      <img src={call} alt="" /> <span>+91-7969 0021 11</span>

    </div>
    <div className="social">
      <img src={chat} alt="" /> <span>support@prepbytes.com</span>

    </div>
  
  </div>
  </div>
</div>
<div className="second section">
<div className="sec-1">
<h3> LATEST ARTICLES</h3>
<p>find Command in Linux with Examples
awk Command in unix/linux with Examples
grep Command in unix linux
ps Command in Linux with Examples
curl Command in Linux with Examples</p>

  
</div>
<div className="sec-1">
<h3> POPULAR ARTICLES</h3>
<p>ifconfig Command in Linux with Examples
Touch Command in Linux with Examples
screen Command in Linux with Examples
ssh Command in Linux with Examples
netstat command linux</p>
</div>
</div>
<div className="third section">
<h3> QUICK LINKS</h3>
<div className="links">
<NavLink to='/mock-tests'> Mock Tests</NavLink>
<NavLink to='/preperation-videos'> Video Turorial</NavLink>
<NavLink to='/master-competitive-programming'> Master Competitive Programming</NavLink>
<NavLink to='/full-stack-developer'> Full Stack Program</NavLink>
<NavLink to='/elevation-academy'> Elevation Academy</NavLink>
<NavLink to='/project/html'> Project</NavLink>




</div>



  
</div>




</div>
<div className="footer-bt">
  <hr />
  <div className="ft-bt d-flex justify-content-between">
 <span> Copyright&copy;2024</span>
  <div className="d-flex  gap-15px">
 <span>Privacy Policy</span>
 <span>Refund of Policy</span>
 <span>Term of Use</span>

  </div>
  </div>

</div>
   </div>

<BottomFooter/>
 
 
 </>
  )
}

export default AppFooter