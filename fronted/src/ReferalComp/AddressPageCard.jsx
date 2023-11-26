import { Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function AddressPageCard() {

  const Add = useSelector(state => state.Reward.Address)
  return (
    <div className='flex justify-around py-8' style={{
      width: "80%",
      margin: "auto",
      marginBottom: "20px",
      gap: "30px",
    }}

    >
      <div>
        <span className='flex items-center'><Text className='text-[20px] font-[600]'>Address : {Add.Address}</Text></span>
        <span className='flex items-center'><Text className='text-[20px] font-[600]'>Ph Number : {Add.Phnumber}</Text></span>
        <span className='flex items-center'><Text className='text-[20px] font-[600]'>Email : {Add.Email}</Text></span>
        <span className='flex items-center'><Text className='text-[20px] font-[600]'>Product Name : {Add.Gift_name}</Text></span>
        <span className='flex items-center'><Text className='text-[20px] font-[600]'>Delivery Date : {Add.DeliveryDate}</Text></span>
      </div>
      <div className='flex w-[300px]'>
        <img src={Add.Imgurl} alt='' />
      </div>
    </div>
  )
}

export default AddressPageCard
