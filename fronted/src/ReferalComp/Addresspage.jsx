import React, { useState } from 'react'
import { FaAddressCard } from 'react-icons/fa'
import AddressPageCard from './AddressPageCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function AddressPage() {

  const [arr,setArr]=useState([])
  const cart=useSelector(state=>state.Reward.cartStatus)
  console.log(cart)
  const navigate = useNavigate();
  return (
    <div className='rounded-xl'  style={{width:"70%",margin:"auto",marginTop:"20px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
     background:"white"
    }}>
    <h3 className='text-center md:text-[24px] rounded-t-xl text-[white] bg-red-400 font-bold  py-2 text-[12px]'>Shipping Status</h3>
    {cart ? (
      <div className='flex justify-center cursor-pointer' onClick={()=>navigate("/Referal")} style={{width:"100%"}}>
        <img   src='https://wpmet.com/wp-content/uploads/2022/09/EmptyCart_3-Copy.png' alt='' />
      
      </div>
    ) : (
      

      <AddressPageCard/>
          
    
    )}
  </div>
  )
}

export default AddressPage
