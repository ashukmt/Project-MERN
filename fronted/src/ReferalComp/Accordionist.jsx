import React from 'react'
import { useSelector } from 'react-redux'

import AccordioCard from './AccordioCard';


function Accordionist() {
    const FAQ=useSelector(state=>state.Reward.FAQs)
    console.log(FAQ)
  return (
    <div>
    <h1 className='text-center py-8 text-[35px] font-[700]'>Frequently asked questions</h1>
        {
            FAQ?.map((faq,i)=>{
                return <AccordioCard {...faq} key={i}/>
            })
        }
    </div>
  )
}

export default Accordionist
