import React from "react";

function Referal1() {
  return (
    <div className="py-20" style={{ background: "#cfeedf" }}>
    <div className="mb-20"> 
    <h1 className="text-center font-[700] md:text-[40px] leading-20 text-[30px]">
        Help launch a friend’s dream career
      </h1>
      <h1 className="text-center font-[600] md:text-[24px] leading-40 tracking-wider text-[15px]">
        Ask your friends to sign up using your referral code to earn coins &
        exciting rewards
      </h1>
    </div>
   
      <div className="mx-auto max-w-9xl px-4">
        <dl className="lg:grid lg:grid-cols-3 md:gap-x-5 md:gap-y-10">
          <div className="relative">
            <div className="md:hidden absolute flex h-14 w-14 items-center justify-center mr-4">
              <img
                loading="lazy"
                src="https://www.masaischool.com/images/referral/boy.svg"
                alt="steps"
                className="w-auto mx-auto"
              />
            </div>
            <div className="mx-auto mb-3 hidden md:block">
                <img
                  loading="lazy"
                  src="https://www.masaischool.com/images/referral/boy.svg"
                  alt="steps"
                  className="w-[90px] mx-auto"
                />
            </div>
            <p className="ml-16 lg:ml-0 text-md md:text-2xl md:text-[24px] font-[700]  text-gray-900 md:text-center">
            Your friend clears the <br/> MSAT
            </p>
            <p className="ml-16 lg:ml-0 text-2xl text-gray-900 md:text-center mt-2 sm:mt-4">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-0.5 md:py-2 md:px-4  md:text-[20px] text-xs mr-1 font-[700] text-[#6E71CC]">
                    You both get 100 coins
                <img
                  className="-mr-1 mr-l.5 ml-1"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="md:hidden absolute flex h-14 w-14 items-center justify-center mr-4">
              <img
                loading="lazy"
                src="https://www.masaischool.com/images/referral/girl.svg"
                alt="steps"
                className="w-auto mx-auto"
              />
            </div>
            <div className="mx-auto mb-3 hidden md:block">
                <img
                  loading="lazy"
                  src="https://www.masaischool.com/images/referral/girl.svg"
                  alt="steps"
                  className="w-[90px] mx-auto"
                />
            </div>
            <p className="ml-16 lg:ml-0 text-md md:text-[24px] font-[700] text-gray-900 md:text-center">
            Your friend completes the Onboarding Process
            </p>
            <p className="ml-16 lg:ml-0 text-2xl text-gray-900 md:text-center mt-2 sm:mt-4">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-0.5 md:py-2 md:px-4  md:text-[20px] text-xs  mr-1 font-[700]  text-[#6E71CC]">
                    You both get 100 coins
                <img
                  className="-mr-1 mr-l.5 ml-1"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>


          <div className="relative">
            <div className="md:hidden absolute flex h-14 w-14 items-center justify-center mr-4">
              <img
                loading="lazy"
                src="https://www.masaischool.com/images/referral/girl2.svg"
                alt="steps"
                className="w-auto mx-auto"
              />
            </div>
            <div className="mx-auto mb-3 hidden md:block">
                <img
                  loading="lazy"
                  src="https://www.masaischool.com/images/referral/girl2.svg"
                  alt="steps"
                  className="w-[90px] mx-auto"
                />
            </div>
            <p className="ml-16 lg:ml-0 text-md md:text-2xl md:text-[24px] font-[700]  text-gray-900 md:text-center">
            Your friend starts their classes and completes their 1st week
            </p>
            <p className="ml-16 lg:ml-0 text-2xl text-gray-900 md:text-center mt-2 sm:mt-4">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-0.5 md:py-2 md:px-4  md:text-[20px] text-xs  mr-1 font-[700] text-[#6E71CC]">
                    You both get 500 coins
                <img
                  className="-mr-1 mr-l.5 ml-1 md:w-6"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>
          
        </dl>
      </div>
    </div>
  );
}

export default Referal1;
