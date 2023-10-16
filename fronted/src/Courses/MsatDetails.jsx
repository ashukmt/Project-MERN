import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
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
                    <p className="text-2xl md:text-4xl font-poppins font-semibold">Anyone can become a</p>
                </div>
            </div>
            <Swiper
                effect='coverflow'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <Button colorScheme='red' size={'lg'}>Software Developer</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <Button colorScheme='red' size={'lg'}>Data Anayst</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <Button colorScheme='red' size={'lg'}>Test engineer</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <Button colorScheme='red' size={'lg'}>Software Developer</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <Button colorScheme='red' size={'lg'}>Data Anayst</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <Button colorScheme='red' size={'lg'}>Test engineer</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/developer.svg" />
                        <Button colorScheme='red' size={'lg'}>Software Developer</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/analyst.svg" />
                        <Button colorScheme='red' size={'lg'}>Data Anayst</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image h='400px' src="https://masaischool.com/images/msat/engineer.svg" />
                        <Button colorScheme='red' size={'lg'}>Test engineer</Button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MsatDetails
