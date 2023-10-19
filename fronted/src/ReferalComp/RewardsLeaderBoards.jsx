import React from 'react'
import { useSelector } from 'react-redux'
import RewardLeaderBCard from './RewardLeaderBCard'

function RewardsLeaderBoards() {
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)
  return (
    <div className='grid grid-cols-1 w-3/4 mx-auto md:grid-cols-4 gap-14'>
    {
        Reward?.map((Rewrd, i) => {
            return <RewardLeaderBCard {...Rewrd} key={i} />
        })
    }

</div>
  )
}

export default RewardsLeaderBoards
