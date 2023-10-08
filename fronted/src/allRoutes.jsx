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
        <Route path='/events' element={<Events/>}/>
        <Route path='/events/:id' element={<EventDetails/>} />
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
    </Routes>
  )
}

export default AllRoutes