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
        <Route path='/fees' element={<Referal/>} />
        <Route path='/msat' element={<MsatDetails />} />
    </Routes>
  )
}

export default AllRoutes