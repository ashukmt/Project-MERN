import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RewardLeaderBCard from './RewardLeaderBCard'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { getReward } from '../redux/RewardReducer/action';


function RewardsLeaderBoards() {

  const [curPage, setCurPage] = useState(0);
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getReward())
    },[])
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
