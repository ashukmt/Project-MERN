import { Badge, Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { FaUserTie } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
import { PiSuitcaseBold } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import TimerComp from './TimerComp';

const CourseDetail = () => {
    const courses = useSelector(state => state.course.courses)
    const { title } = useParams()
    const course = courses.filter((c) => c.title === title?.replaceAll("-", " "))[0]

    return (
        <>
            <Box className={`bg-${course?.color}-300 relative overflow-hidden text-center p-2`} h='300px' >
                <Image w='100vw' position={'absolute'} zIndex={'-1'} src='utils/bg.png' />
                <Box className={`bg-${course?.color}-200 hidden md:flex items-center justify-center w-[248px] h-[248px] pointer-events-none absolute top-[35%] rounded-[100%] right-[-2%] z-[0]`}>
                    <Image className="max-h-[94px] max-w-[104px] w-full object-cover" src={course?.image} />
                </Box>
                <div class="relative flex mt-[50px] items-center justify-center gap-[3px] md:gap-[10px] font-[700] text-[50px] leading-[62px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 !text-white ">
                    <BsStars style={{ position: 'relative' }} className='relative' />
                    Become a {course?.role}
                </div>
                <Heading color='yellow' mt='2'>(Extensive Learning Course)<Badge colorScheme='yellow' fontSize={'xl'} borderRadius={'10em'} color='yellow.600' p={'5px 15px'} className='text-lg rounded-lg text-center flex justify-center items-center ml-2'>Full Time</Badge></Heading>
                <Text className='text-white text-2xl mt-5 max-h-10'>
                    Become a job-ready {title} in {course?.duration} weeks.<br /> Learn at ₹0 upfront fee; pay after placement.
                </Text>
            </Box>
            <Box className='pt-8 md:pt-6 pb-8 md:pb-0 bg-[#F7F7FF]'>
                <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-center'>
                    <div className='max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0'>
                        <FaUserTie className="w-6 md:w-8 h-6 md:h-8" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6000+ students Currently Enrolled</h5>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0 ml-5">
                        <PiSuitcaseBold className="w-6 md:w-8 h-6 md:h-8" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>4000+ hiring<br /> partners</h5>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0 ml-5">
                        <AiOutlineThunderbolt className="w-6 md:w-8 h-6 md:h-8" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6.9 LPA Average Salary</h5>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0 ml-5">
                        <BiRupee className="w-6 md:w-8 h-6 md:h-8" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>36 LPA Highest<br /> Salary</h5>
                    </div>
                </div>
            </Box>
            <div className="hidden isolate lg:flex items-center mb-[20px] sticky z-[200] h-[88px] bg-white w-full">
                <div className='flex items-center max-w-[1280px] justify-between mx-auto px-[16px] w-[70%]'>
                    <Button>Course Details</Button>
                    <Button>Elegibility</Button>
                    <Button>Instructors</Button>
                    <Button>Curriculum</Button>
                    <Button>Student Stories</Button>
                    <Button>FAQ</Button>
                    <Button colorScheme='red'>Apply Now</Button>
                </div>
            </div>
            <Box>
                <Card>
                    <CardHeader>
                        <GrPersonalComputer />
                        <Text>
                            Batch Starting in
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <TimerComp date={course?.date}/>    
                    </CardBody>
                </Card>
            </Box>
        </>
    )
}

export default CourseDetail