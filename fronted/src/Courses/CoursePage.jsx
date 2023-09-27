import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import CourseComp from './CourseComp'

const CoursePage = () => {
    const courses = [
        {
            title: "Full Stack Web Development",
            opportunities: "Full Stack Developer, Software Engineer & much more.",
            duration: 30,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png"
        },
        {
            title: "Backend Development",
            opportunities: "Backend Web Developer, API developer & much more.",
            duration: 35,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png"
        },
        {
            title: "Data Analytics",
            opportunities: "Data Engineer, Data Analyst, Machine Learning Engineer & much more.",
            duration: 25,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/data_07ee77a2da.png"
        },
        {
            title: "Mobile Development",
            opportunities: "Mobile App Developer & much more.",
            duration: 30,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_ab8f5bdbf6.png"
        },
        {
            title: "Become a Software Testing & Automation",
            opportunities: "QA Tester, Automation Engineer & much more.",
            duration: 25,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/testing_faf38ba965.png"
        },
    ]
    return (
        <>
            <Image w='100vw' position={'fixed'} zIndex={'-1'} src='utils/bg.png' />
            <Box className='text-center'>
                <Heading p='5' size='2xl'>Our Courses</Heading>
                <Text>Become a Software Developer, Testing Engineer or a Data Analyst at ZERO upfront fees.</Text>
                <SimpleGrid columns={3} spacing={'10'}>
                    {
                        courses?.map((course,i)=>{
                            return <CourseComp {...course} key={i} />
                        })
                    }
                </SimpleGrid>
            </Box>
        </>
    )
}

export default CoursePage
