import React from 'react'
import { Route, Routes } from 'react-router'
import CoursePage from './Courses/CoursePage'
import CourseDetail from './Courses/CourseDetail'
import Events from './Events/Events'
import Homes from './components/Homes'
<<<<<<< HEAD
import LoginAdmin from './AdminPanel/LoginAdmin'
=======
// import Referal from './ReferalComp/Referal'
>>>>>>> 51f3b14659ab4661912f259e12fdcb3f4c670451
import EventDetails from './Events/EventDetails'
import Referal from './ReferalComp/referal'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/event/getevents/:id' element={<EventDetails/>} />
        <Route path='/'element={<Homes/>}/>
        <Route path='/courses/:idx' element={<CourseDetail />} />
<<<<<<< HEAD
        <Route path='/admin' element={<LoginAdmin/>}/>
=======
        <Route path='/fees' element={<Referal/>} />
>>>>>>> 51f3b14659ab4661912f259e12fdcb3f4c670451
    </Routes>
  )
}

export default AllRoutes