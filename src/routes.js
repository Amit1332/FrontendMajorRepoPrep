import React from "react"

const Home  = React.lazy(()=>import("./views/Home/Home"))
const MockTest = React.lazy(()=>import("./views/StudyMaterial/MockTest/MockTest"))
const VideoTutorial = React.lazy(()=>import("./views/StudyMaterial/VideoTutorial/VideoTutorial"))
const Login = React.lazy(()=>import("./views/pages/Login"))
const Master = React.lazy(()=>import("./views/Course/Master/Master"))
const FullStack = React.lazy(()=>import("./views/Course/FullStack/FullStack"))
const Elevation = React.lazy(()=>import("./views/ElevationAcademy/ElevationAcademy"))
const Dashboard = React.lazy(()=>import("./views/Dashboard"))
const PaymentSuccess = React.lazy(()=>import("./Payment/PaymentSuccess"))




const routes = [
  {path:"/", exact:true, name:'Home',element:Home},
  {path:"/dashboard", exact:true, name:'Dashboard',element:Dashboard},
  {path:"/login", exact:true, name:'Login',element:Login},
  {path:"/mock-tests", exact:true,name:'Mock Test',element:MockTest},
  {path:"/preperation-videos",exact:true, name:'Video Turotials',element:VideoTutorial},
  {path:"/master-competitive-programming",exact:true, name:'Master Competitive Program',element:Master},
  {path:"/full-stack-developer", exact:true, name:'Full Stack Program',element:FullStack},
  {path:"/elevation-academy",exact:true, name:'elevation Academy',element:Elevation},

 




]


export default routes