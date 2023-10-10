import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
import EventDetails from './Events/EventDetails'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:title' element={<CourseDetail />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/event/getevents/:id' element={<EventDetails/>} />
    </Routes>
  )
}

export default AllRoutes