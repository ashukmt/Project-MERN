import { Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function AddressPageCard() {

  const Add=useSelector(state=>state.Reward.Address)
  console.log(Add)

  return (
    <div className='flex justify-around py-8' style={{width:"80%",
    margin:"auto",
    marginBottom:"20px",
     gap:"30px",
   
  //    backgroundImage: 'url("https://img.freepik.com/free-photo/delivery-trucks-road-out-smartphone-carry-goods-customer-home-with-location-pointer-bubble-chat-message-ecommerce-concept-blue-background-3d-illustration_56104-1811.jpg?size=626&ext=jpg&ga=GA1.1.144022409.1691515271&semt=ais")', 
  // backgroundSize: 'cover', 
  // backgroundRepeat: 'no-repeat', 
  // backgroundPosition: 'center center', 


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
        <img src={Add.Imgurl} alt=''/>
      </div>
    </div>
  )
}

export default AddressPageCard
