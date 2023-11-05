import React from 'react'

function AddressPageCard() {
  return (
    <div className='flex justify-around py-8' style={{width:"80%",
    margin:"auto",
    marginBottom:"20px",
     gap:"30px",
   

    }}

    >
      <div>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Address : </h1><p> Senapati Nagar Dighori Umred Road Nagpur</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Ph Number : </h1><p>7709499326</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Email :</h1><p>tusharsapate34@gmail.com</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Product Name :</h1><p>Keyboard</p></span>
        <span className='flex items-center'><h1 className='text-[20px] font-[600]'>Delivery Date :</h1><p>06-11-2023</p></span>
      </div>
      <div className='flex w-[300px]'>
        <img src='https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
      </div>
    </div>
  )
}

export default AddressPageCard
