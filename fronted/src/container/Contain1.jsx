import React from "react";
import "../Style/homes.css";
function Contain1() {
  return (
    <div>
      <div className="flex justify-center font-bold text-lg z-2 ">
        Launch A Sustainable Career
      </div>
      <div className="flex">
        <div className="ml-7 my-3  ">
         <video width="500" height="250" controls poster="https://masai-website-images.s3.ap-south-1.amazonaws.com/Komal_Raj_Website_Desktop_Thumbnail_e1b0816c60.png">
            <source src="" type="video/mp4" />
            
          </video>
        </div>
        <div>
          <div className="flex div1 p-3 font-bold ml-5 mt-3 text-lg">
            <div className="text-yellow-500 text-2xl">₹6.9 LPA</div>
            <div className="ml-4 text-lg text-white">Average CTC</div>
          </div>
          
          <div className="flex div1 p-3 font-bold ml-5 mt-4 text-lg">
            <div className="text-yellow-500 text-1xl">3500+</div>
            <div className="ml-4 text-lg text-white">Careers Launched</div>
          </div>
          <div className="flex div1 p-3 font-bold ml-5 mt-4 text-lg">
            <div className="text-yellow-500 text-1xl">4000+</div>
            <div className="ml-4 text-lg text-white">Hiring Partners</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-4 mt-2">
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
