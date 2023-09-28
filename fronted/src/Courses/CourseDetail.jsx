import React from 'react'
import { useSelector } from 'react-redux'

const CourseDetail = () => {
    const courses = useSelector(state=>state.course.courses)
    return (
        <div>

        </div>
    )
}

export default CourseDetail