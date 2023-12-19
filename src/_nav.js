import React from "react"


const nav = [
 {
    name:'Study Material',
    inner:[
        {
            name:'Mock Test',
            to : '/mock-tests'
        },
        {
            name:'Video Tutorial',
            to : '/preperation-videos'
        }
    ]
 },
 {
    name:'Courses & Program',
    inner:[
        {
            name:'Master Competitive Program',
            to : '/master-competitive-programming'
        },
        {
            name:'full Stack Program',
            to : '/full-stack-developer'
        }
    ]
 },

 {
    name:'Elevation Academy',
    to:'/elevation-academy'
   
 },

 {
    name:'Project',
    inner:[
        {
            name:'Html',
            to : '/project/html'
        },
        {
            name:'Css',
            to : '/project/css'
        },
        {
            name:'Javascript',
            to : '/project/javascript'
        },
        {
            name:'React Js',
            to : '/project/react'
        }, {
            name:'Node Js',
            to : '/project/nodejs'
        }, {
            name:'Mongodb',
            to : '/project/mongodb'
        }
    ]
   
 },

]

export default nav