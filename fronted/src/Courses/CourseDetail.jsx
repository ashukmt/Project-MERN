import { Badge, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const CourseDetail = () => {
    const courses = useSelector(state => state.course.courses)
    const { title } = useParams()
    const course = courses.filter((c) => c.title === title)[0]
    return (
        <>
            <Box bg='#6E71CC' className='relative overflow-hidden text-center p-2' h='300px' >
                <Box bg='#B7B8E5' className='hidden md:flex items-center justify-center w-[248px] h-[248px] pointer-events-none bg-white absolute top-[35%] rounded-[100%] right-[-2%] z-[0]'>
                    <Image className="max-h-[94px] max-w-[104px] w-full object-cover" src='https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png' />
                </Box>
                <Heading mt='60px' color='white'>Become a {title.split(" ").map(t => t[0].toUpperCase() + t.substring(1)).join(" ")}</Heading>
                <Heading color='yellow.400' mt='2'>(Extensive Learning Course)<Badge colorScheme='yellow' fontSize={'xl'} borderRadius={'10em'} color='yellow.600' p={'5px 15px'} className='text-lg rounded-lg text-center flex justify-center items-center ml-2'>Full Time</Badge></Heading>
                <Text className='text-white text-2xl mt-5 max-h-10'>
                    Become a job-ready {title} in {course.duration} weeks.<br/> Learn at ₹0 upfront fee; pay after placement.
                </Text>
            </Box>
            <Box className='pt-8 md:pt-6 pb-8 md:pb-0 bg-[#F7F7FF]'>
                <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-center'>
                    
                </div>
            </Box>
        </>
    )
}

export default CourseDetail