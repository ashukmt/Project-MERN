import { Button, Divider, Image, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { animateScroll } from 'react-scroll'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RegisterMsat from './RegisterMsat'
import { useSelector } from 'react-redux'
import { BsNodePlusFill } from 'react-icons/bs'

const MsatDetails = () => {
    const navigateTo = useNavigate()
    const [register, setRegister] = useState(false);
    const [registered, setRegistered] = useState(false);
    const curr_user = useSelector(state => state.user.user)
    const ref = useRef(BsNodePlusFill)
    const toast = useToast();
    const navigate = useNavigate()
    useEffect(()=>{
        setRegistered(curr_user?.registered)
    },[curr_user])
    const handleStartMsat = () => {
        if (registered)
            navigateTo('/msat/confirm')
        else {
            toast({
                title: "Please Register first!",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleReg = () => {
        if (!curr_user.email) {
            toast({
                title: "Please Login First",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            animateScroll.scrollToTop({ smooth: true })
        } else {
            if (curr_user.registered) {
                toast({
                    title: "You have registered already.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/msat/confirm')
            }
            else setRegister(true);
        }
    }
    useEffect(() => {
        animateScroll.scrollToTop({ smooth: true })
    }, [])
    return (
        <div className='mt-10 overflow-hidden'>
            <div className="mx-auto max-w-7xl sm:px-|6 lg:px-8 mt-8">
                <div className="mx-auto flex flex-col items-center justify-center text-center space-y-0 md:space-y-2">
                    <p className="text-3xl md:text-5xl font-poppins font-bold flex items-baseline justify-end">
                        At
                        <span>
                            <Image src="https://masaischool.com/images/msat/masai.svg" className="mx-auto ml-3.5 h-full w-[100px] md:w-[160px]" alt='masai logo' />
                        </span>
                    </p>
                    <p className="text-2xl md:text-4xl font-poppins font-bold mb-0">Anyone can become a</p>
                </div>
            </div>
            <Swiper
                className="xs:hidden md:hidden sm:hidden p-0 lg:block z-0"
                style={{ margin: 0, padding: 0 }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <button onClick={() => navigateTo('/courses/Data-Analytics')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <button onClick={() => navigateTo('/courses/Become-a-Software-Testing-&-Automation')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <button onClick={() => navigateTo('/courses/Full-Stack-Web-Development')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <button onClick={() => navigateTo('/courses/Data-Analytics')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <button onClick={() => navigateTo('/courses/Become-a-Software-Testing-&-Automation')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <button onClick={() => navigateTo('/courses/Full-Stack-Web-Development')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <button onClick={() => navigateTo('/courses/Data-Analytics')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <button onClick={() => navigateTo('/courses/Become-a-Software-Testing-&-Automation')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <button onClick={() => navigateTo('/courses/Full-Stack-Web-Development')} className='w-[350px] justify-center lg:w-auto swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-8">
                <div className="mx-auto flex items-center justify-center text-center">
                    <p class="text-md md:text-2xl font-poppins font-bold px-4">
                        Start by taking the Masai School Admissions Test (MSAT) to launch
                        <br class="hidden lg:block" />
                        {" "}your journey towards your dream career
                    </p>
                </div>
            </div>
            <Divider p='4' />
            <div class="relative bg-[#FEDFE5] px-4 pt-1 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="absolute inset-0">
                    <div className="h-96 bg-[#FFFAFB] sm:h-2/4"></div>
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className='text-center mt-[50px]'>
                        <h2 class="text-3xl font-extrabold text-red-500 font-poppins sm:text-5xl uppercase mb-2">MSAT</h2>
                        <p class="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">(Masai School Admission Test)</p>
                        <p class="mx-auto mt-3 mb-5 max-w-3xl text-sm sm:text-lg font-semibold text-[#544D4F] sm:mt-3.5">Uncover your potential and passion through MSAT.
                            <br class="hidden sm:block" />
                            Your score paves the way to eligible courses, shaping your journey to success.
                        </p>
                        <Button onClick={handleStartMsat} colorScheme='red' class="active:!ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white  !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px]  inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200" >Start MSAT</Button>
                        <div className='flex justify-center mt-20'>
                            <iframe style={{ borderRadius: '15px' }} className='w-[450px] h-[250px] lg:w-[860px] lg:h-[415px]' src="https://www.youtube.com/embed/0867JeIfyLY?si=k-bpg4MMAQElzd7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section class="bg-[#FFFAFB] px-4 sm:px-0">
                    <div className="relative bg-[#FFFAFB] py-16 sm:py-18 lg:py-24">
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl sm:text-4xl font-poppins font-semibold mb-0 sm:mb-3.5">
                                Hot to take the MSAT
                            </h2>
                            <p className="mt-2 text-lg lg:text-2xl font-poppins font-bold text-red-500">
                                Your Guide to Success
                            </p>
                            <p className="mx-auto mt-2.5 max-w-prose text-base sm:text-lg text-[#544D4F]">Taking the MSAT is as easy as 1-2-3. We've designed a straightforward
                                process to ensure you're comfortable every step of the way:</p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative bg-[#FFF9E5] px-4 sm:px-6 lg:px-8 py-12 rounded-3xl border shadow-logo">
                            <div className="absolute inset-0">
                                <div className="h-1/3 bg-[#FFF9E5] border-none lg:border-b lg:border-dotted border-[#6E71CC] sm:h-[30%] rounded-t-3xl"></div>
                            </div>
                            <div className="relative mx-auto max-w-7xl">
                                <div className="mx-auto grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3 lg:divide-y-0 divide-y divide-[#D6E2FA]">
                                    <div class="flex flex-col overflow-hidden">
                                        <div class="flex items-center justify-center mt-0">
                                            <div class="h-20 w-20 rounded-full bg-[#D6E2FA] flex items-center justify-center font-poppins font-bold border border-blue-400 text-[#6E71CC]">
                                                <span class="text-4xl">1</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-1 flex-col justify-between items-center text-center mt-2.5">
                                            <div class="flex-1 px-8">
                                                <div class="mt-2 block">
                                                    <p class="text-xl font-poppins font-bold text-[#544D4F]">Register</p>
                                                    <p class="mt-3 text-base font-semibold text-[#6C6768]">Sign up for MSAT with your details. It's quick and hassle-free.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overflow-hidden">
                                        <div class="flex items-center justify-center mt-0">
                                            <div class="h-20 w-20 rounded-full bg-[#D6E2FA] flex items-center justify-center font-poppins font-bold border border-blue-400 text-[#6E71CC]">
                                                <span class="text-4xl">2</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-1 flex-col justify-between items-center text-center mt-2.5">
                                            <div class="flex-1 px-8">
                                                <div class="mt-2 block">
                                                    <p class="text-xl font-poppins font-bold text-[#544D4F]">Prepare</p>
                                                    <p class="mt-3 text-base font-semibold text-[#6C6768]">Access resources that help you understand the test format and review the syllabus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overflow-hidden">
                                        <div class="flex items-center justify-center mt-0">
                                            <div class="h-20 w-20 rounded-full bg-[#D6E2FA] flex items-center justify-center font-poppins font-bold border border-blue-400 text-[#6E71CC]">
                                                <span class="text-4xl">3</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-1 flex-col justify-between items-center text-center mt-2.5">
                                            <div class="flex-1 px-8">
                                                <div class="mt-2 block">
                                                    <p class="text-xl font-poppins font-bold text-[#544D4F]">Take the Test</p>
                                                    <p class="mt-3 text-base font-semibold text-[#6C6768]">Dive into MSAT and showcase your skills. The future you dream of starts here.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="relative bg-[#FFFAFB] py-16 sm:py-18 lg:py-24">
                    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 class="text-2xl sm:text-4xl font-poppins font-bold mb-0 sm:mb-3.5">Exploring MSAT</h2>
                        <p className="mt-2 text-lg lg:text-2xl font-poppins font-bold text-red-500">What to Expect</p>
                        <p className="mx-auto mt-2.5 max-w-prose text-base sm:text-lg text-[#544D4F]">MSAT is structured around a few key areas that reflect the skills needed for success. During the test, you'll be questioned about:</p>
                        <div class="mt-28">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 space-y-16 md:space-y-0">
                                <div className='pt-6'>
                                    <div className="flow-root bg-white px-2.5 pb-8 border border-[#D6E2FA] rounded-2xl shadow-lg">
                                        <div className='-mt-16'>
                                            <div>
                                                <span className="inline-flex items-center justify-center">
                                                    <img className="w-full h-full mx-auto" width="253" height="223" loading="lazy" src="https://www.masaischool.com/images/msat/msat-problem-solving.png" alt="Masai School Admission Test Problem Solving" />
                                                </span>
                                            </div>
                                            <h3 className="mt-4 text-lg font-bold font-poppins text-[#544D4F]">Problem Solving</h3>
                                            <p className="mt-2 text-base font-semibold text-[#6C6768]">Demonstrate your ability to tackle real-world challenges logically and creatively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-6'>
                                    <div className="flow-root bg-white px-2.5 pb-8 border border-[#D6E2FA] rounded-2xl shadow-lg">
                                        <div className='-mt-16'>
                                            <div>
                                                <span className="inline-flex items-center justify-center">
                                                    <img className="w-full h-full mx-auto" width="253" height="223" loading="lazy" src="https://www.masaischool.com/images/msat/msat-communication.png" alt="Masai School Admission Test Communication" />
                                                </span>
                                            </div>
                                            <h3 className="mt-4 text-lg font-bold font-poppins text-[#544D4F]">Communication</h3>
                                            <p className="mt-2 text-base font-semibold text-[#6C6768]">Articulate your thoughts effectively, an essential skill for any professional journey.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-6'>
                                    <div className="flow-root bg-white px-2.5 pb-8 border border-[#D6E2FA] rounded-2xl shadow-lg">
                                        <div className='-mt-16'>
                                            <div>
                                                <span className="inline-flex items-center justify-center">
                                                    <img className="w-full h-full mx-auto" width="253" height="223" loading="lazy" src="https://www.masaischool.com/images/msat/msat-logical-thinking.png" alt="Masai School Admission Test Logical Thinking" />
                                                </span>
                                            </div>
                                            <h3 className="mt-4 text-lg font-bold font-poppins text-[#544D4F]">Logical Thinking</h3>
                                            <p className="mt-2 text-base font-semibold text-[#6C6768]">Showcase your critical thinking and analytical skills in assessing complex scenarios.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-6'>
                                    <div className="flow-root bg-white px-2.5 pb-8 border border-[#D6E2FA] rounded-2xl shadow-lg">
                                        <div className='-mt-16'>
                                            <div>
                                                <span className="inline-flex items-center justify-center">
                                                    <img className="w-full h-full mx-auto" width="253" height="223" loading="lazy" src="https://www.masaischool.com/images/msat/msat-coding-aptitude.png" alt="Masai School Admission Test Coding Aptitude" />
                                                </span>
                                            </div>
                                            <h3 className="mt-4 text-lg font-bold font-poppins text-[#544D4F]">Coding Aptitude</h3>
                                            <p className="mt-2 text-base font-semibold text-[#6C6768]">Highlight your coding prowess through hands-on coding challenges.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Button colorScheme='red' class="mt-10 active:!ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white  !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px]  inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200" >Start MSAT</Button> */}
                    </div>
                </div>
            </div>
            <div className="bg-[#FEDFE5]" ref={ref}>
                <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-poppins font-bold tracking-tight text-red-500 sm:text-4xl">
                                    <span class="block">Ready to start your Journey with Masai</span>
                                </h2>
                                <p className="mt-3.5 text-xl text-[#3B3435] font-poppins font-medium">MSAT is your first step towards a transformative education at Masai School. Let's walk this path together!</p>
                                <div className="mt-5 inline-flex items-center rounded-md">
                                    <button onClick={handleReg} type="button" class="active:!ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white  !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px]  inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 ">register for msat</button>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:flex items-center justify-center">
                            <img height="340" width="644.21" class="transform rounded-md object-cover object-left-top" src="https://www.masaischool.com/images/msat/msat-cta.png" alt="App screenshot" />
                        </div>
                    </div>
                </div>
            </div>
            <RegisterMsat register={register} setRegister={setRegister} />
        </div>
    )
}

export default MsatDetails
