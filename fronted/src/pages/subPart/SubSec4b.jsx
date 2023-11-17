import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function SubSec4b() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://miro.medium.com/v2/resize:fit:1024/1*u9uFmS0KECEmveQ0PbDx3g.png"alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miro.medium.com/v2/resize:fit:1024/1*ZSbjnPGWPr2wko0pGH-gQg.png"alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4121d9fb-9ea0-466d-b0fd-7b1b6a69b790_1024x1024.jpeg"alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fHww&w=1000&q=80"alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrbQRYs-chd6O0r2PhNdXBg9Y1TpTPZlIyaWtHfkQFOzXlyMkfPXTF9J4ead4Z83XLRE&usqp=CAU"alt='' />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
