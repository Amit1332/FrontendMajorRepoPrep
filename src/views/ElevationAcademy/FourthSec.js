import React, { useState } from 'react'

const FourthSec = () => {
    const [state,setState] =useState(0)
  return (
    <div className='fourth-sec'>
            <h1>Program Syllabus</h1>
            <p>Learn from the best and be prepared to crack full stack developer jobs</p>



            <div className="cards">
                <div className="card">
                    <div className="label">1st Week - 4th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">1</div>
                                </div>
                                <h2>Frontend Development Basics</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===1?setState(0):setState(1)}>
                                  {
                                    state===1 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===1 ? 
                            <div className="content">
                            <div className="box-tit">
                            Frontend Development Basics - HTML, CSS AND Github

                            </div>
                            <div className="topic">
                                <div className="one">How websites work</div>
                                <div className="one">Web Development Overview - Advantages</div>
                                <div className="one">HTML Introduction</div>
                                <div className="one">Structure of Webpage</div>
                                <div className="one">HTML Tags</div>
                                <div className="one">Texts, Images, Videos</div>
                                <div className="one">Links, Anchor tags</div>
                                <div className="one">HTML Divs</div>
                                <div className="one">Github</div>
                                <div className="one">CSS Introduction</div>
                                <div className="one">Inline vs Internal vs External styling</div>
                                <div className="one">CSS Font Styling, background, margin, padding</div>
                                <div className="one">Styling Lists, Tables, Forms</div>
                                <div className="one">FontAwesome</div>
                                <div className="one">Transitionals, Transformations, Animations</div>
                                <div className="one">Styling button</div>
                                <div className="one">Tool tip, Box Sizing, Flex, Grid</div>



    

                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>




                <div className="card">
                    <div className="label">5th Week - 8th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">2</div>
                                </div>
                                <h2>Javascript Fundamentals & Problem Solving</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===2?setState(0):setState(2)}>
                                  {
                                    state===2 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===2 ? 
                            <div className="content">
                            <div className="box-tit">
                            Javascript Fundamentals & Problem Solving

                            </div>
                            <div className="topic">
                                <div className="one">Introduction to JavaScript</div>
                                <div className="one">Variables, scoping, Data type</div>
                                <div className="one">Logic Building</div>
                                <div className="one">Strings and Numbers</div>
                                <div className="one">Operators and loops</div>
                                <div className="one">Functions</div>
                                <div className="one">Arrays and Objects</div>
                                <div className="one">Data Structures - Stack, Queues, Maps, Sets</div>
                                <div className="one">Searching and Sorting Algorithms</div>
                                <div className="one">Problem Solving</div>

                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>







                <div className="card">
                    <div className="label">9th Week - 12th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">3</div>
                                </div>
                                <h2>Building Websites using JS</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===3?setState(0):setState(3)}>
                                  {
                                    state===3 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===3 ? 
                            <div className="content">
                            <div className="box-tit">
                            Building Websites using JS

                            </div>
                            <div className="topic">
                                <div className="one">Understanding and working with DOM</div>
                                <div className="one">Modifying Website Elements with JS</div>
                                <div className="one">Developer tools in Browsers</div>
                                <div className="one">Prototypes</div>
                                <div className="one">Closures</div>
                                <div className="one">Browser Local Storage</div>
                                <div className="one">Jquery, Ajax</div>
                                <div className="one">Promises</div>
                                <div className="one">ES5 vs ES6 vs ES7</div>
                                <div className="one">Eventloop in Javascript</div>

                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>




                <div className="card">
                    <div className="label">13th Week - 16th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">4</div>
                                </div>
                                <h2>
React</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===4?setState(0):setState(4)}>
                                  {
                                    state===4 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===4 ? 
                            <div className="content">
                            <div className="box-tit">
                            React

                            </div>
                            <div className="topic">
                                <div className="one">React Intro</div>
                                <div className="one">Node installation</div>
                                <div className="one">Create an app using create-react-app</div>
                                <div className="one">Understanding basics of react app</div>
                                <div className="one">Understanding JSX</div>
                                <div className="one">Understanding virtual DOMS , Single page apps</div>
                                <div className="one">React Lifecycle</div>
                                <div className="one">States, class components vs functional components</div>
                                <div className="one">Event handling, props</div>
                                <div className="one">Building forms in React</div>
                                <div className="one">Routes</div>
                                <div className="one">Conditional Rendering</div>
                                <div className="one">Pure Components</div>
                                <div className="one">High order components</div>
                                <div className="one">Controlled vs Uncontrolled components</div>
                                <div className="one">React Hooks</div>
                                <div className="one">Redux</div>
                                <div className="one">Babel, Webpack</div>
                                <div className="one">Axios, Creating a mock server</div>
                                <div className="one">SASS overview</div>




                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>



                <div className="card">
                    <div className="label">17th Week - 19th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">5</div>
                                </div>
                                <h2>NodeJS</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===5?setState(0):setState(5)}>
                                  {
                                    state===5 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===5 ? 
                            <div className="content">
                            <div className="box-tit">
                            NodeJS

                            </div>
                            <div className="topic">
                                <div className="one">Creating a Simple Server</div>
                                <div className="one">Response types - HTML, JSON</div>
                                <div className="one">Routing</div>
                                <div className="one">Express Introduction</div>
                                <div className="one">Intergrate Frontend and Backend</div>
                                <div className="one">Express Params and Query String</div>
                                <div className="one">Express Middleware</div>
                                <div className="one">API Authentication</div>
                                <div className="one">JWT Token, Passport.js</div>
                                <div className="one">Socket Programming</div>

                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>




                <div className="card">
                    <div className="label">20th Week - 22nd Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">6</div>
                                </div>
                                <h2>Database</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===6?setState(0):setState(6)}>
                                  {
                                    state===6 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===6 ? 
                            <div className="content">
                            <div className="box-tit">
                            Database

                            </div>
                            <div className="topic">
                                <div className="one">SQL vs NOSQL</div>
                                <div className="one">MongoDB/ DynamoDB overview</div>
                                <div className="one">Installing MongoDB</div>
                                <div className="one">Connecting and Inserting Data</div>
                                <div className="one">Deleting and updating Data</div>
                                <div className="one">Understanding CRUD operations</div>
                                <div className="one">Understanding Firebase</div>
                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>


                <div className="card">
                    <div className="label">23rd - 24th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">7</div>
                                </div>
                                <h2>Code Review & Deployment</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===7?setState(0):setState(7)}>
                                  {
                                    state===7 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===7 ? 
                            <div className="content">
                            <div className="box-tit">
                            Code Review & Deployment

                            </div>
                            <div className="topic">
                                <div className="one">Deploy using Netlify and Github</div>
                                <div className="one">Get code review by Software Developers</div>
                                <div className="one">Deploy all the projects</div>
                              
                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>





                <div className="card">
                    <div className="label">25th - 28th Week</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">8</div>
                                </div>
                                <h2>Interview Preparation & Major Projects</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===8?setState(0):setState(8)}>
                                  {
                                    state===8 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===8 ? 
                            <div className="content">
                            <div className="box-tit">
                            Interview Preparation & Major Projects

                            </div>
                            <div className="topic">
                                <div className="one">HTML Blog Page</div>
                                <div className="one">ToDo App</div>
                                <div className="one">Reminder Clock App</div>
                                <div className="one">React Blog Web App</div>
                                <div className="one">Portfolio Building</div>
                                <div className="one">Ecommerce Web App(Major Project)</div>
                                <div className="one">Online Assessement Platform(Major Project)</div>
                                <div className="one">Resume Building</div>


                              
                            </div>
                        </div>
                        :''
                        }
                    </div>
                </div>



                <div className="card">
                    <div className="label">28th Week Onwards</div>
                    <div className="card-body">
                        <div className="box">
                            <div className="left">
                                <div className="bxx">
                                    <div className="innbxx">9</div>
                                </div>
                                <h2>Interviews Opportunities</h2>
                            </div>

                            <div className="right">
                                <div className="button" onClick={()=>state===9?setState(0):setState(9)}>
                                  {
                                    state===9 ?
                                    <i class="ri-subtract-line"></i>
                                    :
                                    <i class="ri-add-line"></i>
                                  }
                                    </div>
                                
                            </div>
                        </div>
                        {
                            state===9 ? 
                            <div className="content">
                            <div className="box-tit">
                            Interviews Opportunities with companies

                            </div>
                           
                        </div>
                        :''
                        }
                    </div>
                </div>


            </div>



    </div>
  )
}

export default FourthSec