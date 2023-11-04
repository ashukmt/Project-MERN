import React, { useState } from 'react'
import { FaAddressCard } from 'react-icons/fa'
import AddressPageCard from './AddressPageCard'

function AddressPage() {
  const [bool,setBool]=useState(false)
  const [arr,setArr]=useState([])
  return (
    <div className='rounded-md'  style={{width:"70%",margin:"auto",marginTop:"20px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      backgroundImage: 'url("https://img.freepik.com/free-photo/delivery-trucks-road-out-smartphone-carry-goods-customer-home-with-location-pointer-bubble-chat-message-ecommerce-concept-blue-background-3d-illustration_56104-1811.jpg?size=626&ext=jpg&ga=GA1.1.144022409.1691515271&semt=ais")', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center center', 
    }}>
    <h3 className='text-center md:text-[24px] font-[500] text-[12px]'>Shipping Status</h3>
    {bool ? (
      <div className='flex justify-center'>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/404/c1a552112421559.Y3JvcCwxMzczLDEwNzQsMzMsMA.jpg' alt='' />
      </div>
    ) : (
      

      <AddressPageCard/>
          
    
    )}
  </div>
  )
}

export default AddressPage
