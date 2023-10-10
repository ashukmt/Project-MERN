import React from 'react'
import { useSelector } from 'react-redux'

import AccordioCard from './AccordioCard';


function Accordionist() {
    const FAQ=useSelector(state=>state.Reward.FAQs)
    console.log(FAQ)
  return (
    <div>
        {
            FAQ?.map((faq,i)=>{
                return <AccordioCard {...faq} key={i}/>
            })
        }
    </div>
  )
}

export default Accordionist
