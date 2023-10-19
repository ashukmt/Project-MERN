import React, { useEffect, useState } from "react";

const Timer = ({myData}) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); 

  const year_num = parseInt(myData?.year);
  const monthInNum = parseInt(myData?.month_num);
  const date_num = parseInt(myData?.date);

  const targetDate = new Date(
    `${year_num}-${monthInNum}-${date_num}T00:00:00`
  ).getTime();

  useEffect(() => {
    console.log(year_num,monthInNum,date_num) 
    let intervalId;
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);
        setTimeRemaining((pre) => {
          return {
            ...pre,
            days,
            hours,
            minutes,
            seconds,
          };
        });
      }
    };

    intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  return (
    <div>
      <div className="timer flex ">
        <div className="flex flex-col justify-center text-center p-4 px-7 day_block ">
          <p className="text-lg font-bold text-gray-500">
            {timeRemaining.days}
          </p>
          <p className="text-lg font-bold text-red-500">Days</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-500 justify-center text-center p-4">
            :
          </p>
        </div>
        <div className="flex flex-col justify-center text-center p-4 px-6  hour_block">
          <p className="text-lg font-bold text-gray-500">
            {timeRemaining.hours}
          </p>
          <p className="text-lg font-bold text-red-500">Hours</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-500 justify-center text-center p-4">
            :
          </p>
        </div>
        <div className="flex flex-col justify-center text-center p-4 px-7  min_block">
          <p className="text-lg font-bold text-gray-500 ">
            {timeRemaining.minutes}
          </p>
          <p className="text-lg font-bold text-red-500">Mins</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-500 flex justify-center text-center p-4">
            :
          </p>
        </div>

        <div className="flex flex-col justify-center text-center p-4 px-8  secs_block">
          <p className="text-lg font-bold text-gray-500">
            {timeRemaining.seconds}
          </p>
          <p className="text-lg font-bold text-red-500">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
