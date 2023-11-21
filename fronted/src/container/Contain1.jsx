import React from "react";
import "../Style/homes.css";
function Contain1() {
  return (
    <div>
      <div className="flex justify-center font-bold text-lg z-2 ">
        Launch A Sustainable Career
      </div>
      <div className="flex cont1">
 
        <div className="w-[90%] m-auto">
        <div className="video_div flex justify-center">
          {/* <iframe
            className="rounded-md custom-iframe"
            
            src="https://youtu.be/TVpsKp-WsLM?si=o51MFXb0QV6ITe0O"
            
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bRPtI_MJrts?si=CiYVNOdv9lnh0I1j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        </div>
        <div>
          <div className="flex div1 p-3 font-bold ml-5 mt-3 text-lg lg:mr-[11%] lg:justify-around">
            <div className="text-yellow-500 text-2xl">₹6.9 LPA</div>
            <div className="ml-4 text-lg text-white">Average CTC</div>
          </div>

          <div className="flex div1 p-3 font-bold ml-5 mt-4 text-lg lg:mr-[11%] lg:justify-around">
            <div className="text-yellow-500 text-1xl">3500+</div>
            <div className="ml-4 text-lg text-white">Careers Launched</div>
          </div>
          <div className="flex div1 p-3 font-bold ml-5 mt-4 text-lg lg:mr-[11%] lg:justify-around">
            <div className="text-yellow-500 text-1xl">4000+</div>
            <div className="ml-4 text-lg text-white">Hiring Partners</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-4 mt-2 lg:mr-[10%]">
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/dream11.png"
            alt="dream11"
          />
        </div>
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/global-logic.png"
            alt="dream11"
          />
        </div>

        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/paytm.png"
            alt="dream11"
          />
        </div>
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/coin-switch.png"
            alt="dream11"
          />
        </div>
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/share-chat.png"
            alt="dream11"
          />
        </div>
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/ola.png"
            alt="dream11"
          />
        </div>
        <div>
          <img
            className="wit"
            src="https://www.masaischool.com/images/new-homepage/outcome/jp-morgan.png"
            alt="dream11"
          />
        </div>
      </div>
    </div>
  );
}

export default Contain1;
