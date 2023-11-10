import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
import EventDetails from './Events/EventDetails'
import Referal from './ReferalComp/referal'
import MsatDetails from './Courses/MsatDetails'
import { animateScroll } from 'react-scroll'
import Register from './Events/Register'
import LeaderBr_Invite_Referal from './ReferalComp/LeaderBr&Invite&Referal'
import StartMsat from './Courses/StartMsat'
import Login from './components/Login'
import MsatConfirm from './Courses/MsatConfirm'

const AllRoutes = () => {
  useEffect(()=>{
    animateScroll.scrollToTop({smooth:true})
  },[])
  return (
    <Routes>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:title' element={<CourseDetail />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/event/getevents/:id' element={<EventDetails/>} />
        <Route path='/event/registerevents/:id' element={<Register/>} />
        <Route path='/Referal' element={<Referal/>} />
        <Route path='/msat' element={<MsatDetails />} />
        <Route path='/msat/confirm' element={<MsatConfirm />} />
        <Route path='/msat/test' element={<StartMsat />} />
        <Route path='/Profile' element={<LeaderBr_Invite_Referal/>}/>
        <Route path='/sign' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes