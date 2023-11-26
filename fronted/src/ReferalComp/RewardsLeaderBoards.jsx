import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RewardLeaderBCard from './RewardLeaderBCard'
import { getReward } from '../redux/RewardReducer/action';


function RewardsLeaderBoards() {

  const Reward = useSelector(state => state.Reward.Rewards)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReward())
  }, [])
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
