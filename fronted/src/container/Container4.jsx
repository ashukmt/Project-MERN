import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Style/cont1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Container4() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.psohub.com/hubfs/PSOHUB_ProjectManagement_pillar_handoff.svg"
            alt=""
            width={370}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
            alt=""
            width={370}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.webp?b=1&s=170667a&w=0&k=20&c=4mcBY_ZnWdd7lAPw6sWGLXGdvFZt2h3b-6WHy5Vcvkk="
            alt=""
            width={370}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM="
            alt=""
            width={370}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1013820274/photo/project-management-scheduling-concept-with-gantt-chart-planning-with-tasks-and-milestones-to.jpg?s=612x612&w=0&k=20&c=25sBJbvcqTJgLroPFOh8hKEykJhoAnV-7a-vcNAYYrk="
            alt=""
            width={370}
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
