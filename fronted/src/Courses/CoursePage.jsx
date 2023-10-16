import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CourseComp from './CourseComp'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../redux/courseReducer/action'


const CoursePage = () => {
    const courses = useSelector(state=>state.course.courses)
    
    return (
        <>
            <Image w='100vw' position={'absolute'} zIndex={'-1'} src='utils/bg.png' />
            <Box className='text-center xs:px-4 lg:px-0 mb-10'>
                <Heading p='5' size='2xl'>Our Courses</Heading>
                <Text>Become a Software Developer, Testing Engineer or a Data Analyst at ZERO upfront fees.</Text>
                <div className="mx-auto mt-12 flex flex-wrap !justify-center md:gap-x-[32px] max-w-lg gap-y-[48px] lg:max-w-[1440px] px-0">
                    {
                        courses?.map((course,i)=>{
                            return <CourseComp {...course} key={i} />
                        })
                    }
                </div>
            </Box>
        </>
    )
}

export default CoursePage
