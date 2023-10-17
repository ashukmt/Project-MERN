import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, EffectCoverflow, EffectFlip, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const MsatDetails = () => {
    return (
        <div className='my-10'>
            <div className="mx-auto max-w-7xl sm:px-|6 lg:px-8 mt-8">
                <div className="mx-auto flex flex-col items-center justify-center text-center space-y-0 md:space-y-2">
                    <p className="text-3xl md:text-5xl font-poppins font-semibold flex items-baseline justify-end">
                        At
                        <span>
                            <Image src="https://masaischool.com/images/msat/masai.svg" className="mx-auto ml-3.5 h-full w-[100px] md:w-[160px]" alt='masai logo' />
                        </span>
                    </p>
                    <p className="text-2xl md:text-4xl font-poppins font-semibold mb-0">Anyone can become a</p>
                </div>
            </div>
            <Swiper
                style={{ margin: 0, padding: 0 }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // slidesPerView={'auto'}
                modules={[Autoplay]}
                className="mySwiper p-0"
            >
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                    </div>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Data Analyst</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Test Engineer</button>
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
                        <button className='swiper-button inline-flex items-center rounded-full border border-transparent bg-red-500 px-6 lg:px-8 py-2.5 lg:py-4 text-xl lg:text-3xl font-bold text-white shadow-sm focus:outline-none font-poppins'>Software Developer</button>
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
                        your journey towards your dream career
                    </p>
                </div>
            </div>
            <div className='text-center mt-[50px]'>
                <h2 class="text-3xl font-extrabold text-red-500 font-poppins sm:text-5xl uppercase mb-2">MSAT</h2>
                <p class="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">(Masai School Admission Test)</p>
                <p class="mx-auto mt-3 mb-5 max-w-3xl text-sm sm:text-lg font-semibold text-[#544D4F] sm:mt-3.5">Uncover your potential and passion through MSAT.
                    <br class="hidden sm:block" />
                    Your score paves the way to eligible courses, shaping your journey to success.
                </p>
                <Button colorScheme='red' class="active:!ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white  !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px]  inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200" >Start MSAT</Button>
                <div className='flex justify-center mt-20'>
                    <iframe style={{borderRadius:'15px'}} width="860" height="415" src="https://www.youtube.com/embed/0867JeIfyLY?si=k-bpg4MMAQElzd7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default MsatDetails
