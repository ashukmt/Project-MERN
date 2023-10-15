import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const TimerComp = ({ date }) => {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1, 1, 0, 0, 0, 0);
    nextMonthDate.setHours(0);
    nextMonthDate.setMinutes(0);
    nextMonthDate.setSeconds(0);

    const [timeDifference,setTimeDifference] = useState(nextMonthDate - new Date());
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) - 1;
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    useEffect(()=>{
        let id = setInterval(()=>{
            setTimeDifference(nextMonthDate - new Date());
        },20000)
        return clearInterval(id)
    },[])
    return (
        <Text>
            {days} Days 
        </Text>
    )
}

export default TimerComp
