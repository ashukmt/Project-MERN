import React, { useEffect, useState } from 'react';
import { Heading, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SmallTimer = ({submitTest}) => {
  const now = new Date();
  const timer = new Date(now.getTime() + 10* 60 * 1000);

  const [timeLeft, setTimeLeft] = useState(timer - now);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const data = {
    labels: [],
    datasets: [
      {
        data: [timeLeft, 600000 - timeLeft], // 600,000 ms is 10 minutes
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  let intervalId;
  const getTime = () => {
    const time = timer - new Date();
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
    setTimeLeft((prev) => {
      if (prev <= 2000) {
        clearInterval(intervalId);
        submitTest()
        return 0;
      }
      return time
    });
  };

  useEffect(() => {
    intervalId = setInterval(getTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex items-center gap-2 -mt-2'>
      <div style={{ width: '50px', height: '50px', marginTop: '-12px' }} className='absolute ml-6'>
        <Doughnut data={data} />
      </div>
      <Heading fontFamily={'orbitron'} className='m-0 ml-20 p-0'>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} </Heading>
      <Text fontFamily={'orbitron'} className='text-[20px] mt-2'>Min:Sec</Text>
    </div>
  );
};

export default SmallTimer;
