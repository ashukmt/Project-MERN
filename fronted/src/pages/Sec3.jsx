import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import CourseComp from '../Courses/CourseComp'
import { useSelector } from 'react-redux'

const Sec3 = () => {
    const courses = useSelector(state=>state.course.data)
    return (
        <>
       
            <Box className='text-center' py='5%' px='7%'>
                <Heading p='5' size='2xl'>Our Courses</Heading>
                <Text className='font-bold text-xl'>Practice-Based Learning Tracks, <span className='text-red-700'>Supercharged by AI</span></Text>
                <Flex className="mx-auto mt-12 flex flex-wrap !justify-center md:gap-x-[32px] max-w-lg gap-y-[48px] lg:max-w-[1440px] px-0">
                    {
                        courses?.map((course,i)=>{
                            return <CourseComp {...course} key={i} />
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}

export default Sec3
