import React from 'react';

function RewardCard({ Coin_Req, Gift_name, Gift_url }) {
  return (
    <div className='border-solid items-center rounded-2xl justify-center' style={{ background: "#f3f2f2",boxShadow:"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
      <div className='flex justify-center pt-8 px-4'> 
        <img src={Gift_url} alt={Gift_name} width={450} />
      </div>
      <div className='flex items-center justify-between mt-4 mx-10'> {/* Align Coin_Req and coin image side by side */}
        <h1 className='text-center font-[700] md:text-[30px] leading-20 text-[30px]'>{Gift_name}</h1>
        <div className='flex items-center py-4'>
          <span className=' md:text-[30px] leading-20 text-[30px]'>{Coin_Req }</span>
          <img
            alt="coins"
            className='pl-2'
            src="https://www.masaischool.com/images/referral/coin.svg"
            loading="lazy"
          />
        </div>
      </div>
     <div className='pl-10 mb-8'>
        <button className='px-6 py-4 rounded-xl text-center rounded-20 md:text-[25px] font-[500] leading-20 text-4 text-[#d28187] hover:bg-red-200' style={{border:"1px solid black"}}>CLAIM FOR {Coin_Req} COIN</button>
     </div>
    </div>
  )
}

export default RewardCard;
