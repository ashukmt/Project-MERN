import React, { useState } from 'react'
import { FaAddressCard } from 'react-icons/fa'
import AddressPageCard from './AddressPageCard'
import { useSelector } from 'react-redux'

function AddressPage() {

  const [arr,setArr]=useState([])
  const cart=useSelector(state=>state.Reward.cartStatus)
  console.log(cart)
  return (
    <div className='rounded-md'  style={{width:"70%",margin:"auto",marginTop:"20px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      backgroundImage: 'url("https://img.freepik.com/free-photo/delivery-trucks-road-out-smartphone-carry-goods-customer-home-with-location-pointer-bubble-chat-message-ecommerce-concept-blue-background-3d-illustration_56104-1811.jpg?size=626&ext=jpg&ga=GA1.1.144022409.1691515271&semt=ais")', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center center', 
    }}>
    <h3 className='text-center md:text-[24px] font-[500] text-[12px]'>Shipping Status</h3>
    {cart ? (
      <div className='flex justify-center' style={{width:"100%"}}>
        <img   src='https://cdn4.avada.io/media/shopify/ONkV09b.png' alt='' />
      
      </div>
    ) : (
      

      <AddressPageCard/>
          
    
    )}
  </div>
  )
}

export default AddressPage
