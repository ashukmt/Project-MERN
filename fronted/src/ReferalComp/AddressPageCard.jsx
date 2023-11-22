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
   

    }}

    >
      <div>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Address : </h1><p>{Add.Address}</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Ph Number : </h1><p>{Add.Phnumber}</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Email :</h1><p>{Add.Email}</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Product Name :</h1><p>{Add.Gift_name}</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Delivery Date :</h1><p>{Add.DeliveryDate}</p></span>
      </div>
      <div className='flex w-[300px]'>
        <img src={Add.Imgurl} alt=''/>
      </div>
    </div>
  )
}

export default AddressPageCard
