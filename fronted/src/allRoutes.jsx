import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:title' element={<CourseDetail />} />
    </Routes>
  )
}

export default AllRoutes