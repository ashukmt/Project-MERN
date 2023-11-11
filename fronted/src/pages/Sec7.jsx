import React from 'react'
import SubSec71 from './subPart/SubSec71'
import SubSec72 from './subPart/SubSec72'
import { Box, Text } from '@chakra-ui/react'

function Sec7() {
  return (
    <div className='widt7 p-12' id='success'>
      {/* <div className='font-bold text-3xl flex justify-center '>Our Students Are <span className='text-red-600 ml-2'> Creating Impact</span></div> */}
      <Box className='text-center' py='5%' px='7%'>
                
                <Text className='font-bold text-2xl'>Our Students Are<span className='text-red-600'>Creating Impact</span > </Text>
               
            </Box>
      <div className='flex widt77 '>
      <div className='widt71  mt-10'>
        <SubSec71/>
      </div>
      <div className='w-2/4 mt-10 ml-5 sub72'>
        <SubSec72/>
      </div>
      </div>
    </div>
  )
}

export default Sec7
