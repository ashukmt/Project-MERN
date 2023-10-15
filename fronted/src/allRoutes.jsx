import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
import LoginAdmin from './AdminPanel/LoginAdmin'
// import Referal from './ReferalComp/Referal'
import EventDetails from './Events/EventDetails'
import Referal from './ReferalComp/referal'
import Cources from './AdminPanel/pages/Cources'
import Common from './AdminPanel/pages/Common'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/event/getevents/:id' element={<EventDetails/>} />
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/fees' element={<Referal/>} />
        <Route path='/cources' element={<Common/>}/>
    </Routes>
  )
}

export default AllRoutes