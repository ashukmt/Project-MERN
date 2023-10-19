import React from 'react'
import { useSelector } from 'react-redux'

function Profile_Rewards() {
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)
  return (
    <div>
      
    </div>
  )
}

export default Profile_Rewards
