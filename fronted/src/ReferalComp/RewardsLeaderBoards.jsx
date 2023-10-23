import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RewardLeaderBCard from './RewardLeaderBCard'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
// import {
//   Previous,
//   Paginator,
//   PageGroup,
//   Page,
//   Next,
//   generatePages
// } from 'chakra-paginator';

function RewardsLeaderBoards() {
//   const normalStyles = {
//     bg: 'white'
//   };

  // const activeStyles = {
  //   bg: 'blue.300'
  // };
  // const itemLimit = 3;
  // const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curPage, setCurPage] = useState(0);
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)

    // const handlePageChange = (page) => {
    //   setCurPage(page);
    // };

    // useEffect(() => {
    //   const pagesTotal = Math.ceil(Reward.length / itemLimit);
  
    //   setPagesQuantity(pagesTotal);
    // }, [Reward.length]);
  


  return (
    <div className='grid grid-cols-1 w-3/4 mx-auto md:grid-cols-4 gap-14'>
    {
        Reward?.map((Rewrd, i) => {
            return <RewardLeaderBCard {...Rewrd} key={i} />
        })
    }
  
    {/* <Paginator
          onPageChange={handlePageChange}
          pagesQuantity={pagesQuantity - 1}>
          <Previous bg="white">
            <CgChevronLeft />
          </Previous>
          <PageGroup>
            {generatePages(pagesQuantity)?.map((page) => (
              <Page
                key={`paginator_page_${page}`}
                page={page}
                normalStyles={normalStyles}
                activeStyles={activeStyles}
              />
            ))}
          </PageGroup>
          <Next bg="white">
            <CgChevronRight />
          </Next>
        </Paginator> */}

</div>
  )
}

export default RewardsLeaderBoards
