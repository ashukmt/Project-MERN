import React from 'react'
import { useSelector } from 'react-redux'
import RewardCard from './RewardCard'

function ReferalReward() {
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)
  return (
    <div>
      <div className="mb-20 mt-20"> 
    <h1 className="text-center font-[700] md:text-[80px] leading-20 text-[30px]">
    Refer and be Rewarded
      </h1>
      <h1 className="text-center font-[600] md:text-[30px] leading-40 tracking-wider text-[15px]">
      Redeem earned coins for the product of your choice.
      </h1>
    </div>
    <div className='grid grid-cols-3 w-3/4 mx-auto  gap-14'>
    {
        Reward?.map((Rewrd,i)=>{
            return <RewardCard {...Rewrd} key={i}/>
        })
      }
    </div>
    </div>
  )
}

export default ReferalReward
