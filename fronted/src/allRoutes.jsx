import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
    </Routes>
  )
}

export default AllRoutes