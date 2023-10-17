import React from 'react'

function RewardLeaderBCard({ Coin_Req, Gift_name, Gift_url }) {
  return (
    <div className='border-solid items-center rounded-xl justify-center' style={{ background: "#f3f2f2",boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
      <div className='flex justify-center pt-4 px-4 '> 
        <img src={Gift_url} alt={Gift_name} width={600} className='rounded-[10%]' />
      </div>
      <div className='flex items-center justify-between mt-1 '> {/* Align Coin_Req and coin image side by side */}
        <h1 className='text-center pt-2 font-[700] md:text-[16px]  text-[16px]'>{Gift_name}</h1>
        <div className='flex items-center py-2'>
        </div>
      </div>
     <div className='flex justify-center py-4'>
        <button className='px-6 py-2 rounded-[4px] text-center  md:text-[14px] font-[500] leading-20 text-[12px] text-[#d28187] hover:bg-red-200' style={{border:"1px solid black"}}
     
        >CLAIM FOR {Coin_Req} COIN</button>
     </div>
    </div>
  )
}

export default RewardLeaderBCard
