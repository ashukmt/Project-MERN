import React from 'react'
import { FaBeer } from 'react-icons/fa'

function RewardLeaderBCard({ username,coin }) {
  return (
    
    <div className='px-4'>
    <div className='w-full md:w-[400px] py-4 border-b border-gray-300'>
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png?ga=GA1.1.144022409.1691515271' width={30} alt="User Icon"/>
          <h1 className='text-left pl-2 font-semibold md:text-base leading-5 tracking-wider text-[#000000] text-[15px]'>{username}</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className='text-left pl-2 font-semibold md:text-base leading-5 tracking-wider text-[#000000] text-[15px]'>
            <span className='text-green-500 px-1'>+</span>{coin} Coin
          </h1>
        </div>
      </div>
    </div>
  </div>
  
     
    
  )
}

export default RewardLeaderBCard
