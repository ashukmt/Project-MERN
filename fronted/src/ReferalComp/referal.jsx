import React from 'react';
import Referal1 from './Referal1';
import ReferalReward from './Referal&Reward';

function Referal() {
  return (
    <>
    <div className="w-full" style={{ background: 'linear-gradient(90deg, rgb(251, 183, 21) 50%, rgb(244, 244, 244) 60%)' }}>
      <div className="relative max-w-[1440px] mx-auto px-[16px] lg:pr-0 flex items-center justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center h-full absolute left-0 md:left-[auto] py-[24px] max-w-[70%] md:py-[62px] pl-[16px] lg:pl-[80px] md:max-w-[700px] text-left">
          <h1 className="font-[700] text-[48px] leading-[62px] font-poppins">Refer once, earn <span style={{ textShadow: 'rgb(254, 224, 163) 0px 4px' }}>twice!</span></h1>
          <p className="font-[400] text-[24px] leading-[34px] font-sans text-[#3B3435] mt-[12px]">Exciting rewards await you and your friends.</p>
          <button type="button" className="active:ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white font-[600] text-[18px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px] bled:cursor-not-allowed max-w-fit mt-[20px] inline-block">refer now</button>
        </div>
        <div className="flex justify-end w-full pointer-events-none">
          <img src="https://www.masaischool.com/images/referral/Referral.png" alt="Referral" className="hidden md:block mx-auto w-full max-h-[500px]" />
          <img src="https://www.masaischool.com/images/referral/Referral2.png" alt="Referral2" className="h-full md:hidden max-h-full mx-auto w-full max-h-[500px]" />
        </div>
      </div>
    </div>
    <Referal1/>
    <ReferalReward/>
    </>
  );
}

export default Referal;
