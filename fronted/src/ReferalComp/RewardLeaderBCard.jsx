import React from 'react'
import { FaBeer } from 'react-icons/fa'

function RewardLeaderBCard({ Name,Coin }) {
  return (
    
   <div className='px-4'>
        <div className='w-[400px] py-4' style={{borderBottom:"1px solid #777bf2"}}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          
            <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png?ga=GA1.1.144022409.1691515271' width={30}/>
            <h1 className='text-left pl-2 font-[600] md:text-[16px] leading-40 tracking-wider text-[#000000] text-[15px]'>{Name}</h1>
          </div>
          <div>
            <h1 className='text-left pl-2 font-[600] md:text-[16px] leading-40 tracking-wider text-[#000000] text-[15px]'><span className='text-[green] px-[4px]'>+</span>{Coin} Coin</h1>
          </div>
        </div>
      </div>
   </div>
     
    
  )
}

export default RewardLeaderBCard
