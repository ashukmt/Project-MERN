import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
// import Referal from './ReferalComp/Referal'
import EventDetails from './Events/EventDetails'
import Referal from './ReferalComp/referal'
import Register from './Events/Register'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/event/getevents/:id' element={<EventDetails/>} />
        <Route path='/event/registerevents/:id' element={<Register/>} />
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
        <Route path='/fees' element={<Referal/>} />
        
    </Routes>
  )
}

export default AllRoutes