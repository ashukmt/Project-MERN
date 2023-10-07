import React from "react";
import "../style/homes.css";
function Contain1() {
  return (
    <div>
      <div className="flex justify-center font-bold text-lg z-2 ">
        Launch A Sustainable Career
      </div>
      <div className="flex">
        <div className="ml-7 my-5  ">
          <iframe
            className="vit"
            width="500"
            height="250"
            src="https://www.youtube.com/embed/sABN7goDbZ8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className="flex div1 p-4 font-bold ml-5 mt-5 text-lg">
            <div className="text-yellow-500 text-3xl">₹6.9 LPA</div>
            <div className="ml-4 text-lg text-white">Average CTC</div>
          </div>
          <div className="flex div1 p-4 font-bold ml-5 mt-5 text-lg">
            <div className="text-yellow-500 text-3xl">3500+</div>
            <div className="ml-4 text-lg text-white">Careers Launched</div>
          </div>
          <div className="flex div1 p-4 font-bold ml-5 mt-5 text-lg">
            <div className="text-yellow-500 text-3xl">4000+</div>
            <div className="ml-4 text-lg text-white">Hiring Partners</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-4">
      <div >
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/dream11.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/global-logic.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/uber.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/paytm.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/coin-switch.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/share-chat.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/ola.png" alt="dream11" />
      </div>
      <div>
        <img className="wit" src="https://www.masaischool.com/images/new-homepage/outcome/jp-morgan.png" alt="dream11" />
      </div>
      </div>
    </div>
  );
}

export default Contain1;
