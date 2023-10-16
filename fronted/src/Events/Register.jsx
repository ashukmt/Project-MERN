import React, { useEffect, useState } from "react";
import "../Style/Events.css";
import { useParams } from "react-router";
const Register = () => {
  let { id } = useParams();
  const [myRegisterData, setMyRegisterData] = useState({});
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fetchingMyRegisterData = async () => {
    try {
      const myResponse = await fetch(
        `http://localhost:8080/event/registerevents/${id}`
      );
      const myData = await myResponse.json();
      setMyRegisterData(myData.register_data);
      console.log(myData.register_data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingMyRegisterData(); // invoking function for fetching data in use-effect

    const targetDate = new Date("2023-12-10T00:00:00").getTime();
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
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="">
        <div className="register_upSec p-10">
          <div className="left_upSec">
            <div className="up_text flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="38"
                height="38"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 18.843,30.289 22.92,34.179 22.926,34.173 22.932,34.179 26.86,30.119 26.86,30.119"
                ></polygon>
                <polygon
                  fill="#fff"
                  points="22.926,34.173 26.86,30.119 22.775,26.233 18.843,30.289"
                ></polygon>
              </svg>

              <p className="text-2xl font-semibold ">
                You have registered successfully!
              </p>
            </div>
            <div className="main_descDiv">
              <p className="text-4xl font-bold">Explore how</p>
              <p className="text-4xl font-bold main_descP">
                {myRegisterData.main_desc}
              </p>
              <p>By {myRegisterData.speaker_post}</p>
            </div>

            <div className="time_monthDiv w-1/3 justify-between flex">
              <div className="regdate_div flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="calendar"
                >
                  <path
                    fill="#b2b1ff"
                    d="M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H7zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H17z"
                  ></path>
                  <path
                    fill="#6563ff"
                    d="M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3z"
                  ></path>
                  <circle cx="7" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="7" cy="17" r="1" fill="#6563ff"></circle>
                  <circle cx="12" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="12" cy="17" r="1" fill="#6563ff"></circle>
                  <circle cx="17" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="17" cy="17" r="1" fill="#6563ff"></circle>
                  <path
                    fill="#b2b1ff"
                    d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9H2zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  ></path>
                </svg>

                <p>
                  {myRegisterData.date}th, {myRegisterData.month}
                </p>
              </div>

              <div class="inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>

              <div className="flex ml-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="clock"
                >
                  <path
                    fill="#6563ff"
                    d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12Z"
                  ></path>
                </svg>

                <div className="flex">
                  <p>
                    {myRegisterData.start_time} {myRegisterData.type1}   
                  </p>
                  <p>
                  -
                  </p>
                  <p>
                  {myRegisterData.end_time} {myRegisterData.type2}
                  </p>
                </div>
              </div>
            </div>

            <div className="timer flex">
              <div className="flex flex-col day_block">
                <p className="text-lg font-bold">{timeRemaining.days}</p>
                <p className="text-lg font-bold">Days</p>
              </div>
              <div>
                <p className="text-2xl font-bold decoration-red-500">:</p>
              </div>
              <div className="flex flex-col hour_block">
                <p className="text-lg font-bold">{timeRemaining.hours}</p>
                <p className="text-lg font-bold">Hours</p>
              </div>
              <div>
                <p className="text-2xl font-bold decoration-red-500">:</p>
              </div>
              <div className="flex flex-col min_block">
                <p className="text-lg font-bold">{timeRemaining.minutes}</p>
                <p className="text-lg font-bold">Mins</p>
              </div>
              <div>
                <p className="text-2xl font-bold decoration-red-500">:</p>
              </div>

              <div className="flex flex-col secs_block">
                <p className="text-lg font-bold">{timeRemaining.seconds}</p>
                <p className="text-lg font-bold">Secs</p>
              </div>
            </div>
          </div>
          <div className="right_upSec"></div>
        </div>

        <div className="register_wtSec">
          <h1>register_wtSec</h1>
        </div>

        <div className="register_aboutSec">
          <h1>register_aboutSec</h1>
        </div>

        <div className="register_evtDescSec">
          <h1>register_evtDescSec</h1>
        </div>

        <div className="register_speakerSec">
          <h1>register_speakerSec</h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
