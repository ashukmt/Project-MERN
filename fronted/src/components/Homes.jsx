import React from 'react'
import '../Style/homes.css'
import Sec1 from '../pages/Sec1'
import Sec2 from '../pages/Sec2'
import Sec3 from '../pages/Sec3'
import Sec4 from '../pages/Sec4'
function Homes() {
  return (
    <div>
     <div className='mainimage'>
      <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/banner_h_1_3d43d26bd0.webp" alt="masai" />
     </div>
       <Sec1/>
      <Sec2/>
   <div className='w-3/5 m-auto'>
    <Sec3/>
   </div>
   <Sec4/>
    </div>
  )
}

export default Homes
