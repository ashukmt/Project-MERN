import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
import Referal from './ReferalComp/Referal'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
        <Route path='/fees' element={<Referal/>} />
    </Routes>
  )
}

export default AllRoutes