import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import '../Style/con2.css';

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

export default function SubSec4() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
         
         <div className=' '>
           
            <div className='mb-96 mt-36'>
            <div className='font-bold text-xl'>
            100% <span className='text-red-500'>Live</span> Distance Learning
            </div>
            <p>India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.</p>
            </div>
            <div className='mb-96'>
            <div className='font-bold text-xl'>
            Generative <span className='text-red-500'>AI Integrated</span> Program
            </div>
            <p>Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.</p>
            </div>
            <div className='mb-96'>
            <div className='font-bold text-xl'>
            <span className='text-red-400'>  Industry Ready</span> Curriculum
            </div>
            <p>Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.</p>
            </div>
            <div className='mb-96'>
            <div className='font-bold text-xl'>
            Focus On Learning <span className='text-red-400'>Agility</span>
            </div>
            <p>We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.</p>
            </div>
            <div className='mb-44'>
            <div className='font-bold text-xl'>
            Industry Ready In Just
             <p className='text-red-500'>25 - 35 Weeks</p>
            </div>
            <p>Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!</p>
            </div>
         </div>
          
         
        </SwiperSlide>
      </Swiper>
    </>
  );
}

