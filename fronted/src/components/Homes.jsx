import React, { useEffect } from 'react'
import '../Style/homes.css'
import Sec1 from '../pages/Sec1'
import Sec2 from '../pages/Sec2'
import Sec3 from '../pages/Sec3'
import Sec4 from '../pages/Sec4'
import Sec5 from '../pages/Sec5'
import Sec6 from '../pages/Sec6'
import Sec7 from '../pages/Sec7'
import Sec8 from '../pages/Sec8'
import { animateScroll } from 'react-scroll'
function Homes() {
  useEffect(() => {
    animateScroll.scrollToTop({ smooth: true })
}, [])
  return (
    <div>
     <div className='mainimage'>
      <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/banner_h_1_3d43d26bd0.webp" alt="masai" />
     </div>
       <Sec1/>
      <Sec2/>
    <Sec3/>
   <Sec4/>
   <Sec6/>
  <Sec5/>
 <Sec7/>
 <Sec8/>
    </div>
    
  )
}

export default Homes
