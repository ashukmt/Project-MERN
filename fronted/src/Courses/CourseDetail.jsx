import { Badge, Box, Button, Flex, Heading, Image, Text, Toast, useToast } from '@chakra-ui/react'
import { Link, animateScroll } from "react-scroll";
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { FaClock, FaUser, FaUserTie } from "react-icons/fa6";
import { BiCalendar, BiGlobe, BiRupee, BiSolidIdCard, BiUserCheck, BiUserVoice, BiVideo } from "react-icons/bi";
import { PiCertificateBold, PiMonitor, PiSuitcaseBold } from "react-icons/pi";
import { AiOutlineCheck, AiOutlineThunderbolt } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { MdComputer, MdExposurePlus1 } from 'react-icons/md';
import Sec5 from '../pages/Sec5';
import Sec4 from '../pages/Sec4';
import FaqComp from './FaqComp';
import Alumini from './Alumini';
import { useEffect, useState } from 'react';
import RegisterMsat from './RegisterMsat';

const CourseDetail = () => {
    const courses = useSelector(state => state.course.courses)
    const { title } = useParams()
    const course = courses.filter((c) => c.title === title?.replaceAll("-", " "))[0]
    const navigateTo = useNavigate()
    const [register, setRegister] = useState(false);
    const curr_user = useSelector(state => state.user.user)
    const toast = useToast();
    const handleReg = () => {
        if (curr_user)
            setRegister(true);
        else {
            toast({
                title: "Please Login First",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }
    useEffect(() => {
        animateScroll.scrollToTop({ smooth: true })
    }, [])
    return (
        <>
            {/* top banner */}
            <Box className={`bg-${course?.color}-300 relative overflow-hidden text-center p-2`} h={{ base: '470px', md: '300px' }} >
                <Image w={{ base: '0', lg: '100vw' }} position={'absolute'} zIndex={'-1'} src='utils/bg.png' />
                <Box className={`bg-${course?.color}-200 hidden md:flex items-center justify-center w-[248px] h-[248px] pointer-events-none absolute top-[35%] rounded-[100%] right-[-2%] z-[0]`}>
                    <Image className="max-h-[94px] max-w-[104px] w-full object-cover" src={course?.image} />
                </Box>
                <div class="relative flex mt-[50px] items-center justify-center gap-[3px] md:gap-[10px] font-[700] text-[38px] lg:text-[50px] leading-[62px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 !text-white">
                    <BsStars style={{ position: 'relative' }} className='relative' />
                    Become a {course?.role}
                </div>
                <Heading color='yellow' mt='2' size={{ base: 'lg', lg: 'xl' }}>(Extensive Learning Course)<Badge colorScheme='yellow' fontSize={'xl'} borderRadius={'10em'} color='yellow.600' p={'5px 15px'} className='text-lg rounded-lg text-center flex justify-center items-center ml-2'>Full Time</Badge></Heading>
                <Text className='text-white text-xl mt-5 max-h-10 lg:text-2xl'>
                    Become a job-ready {title} in {course?.duration} weeks.<br /> Learn at ₹0 upfront fee; pay after placement.
                </Text>
            </Box>
            {/* secondary info banner */}
            <div className='pt-8 md:pt-6 pb-8 md:pb-0 bg-[#F7F7FF]'>
                <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-center'>
                    <div className='max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0'>
                        <FaUserTie className="w-6 md:w-7 h-6 md:h-7" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6000+ students Currently Enrolled</h5>
                        <p className='!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 block md:hidden !text-ms-red-900 text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6000+ students Currently Enrolled</p>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0">
                        <PiSuitcaseBold className="w-6 md:w-7 h-6 md:h-7" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>4000+ hiring<br /> partners</h5>
                        <p className='!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 block md:hidden !text-ms-red-900 text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>4000+ hiring partners</p>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0">
                        <AiOutlineThunderbolt className="w-6 md:w-9 h-6 md:h-9" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6.9 LPA Average Salary</h5>
                        <p className='!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 block md:hidden !text-ms-red-900 text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>6.9 LPA Average Salary</p>
                    </div>
                    <div className="max-w-full md:max-w-[192px] flex items-center md:justify-center flex-row md:flex-col py-2 md:py-8 px-6 md:px-0">
                        <BiRupee className="w-6 md:w-9 h-6 md:h-9" />
                        <h5 className='font-[700] !text-[18px] leading-[24px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block !text-ms-red-900 text-center text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>36 LPA Highest<br /> Salary</h5>
                        <p className='!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 block md:hidden !text-ms-red-900 text-[14px] md:text-[18px] md:mt-2 ml-4 md:ml-0'>36 LPA Highest Salary</p>
                    </div>
                </div>
            </div>
            {/* page navbar */}
            <div className="hidden isolate lg:flex items-center mb-[20px] sticky z-[200] h-[88px] bg-white w-full">
                <div className='flex items-center max-w-[1280px] justify-between mx-auto px-[16px] w-[70%]'>
                    <Link
                        to={"course"}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
                    >
                        Course Details
                    </Link>
                    <Link
                        to={"elegiblity"}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
                    >
                        Elegibility
                    </Link>
                    <Link
                        to={"curriculum"}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
                    >
                        Curriculum
                    </Link>
                    <Link
                        to="stories"
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
                    >
                        Student Stories
                    </Link>
                    <Link
                        to="faq"
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
                    >
                        FAQ
                    </Link>
                    <Button onClick={() => handleReg()} colorScheme='red'>Apply Now</Button>
                </div>
            </div>
            {/* course details */}
            <div id="course" className='max-w-xl mx-auto lg:max-w-7xl mt-[3em]'>
                <div className='xl:px-[80px] space-y-[10px] lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
                    <div className='flex flex-row gap-[14px] items-center md:w-[auto] bg-[#F7F7FF] p-4 md:p-[34px] lg:rounded-[16px]'>
                        <PiMonitor className='text-2xl text-indigo-500' />
                        <div>
                            <p style={{ color: "rgb(110, 113, 204)" }} class="font-[700] text-[20px] leading-[28px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block">Batch Starting</p>
                            <p class="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 md:mt-[8px]">06 November, 2023</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[14px] items-center md:w-[auto] bg-[#F7F7FF] p-4 md:p-[24px] lg:rounded-[16px]'>
                        <BiCalendar className='text-2xl text-indigo-500' />
                        <div>
                            <p style={{ color: "rgb(110, 113, 204)" }} class="font-[700] text-[20px] leading-[28px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block">Duration</p>
                            <p class="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 md:mt-[8px]">30 weeks ( 7 months )</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[14px] items-center md:w-[auto] bg-[#F7F7FF] p-4 md:p-[24px] lg:rounded-[16px]'>
                        <FaClock className='text-xl text-indigo-500' />
                        <div>
                            <p style={{ color: "rgb(110, 113, 204)" }} class="font-[700] text-[20px] leading-[28px] font-poppins transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hidden md:block">Timings</p>
                            <p class="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 md:mt-[8px]">*11 am to 11 pm<br />
                                Monday to Saturday</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='elegiblity' className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[16px]'>
                <div className='text-center'>
                    <Heading className='mt-[1.5em] text-center'>Minium Criteria</Heading>
                    <Text className='mt-2 mb-10 text-zinc-500'>You should meet the following requirements to be eligible for this course.</Text>
                </div>
                <div className="grid md:gap-[40px] grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(308px,308px))] md:justify-center">
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit bg-[#F7F7FF] font-bold">
                            <PiCertificateBold className='text-2xl text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">Qualification</p>
                            <p className="!font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600 text-zinc-500">Graduation (Any Stream)</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit font-bold bg-[#F7F7FF]">
                            <FaUser className='text-lg text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">Age</p>
                            <p className="!font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600 text-zinc-500">Upto 28 years</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit font-bold bg-[#F7F7FF]">
                            <BiSolidIdCard className='text-2xl text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">ID</p>
                            <p className="!font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600 text-zinc-500">Valid Aadhar Card</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit font-bold bg-[#F7F7FF]">
                            <BiGlobe className='text-2xl text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">Internet</p>
                            <p className="text-zinc-500 !font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600">A desktop or laptop with an uninterrupted service connection.</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit font-bold bg-[#F7F7FF]">
                            <BiUserVoice className='text-2xl text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">Communication Skills</p>
                            <p className="text-zinc-500 !font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600">Basic English - speaking, reading and writing</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row md:flex-col gap-[6px] md:justify-center md:text-center mx-auto py-4 md:border border-[#CFD0EE] rounded-[16px]">
                        <div class="w-fit md:mx-auto p-[8px] rounded-[16px] h-fit font-bold bg-[#F7F7FF]">
                            <MdExposurePlus1 className='text-xl text-indigo-400 font-bold' />
                        </div>
                        <div className="pl-4 md:pl-0 space-y-[6px]">
                            <p className="!font-[600] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">Cibil Score</p>
                            <p className="text-zinc-500 !font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 whitespace-pre-line !text-neutral-ms-grey-600">650+</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* process banner */}
            <div className="mb-10 lg:mt-8">
                <div className="bg-[#f6ede7] pb-10 mt-0 px-5 pt-8 undefined">
                    <h1 className="block font-poppins text-[24px] text-center font-bold undefined">Admission Process</h1>
                    <div className='relative'>
                        <div className="absolute top-[50%] hidden xl:block w-full max-w-[1040px] left-0 right-0 mx-auto border-t border-dashed border-[#CC926E]"></div>
                        <div className="max-w-[1440px] xl:px-[80px] grid md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,250px))] bg-extended-ms-brick-50 gap-8 items-center justify-center m-auto mt-8 undefined z-50" >
                            <div style={{ filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) dropShadow(0px 1px 2px rgba(0, 0, 0, 0.06))" }} className="flex pl-2 gap-x-[16px] lg:pl-4 flex-row w-full min-h-[4rem] bg-white rounded-3xl text-base font-semibold px-5 leading-6 lg:pt-8 lg:min-h-[11rem] lg:flex-col items-center lg:justify-start text-left lg:text-start z-50">
                                <div className="bg-[#f6ede7] p-[14px] rounded-[16px] h-fit">
                                    <BiUserCheck class="text-[#d99d75] w-6 h-6 font-extrabold" />
                                </div>
                                <p className="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 text-left lg:text-center lg:mt-[16px]">Crack the Admissions Test (MSAT)</p>
                            </div>
                            <div style={{ filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) dropShadow(0px 1px 2px rgba(0, 0, 0, 0.06))" }} className="flex pl-2 gap-x-[16px] lg:pl-4 flex-row w-full min-h-[4rem] bg-white rounded-3xl text-base font-semibold px-5 leading-6 lg:pt-8 lg:min-h-[11rem] lg:flex-col items-center lg:justify-start text-left lg:text-start z-50">
                                <div className="bg-[#f6ede7] p-[14px] rounded-[16px] h-fit">
                                    <MdComputer class="text-[#d99d75] w-6 h-6 font-extrabold" />
                                </div>
                                <p className="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 text-left lg:text-center lg:mt-[16px]">Choose a course</p>
                            </div>
                            <div style={{ filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) dropShadow(0px 1px 2px rgba(0, 0, 0, 0.06))" }} className="flex pl-2 gap-x-[16px] lg:pl-4 flex-row w-full min-h-[4rem] bg-white rounded-3xl text-base font-semibold px-5 leading-6 lg:pt-8 lg:min-h-[11rem] lg:flex-col items-center lg:justify-start text-left lg:text-start z-50">
                                <div className="bg-[#f6ede7] p-[14px] rounded-[16px] h-fit">
                                    <AiOutlineCheck class="text-[#d99d75] w-6 h-6 font-extrabold" />
                                </div>
                                <p className="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 text-left lg:text-center lg:mt-[16px]">Complete KYC</p>
                            </div>
                            <div style={{ filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) dropShadow(0px 1px 2px rgba(0, 0, 0, 0.06))" }} className="flex pl-2 gap-x-[16px] lg:pl-4 flex-row w-full min-h-[4rem] bg-white rounded-3xl text-base font-semibold px-5 leading-6 lg:pt-8 lg:min-h-[11rem] lg:flex-col items-center lg:justify-start text-left lg:text-start z-50">
                                <div className="bg-[#f6ede7] p-[14px] rounded-[16px] h-fit">
                                    <BiVideo class="text-[#d99d75] w-6 h-6 font-extrabold" />
                                </div>
                                <p className="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 text-left lg:text-center lg:mt-[16px]">You are ready to join the batch</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-10 flex gap-2 justify-center'>
                        <Button onClick={() => navigateTo('/msat')} variant={'outline'} colorScheme='red'>View MSAT DETAILS</Button>
                        <Button onClick={() => handleReg()} colorScheme='red'>APPLY NOW FOR FREE</Button>
                    </div>
                </div>
            </div>
            <Sec5 />
            {/* <Flex display={{base:'hidden',md:'block'}}> */}
            <Sec4 />
            {/* </Flex> */}
            <Alumini />
            <FaqComp />
            <div className='p-3'>
                <RegisterMsat register={register} setRegister={setRegister} />
            </div>
        </>
    )
}

export default CourseDetail