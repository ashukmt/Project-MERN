import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AccordioCard from './AccordioCard';
import { getFaq } from '../redux/RewardReducer/action';


function Accordionist() {
    const FAQ=useSelector(state=>state.Reward.FAQs)

    const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getFaq())
},[])
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
