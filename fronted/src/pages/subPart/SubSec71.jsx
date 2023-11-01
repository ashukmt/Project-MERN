import React, { useState } from "react";
import "../../Style/con71.css";

const SubSec71 = () => {
  const [curSlide, setCurSlide] = useState(0);
  const slides = [
    "https://www.youtube.com/embed/hkcPely1S8c?si=nOXWn-1t9x12RhhZ",
    "https://youtu.be/4GRpdIV5DAQ?si=GgpjiXMQaD6c33rO",
    // "https://www.youtube.com/embed/4GRpdIV5DAQ?si=qYhaw6SShDlYq6YC",
    // "https://source.unsplash.com/random?landscape,cars",
    // "https://source.unsplash.com/random?landscape,night",
    // "https://source.unsplash.com/random?landscape,city",
  ];

  const nextSlide = () => {
    setCurSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider7">
   
        <div
          // key={indx}
          className="slide7"
          style={{ transform: `translateX(${100 * (0 - curSlide)}%)` }}
        >
          {/* <img src={slide} alt="" /> */}
          {/* <video src={slide}></video> */}
          {/* <iframe
           width={600}
           height={400}
            src={slide}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        <iframe width="660" height="315" src="https://www.youtube.com/embed/hkcPely1S8c?si=nOXWn-1t9x12RhhZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div
          // key={indx}
          className="slide7"
          style={{ transform: `translateX(${100 * (1 - curSlide)}%)` }}
        >
          {/* <img src={slide} alt="" /> */}
          {/* <video src={slide}></video> */}
          {/* <iframe
           width={600}
           height={400}
            src={slide}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        <iframe width="640" height="315" src="https://www.youtube.com/embed/4GRpdIV5DAQ?si=31894l8i1o8VzJHh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div
          // key={indx}
          className="slide7"
          style={{ transform: `translateX(${100 * (1 - curSlide)}%)` }}
        >
          {/* <img src={slide} alt="" /> */}
          {/* <video src={slide}></video> */}
          {/* <iframe
           width={600}
           height={400}
            src={slide}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        <iframe width="640" height="315" src="https://www.youtube.com/embed/Od24_p8QtyA?si=KJtt0vuPc5p8cF4C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  
      <button className="btn7 btn-prev7" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="btn7 btn-next7" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default SubSec71;
