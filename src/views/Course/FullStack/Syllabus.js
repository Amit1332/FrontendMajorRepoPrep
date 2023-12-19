import React, { useState } from 'react'
import NinthSec from './NinthSec'

const Syllabus = () => {
    const [state,setState]=useState(0)
  return (
    <div className='syllabus'>

            <div className="download">
            <h1>Program Syllabus & Projects</h1>
            <div className="buttonx">Dowload Syllabus</div>
            </div>
            <p>We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.</p>
        


        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>Web Development Basics - HTML, CSS, BootStrap</h2>
                    <div className="week">week1-2</div>
                </div>
                <p>Get to learn how websites work. Start your web development journey with the basics of HTML and learn how to create impressive websites using HTML, CSS, and Bootstrap.</p>
            </div>
            <div className={`bottom ${state===1 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(1): setState(0)}>{state===1? 'Hide' :'view Details'}</div>
            </div>
          {
            state===1 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> How websites work</p>
            <p><i class="ri-arrow-right-s-line"></i> Web Development Overview - Advantages</p>
            <p><i class="ri-arrow-right-s-line"></i> HTML Introduction</p>
            <p><i class="ri-arrow-right-s-line"></i> Structure of Webpage</p>
            <p><i class="ri-arrow-right-s-line"></i> HTML Tags</p>
            <p><i class="ri-arrow-right-s-line"></i> Links, Anchor tags</p>
            <p><i class="ri-arrow-right-s-line"></i> HTML Divs</p>
            <p><i class="ri-arrow-right-s-line"></i> CSS Introduction</p>
            <p><i class="ri-arrow-right-s-line"></i> Inline vs Internal vs External styling</p>
            <p><i class="ri-arrow-right-s-line"></i> CSS Display</p>
            <p><i class="ri-arrow-right-s-line"></i> CSS Font Styling, background, margin, padding</p>
            <p><i class="ri-arrow-right-s-line"></i> FontAwesome</p>
            <p><i class="ri-arrow-right-s-line"></i> Transitionals, Transformations, Animations</p>
            <p><i class="ri-arrow-right-s-line"></i> Styling button</p>
            <p><i class="ri-arrow-right-s-line"></i> Tool tip, Box Sizing, Flex, Grid</p>
            <p><i class="ri-arrow-right-s-line"></i> Bootstrap containers</p>
            <p><i class="ri-arrow-right-s-line"></i> Bootstrap Alerts, Buttons</p>
            <p><i class="ri-arrow-right-s-line"></i> Bootstrap Spinners, Cards, Pagination, Drop Down</p>
            <p><i class="ri-arrow-right-s-line"></i> Bootstrap Corousel</p>







        </div>
        :''
          }
        </div>


        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>Javascript</h2>
                    <div className="week">week3-4</div>
                </div>
                <p>Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and complete Javascript..</p>
            </div>
            <div className={`bottom ${state===1 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(2): setState(0)}>{state===2? 'Hide' :'view Details'}</div>
            </div>
          {
            state===2 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> Introduction to Javascript</p>
            <p><i class="ri-arrow-right-s-line"></i> Variables, scoping, Data type</p>
            <p><i class="ri-arrow-right-s-line"></i> Strings and Numbers</p>
            <p><i class="ri-arrow-right-s-line"></i> Operators and loops</p>
            <p><i class="ri-arrow-right-s-line"></i> Functions</p>
            <p><i class="ri-arrow-right-s-line"></i> Arrays and Objects</p>
            <p><i class="ri-arrow-right-s-line"></i> Data Structures - List, Stack, Queues, Maps</p>
            <p><i class="ri-arrow-right-s-line"></i> Hashing</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding and working with DOM</p>
            <p><i class="ri-arrow-right-s-line"></i> Developer tools in Browsers</p>
            <p><i class="ri-arrow-right-s-line"></i> Prototypes</p>
            <p><i class="ri-arrow-right-s-line"></i> Closures</p>
            <p><i class="ri-arrow-right-s-line"></i> Browser Local Storage</p>
            <p><i class="ri-arrow-right-s-line"></i> Jquery, Ajax</p>
            <p><i class="ri-arrow-right-s-line"></i> Promises</p>
            <p><i class="ri-arrow-right-s-line"></i> ES5 vs ES6 vs ES7</p>
            <p><i class="ri-arrow-right-s-line"></i> Eventloop in Javascript</p>
          






        </div>
        :''
          }
        </div>



        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>ReactJS</h2>
                    <div className="week">week5-7</div>
                </div>
                <p>Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React is better, and don't just learn, build amazing web apps using react.</p>
            </div>
            <div className={`bottom ${state===3 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(3): setState(0)}>{state===3? 'Hide' :'view Details'}</div>
            </div>
          {
            state===3 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> React Intro</p>
            <p><i class="ri-arrow-right-s-line"></i> Node installation</p>
            <p><i class="ri-arrow-right-s-line"></i> Create an app using create-react-app</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding basics of react app</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding JSX</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding virtual DOMS , Single page apps</p>
            <p><i class="ri-arrow-right-s-line"></i> React Lifecycle</p>
            <p><i class="ri-arrow-right-s-line"></i> States, class components vs functional components</p>
            <p><i class="ri-arrow-right-s-line"></i> Event handling, props</p>
            <p><i class="ri-arrow-right-s-line"></i> Building forms in React</p>
            <p><i class="ri-arrow-right-s-line"></i> Routes</p>
            <p><i class="ri-arrow-right-s-line"></i> Conditional Rendering</p>
            <p><i class="ri-arrow-right-s-line"></i> Pure Components</p>
            <p><i class="ri-arrow-right-s-line"></i> High order components</p>
            <p><i class="ri-arrow-right-s-line"></i> Controlled vs Uncontrolled components</p>
            <p><i class="ri-arrow-right-s-line"></i> Redux</p>
            <p><i class="ri-arrow-right-s-line"></i> Babel, Webpack</p>
            <p><i class="ri-arrow-right-s-line"></i> Axios, Creating a mock server</p>
            <p><i class="ri-arrow-right-s-line"></i> SASS overview</p>

          






        </div>
        :''
          }
        </div>




        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>NodeJs</h2>
                    <div className="week">week7-9</div>
                </div>
                <p>Always thinking about how to build servers? Its time to build one. Learn about express, security, authentication, restricting routes, hashing passwords, and JWT’s, and much more.</p>
            </div>
            <div className={`bottom ${state===4 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(4): setState(0)}>{state===4? 'Hide' :'view Details'}</div>
            </div>
          {
            state===4 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> Creating a Simple Server</p>
            <p><i class="ri-arrow-right-s-line"></i> Response types - HTML, JSON</p>
            <p><i class="ri-arrow-right-s-line"></i> Routing</p>
            <p><i class="ri-arrow-right-s-line"></i> Express Introduction</p>
            <p><i class="ri-arrow-right-s-line"></i> Intergrate Frontend and Backend</p>
            <p><i class="ri-arrow-right-s-line"></i> Express Params and Query String</p>
            <p><i class="ri-arrow-right-s-line"></i> Express Middleware </p>
            <p><i class="ri-arrow-right-s-line"></i> API Authentication</p>
            <p><i class="ri-arrow-right-s-line"></i> JWT Token, Passport.js</p>
            <p><i class="ri-arrow-right-s-line"></i> Socket Programming</p>
        </div>
        :''
          }
        </div>

        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>Databases - MongoDB</h2>
                    <div className="week">week10</div>
                </div>
                <p>Want to know how companies manage all their Data and how on a click of a button all the data is there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB.</p>
            </div>
            <div className={`bottom ${state===5 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(5): setState(0)}>{state===5? 'Hide' :'view Details'}</div>
            </div>
          {
            state===5 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> SQL vs NOSQL</p>
            <p><i class="ri-arrow-right-s-line"></i> MongoDB overview</p>
            <p><i class="ri-arrow-right-s-line"></i> Installing MongoDB</p>
            <p><i class="ri-arrow-right-s-line"></i> Connecting and Inserting Data</p>
            <p><i class="ri-arrow-right-s-line"></i> Deleting and updating Data</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding CRUD operations</p>
        </div>
        :''
          }
        </div>



        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>Code Review + Deployment</h2>
                    <div className="week">week11</div>
                </div>
                <p>Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the world.</p>
            </div>
            <div className={`bottom ${state===6 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(6): setState(0)}>{state===6? 'Hide' :'view Details'}</div>
            </div>
          {
            state===6 ?
            <div className="conent">
            <p><i class="ri-arrow-right-s-line"></i> Tools for Code review</p>
            <p><i class="ri-arrow-right-s-line"></i> Understand Review Board</p>
            <p><i class="ri-arrow-right-s-line"></i> Understanding Firebase</p>
            <p><i class="ri-arrow-right-s-line"></i> Github</p>
            <p><i class="ri-arrow-right-s-line"></i> Deploy using Netlify and Github</p>
            <p><i class="ri-arrow-right-s-line"></i> Get code review by Software Developers</p>
            <p><i class="ri-arrow-right-s-line"></i> Deploy all the projects</p>

        </div>
        :''
          }
        </div>


        <div className="card-syllabus">
            <div className="top">
                <div className="txt">
                    <h2>Projects</h2>
                    <div className="week">week3-16</div>
                </div>
                <p>You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.</p>
            </div>
            <div className={`bottom ${state===7 ? 'card-body-full-stack-third-sec-bg':''}`}>
                <h2>Course Content</h2>
                <div className='button' onClick={()=>state===0 ? setState(7): setState(0)}>{state===7? 'Hide' :'view Details'}</div>
            </div>
          {
            state===7 ?
            <NinthSec/>
        :''
          }
        </div>

    </div>
  )
}

export default Syllabus