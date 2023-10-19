import React, { useEffect, useState } from "react";
import "../Style/Events.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchingMyRegisterData } from "../redux/eventReducer/action";
import Timer from "./Timer";
const Register = () => {
  let { id } = useParams();
  const [myRegisterData, setMyRegisterData] = useState({});

  const dispatch = useDispatch();

  const { events } = useSelector((pre) => pre);
  const myData = events?.eventData.register_data;

  useEffect(() => {
    dispatch(fetchingMyRegisterData(id)); // invoking function for fetching data in use-effect
  }, []);

  return (
    <div>
      <div className="">
        <div className="register_upSec flex ">
          <div className="left_upSec p-10 pl-20">
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

              <p className="text-3xl font-semibold ">
                You have registered successfully!
              </p>
            </div>
            <div className="main_descDiv mt-4">
              <p className="text-4xl font-bold">Explore how</p>
              <p className="text-4xl font-bold main_descP">
                {myData?.main_desc}
              </p>
              <p className="mt-3">By {myData?.speaker_post}</p>
            </div>

            <div className="flex py-3">
              <div>
                <svg
                  className=""
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
              </div>
              <div className="sag21 font-bold">
                {myData?.date}th, {myData?.month}
              </div>
              <div class="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 mx-4"></div>

              <div className="">
                <svg
                  className="sag2"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
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
              </div>

              <div className="ml-2 timeDuration_div font-bold">
                {myData?.start_time} {myData?.type1} {"-"} {myData?.end_time}{" "}
                {myData?.type2}
              </div>
            </div>
            <Timer myData={myData} />
          </div>
          <div className="right_upSec">
            <img className="" width={700} src={myData?.instructor_img} />
          </div>
        </div>

        <div className="register_wtSec flex justify-between">
          <div className="left_wt_sec mt-10 ml-10 mb-10">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  // xmlns:svgjs="http://svgjs.com/svgjs"
                  id="SvgjsSvg1026"
                  width="50"
                  height="50"
                  version="1.1"
                >
                  <defs id="SvgjsDefs1027" />
                  <g id="SvgjsG1028">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      width="50"
                      height="50"
                    >
                      <path
                        d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                        fill="#114b5f"
                        class="color000 svgShape"
                      />
                    </svg>
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold mt-3 ml-3">
                  Join this event’s Whatsapp Group to get
                </p>
              </div>
            </div>

            <div className="flex ml-14 mt-8">
              <div className="flex">
                <div>
                  <svg
                    className=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    // style="margin-left: 2px;"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM15 11.9L14.3 13.2L9 10.3V5H10.5V9.4L15 11.9Z"
                      fill="#6E71CC"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="wt_pText font-semibold ml-2">Timely Updates</p>
                </div>
              </div>

              <div className="flex">
                <div>
                  <svg
                    className="ml-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M20.25 4.5V8.25H3.75V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5Z"
                      fill="#6E71CC"
                    ></path>
                    <path
                      d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5ZM15.9056 11.4694C15.9754 11.539 16.0307 11.6217 16.0684 11.7128C16.1062 11.8038 16.1256 11.9014 16.1256 12C16.1256 12.0986 16.1062 12.1962 16.0684 12.2872C16.0307 12.3783 15.9754 12.461 15.9056 12.5306L11.4056 17.0306C11.336 17.1004 11.2533 17.1557 11.1622 17.1934C11.0712 17.2312 10.9736 17.2506 10.875 17.2506C10.7764 17.2506 10.6788 17.2312 10.5878 17.1934C10.4967 17.1557 10.414 17.1004 10.3444 17.0306L8.09437 14.7806C7.95364 14.6399 7.87458 14.449 7.87458 14.25C7.87458 14.051 7.95364 13.8601 8.09437 13.7194C8.23511 13.5786 8.42598 13.4996 8.625 13.4996C8.82402 13.4996 9.01489 13.5786 9.15563 13.7194L10.875 15.4397L14.8444 11.4694C14.914 11.3996 14.9967 11.3443 15.0878 11.3066C15.1788 11.2688 15.2764 11.2494 15.375 11.2494C15.4736 11.2494 15.5712 11.2688 15.6622 11.3066C15.7533 11.3443 15.836 11.3996 15.9056 11.4694Z"
                      fill="#6E71CC"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="wt_pText font-semibold ml-2">
                    Access to Exclusive Events
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right_wt_sec mr-20 mt-5">
            <div>
              <div>
                <p className="text-lg">Scan this to join</p>
              </div>
              <div className="ml-1">
                <svg
                  className="mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="120"
                  viewBox="0 0 29 29"
                  width="120"
                >
                  <path
                    d="       M 7 0 l 1 0 0 1 -1 0 Z M 8 0 l 1 0 0 1 -1 0 Z  M 10 0 l 1 0 0 1 -1 0 Z M 11 0 l 1 0 0 1 -1 0 Z  M 13 0 l 1 0 0 1 -1 0 Z M 14 0 l 1 0 0 1 -1 0 Z   M 17 0 l 1 0 0 1 -1 0 Z   M 20 0 l 1 0 0 1 -1 0 Z M 21 0 l 1 0 0 1 -1 0 Z         M 1 1 l 1 0 0 1 -1 0 Z M 2 1 l 1 0 0 1 -1 0 Z M 3 1 l 1 0 0 1 -1 0 Z M 4 1 l 1 0 0 1 -1 0 Z M 5 1 l 1 0 0 1 -1 0 Z  M 7 1 l 1 0 0 1 -1 0 Z  M 9 1 l 1 0 0 1 -1 0 Z M 10 1 l 1 0 0 1 -1 0 Z      M 16 1 l 1 0 0 1 -1 0 Z M 17 1 l 1 0 0 1 -1 0 Z M 18 1 l 1 0 0 1 -1 0 Z M 19 1 l 1 0 0 1 -1 0 Z M 20 1 l 1 0 0 1 -1 0 Z M 21 1 l 1 0 0 1 -1 0 Z  M 23 1 l 1 0 0 1 -1 0 Z M 24 1 l 1 0 0 1 -1 0 Z M 25 1 l 1 0 0 1 -1 0 Z M 26 1 l 1 0 0 1 -1 0 Z M 27 1 l 1 0 0 1 -1 0 Z   M 1 2 l 1 0 0 1 -1 0 Z    M 5 2 l 1 0 0 1 -1 0 Z  M 7 2 l 1 0 0 1 -1 0 Z      M 13 2 l 1 0 0 1 -1 0 Z M 14 2 l 1 0 0 1 -1 0 Z M 15 2 l 1 0 0 1 -1 0 Z   M 18 2 l 1 0 0 1 -1 0 Z   M 21 2 l 1 0 0 1 -1 0 Z  M 23 2 l 1 0 0 1 -1 0 Z    M 27 2 l 1 0 0 1 -1 0 Z   M 1 3 l 1 0 0 1 -1 0 Z    M 5 3 l 1 0 0 1 -1 0 Z  M 7 3 l 1 0 0 1 -1 0 Z M 8 3 l 1 0 0 1 -1 0 Z    M 12 3 l 1 0 0 1 -1 0 Z M 13 3 l 1 0 0 1 -1 0 Z M 14 3 l 1 0 0 1 -1 0 Z   M 17 3 l 1 0 0 1 -1 0 Z  M 19 3 l 1 0 0 1 -1 0 Z M 20 3 l 1 0 0 1 -1 0 Z M 21 3 l 1 0 0 1 -1 0 Z  M 23 3 l 1 0 0 1 -1 0 Z    M 27 3 l 1 0 0 1 -1 0 Z   M 1 4 l 1 0 0 1 -1 0 Z    M 5 4 l 1 0 0 1 -1 0 Z  M 7 4 l 1 0 0 1 -1 0 Z  M 9 4 l 1 0 0 1 -1 0 Z M 10 4 l 1 0 0 1 -1 0 Z M 11 4 l 1 0 0 1 -1 0 Z M 12 4 l 1 0 0 1 -1 0 Z  M 14 4 l 1 0 0 1 -1 0 Z  M 16 4 l 1 0 0 1 -1 0 Z   M 19 4 l 1 0 0 1 -1 0 Z  M 21 4 l 1 0 0 1 -1 0 Z  M 23 4 l 1 0 0 1 -1 0 Z    M 27 4 l 1 0 0 1 -1 0 Z   M 1 5 l 1 0 0 1 -1 0 Z M 2 5 l 1 0 0 1 -1 0 Z M 3 5 l 1 0 0 1 -1 0 Z M 4 5 l 1 0 0 1 -1 0 Z M 5 5 l 1 0 0 1 -1 0 Z  M 7 5 l 1 0 0 1 -1 0 Z   M 10 5 l 1 0 0 1 -1 0 Z  M 12 5 l 1 0 0 1 -1 0 Z M 13 5 l 1 0 0 1 -1 0 Z        M 21 5 l 1 0 0 1 -1 0 Z  M 23 5 l 1 0 0 1 -1 0 Z M 24 5 l 1 0 0 1 -1 0 Z M 25 5 l 1 0 0 1 -1 0 Z M 26 5 l 1 0 0 1 -1 0 Z M 27 5 l 1 0 0 1 -1 0 Z         M 7 6 l 1 0 0 1 -1 0 Z  M 9 6 l 1 0 0 1 -1 0 Z  M 11 6 l 1 0 0 1 -1 0 Z  M 13 6 l 1 0 0 1 -1 0 Z  M 15 6 l 1 0 0 1 -1 0 Z  M 17 6 l 1 0 0 1 -1 0 Z  M 19 6 l 1 0 0 1 -1 0 Z  M 21 6 l 1 0 0 1 -1 0 Z        M 0 7 l 1 0 0 1 -1 0 Z M 1 7 l 1 0 0 1 -1 0 Z M 2 7 l 1 0 0 1 -1 0 Z M 3 7 l 1 0 0 1 -1 0 Z M 4 7 l 1 0 0 1 -1 0 Z M 5 7 l 1 0 0 1 -1 0 Z M 6 7 l 1 0 0 1 -1 0 Z M 7 7 l 1 0 0 1 -1 0 Z   M 10 7 l 1 0 0 1 -1 0 Z M 11 7 l 1 0 0 1 -1 0 Z  M 13 7 l 1 0 0 1 -1 0 Z M 14 7 l 1 0 0 1 -1 0 Z M 15 7 l 1 0 0 1 -1 0 Z M 16 7 l 1 0 0 1 -1 0 Z   M 19 7 l 1 0 0 1 -1 0 Z M 20 7 l 1 0 0 1 -1 0 Z M 21 7 l 1 0 0 1 -1 0 Z M 22 7 l 1 0 0 1 -1 0 Z M 23 7 l 1 0 0 1 -1 0 Z M 24 7 l 1 0 0 1 -1 0 Z M 25 7 l 1 0 0 1 -1 0 Z M 26 7 l 1 0 0 1 -1 0 Z M 27 7 l 1 0 0 1 -1 0 Z M 28 7 l 1 0 0 1 -1 0 Z   M 2 8 l 1 0 0 1 -1 0 Z  M 4 8 l 1 0 0 1 -1 0 Z M 5 8 l 1 0 0 1 -1 0 Z   M 8 8 l 1 0 0 1 -1 0 Z M 9 8 l 1 0 0 1 -1 0 Z  M 11 8 l 1 0 0 1 -1 0 Z  M 13 8 l 1 0 0 1 -1 0 Z  M 15 8 l 1 0 0 1 -1 0 Z  M 17 8 l 1 0 0 1 -1 0 Z M 18 8 l 1 0 0 1 -1 0 Z M 19 8 l 1 0 0 1 -1 0 Z  M 21 8 l 1 0 0 1 -1 0 Z    M 25 8 l 1 0 0 1 -1 0 Z   M 28 8 l 1 0 0 1 -1 0 Z M 0 9 l 1 0 0 1 -1 0 Z     M 5 9 l 1 0 0 1 -1 0 Z M 6 9 l 1 0 0 1 -1 0 Z M 7 9 l 1 0 0 1 -1 0 Z  M 9 9 l 1 0 0 1 -1 0 Z   M 12 9 l 1 0 0 1 -1 0 Z   M 15 9 l 1 0 0 1 -1 0 Z  M 17 9 l 1 0 0 1 -1 0 Z M 18 9 l 1 0 0 1 -1 0 Z M 19 9 l 1 0 0 1 -1 0 Z     M 24 9 l 1 0 0 1 -1 0 Z  M 26 9 l 1 0 0 1 -1 0 Z M 27 9 l 1 0 0 1 -1 0 Z  M 0 10 l 1 0 0 1 -1 0 Z           M 11 10 l 1 0 0 1 -1 0 Z M 12 10 l 1 0 0 1 -1 0 Z   M 15 10 l 1 0 0 1 -1 0 Z M 16 10 l 1 0 0 1 -1 0 Z M 17 10 l 1 0 0 1 -1 0 Z M 18 10 l 1 0 0 1 -1 0 Z     M 23 10 l 1 0 0 1 -1 0 Z     M 28 10 l 1 0 0 1 -1 0 Z   M 2 11 l 1 0 0 1 -1 0 Z M 3 11 l 1 0 0 1 -1 0 Z   M 6 11 l 1 0 0 1 -1 0 Z   M 9 11 l 1 0 0 1 -1 0 Z M 10 11 l 1 0 0 1 -1 0 Z    M 14 11 l 1 0 0 1 -1 0 Z M 15 11 l 1 0 0 1 -1 0 Z M 16 11 l 1 0 0 1 -1 0 Z M 17 11 l 1 0 0 1 -1 0 Z       M 24 11 l 1 0 0 1 -1 0 Z M 25 11 l 1 0 0 1 -1 0 Z   M 28 11 l 1 0 0 1 -1 0 Z M 0 12 l 1 0 0 1 -1 0 Z M 1 12 l 1 0 0 1 -1 0 Z M 2 12 l 1 0 0 1 -1 0 Z M 3 12 l 1 0 0 1 -1 0 Z M 4 12 l 1 0 0 1 -1 0 Z   M 7 12 l 1 0 0 1 -1 0 Z  M 9 12 l 1 0 0 1 -1 0 Z M 10 12 l 1 0 0 1 -1 0 Z M 11 12 l 1 0 0 1 -1 0 Z M 12 12 l 1 0 0 1 -1 0 Z M 13 12 l 1 0 0 1 -1 0 Z M 14 12 l 1 0 0 1 -1 0 Z M 15 12 l 1 0 0 1 -1 0 Z M 16 12 l 1 0 0 1 -1 0 Z   M 19 12 l 1 0 0 1 -1 0 Z M 20 12 l 1 0 0 1 -1 0 Z    M 24 12 l 1 0 0 1 -1 0 Z  M 26 12 l 1 0 0 1 -1 0 Z    M 1 13 l 1 0 0 1 -1 0 Z   M 4 13 l 1 0 0 1 -1 0 Z  M 6 13 l 1 0 0 1 -1 0 Z M 7 13 l 1 0 0 1 -1 0 Z  M 9 13 l 1 0 0 1 -1 0 Z  M 11 13 l 1 0 0 1 -1 0 Z     M 16 13 l 1 0 0 1 -1 0 Z M 17 13 l 1 0 0 1 -1 0 Z M 18 13 l 1 0 0 1 -1 0 Z   M 21 13 l 1 0 0 1 -1 0 Z M 22 13 l 1 0 0 1 -1 0 Z M 23 13 l 1 0 0 1 -1 0 Z M 24 13 l 1 0 0 1 -1 0 Z M 25 13 l 1 0 0 1 -1 0 Z M 26 13 l 1 0 0 1 -1 0 Z M 27 13 l 1 0 0 1 -1 0 Z M 28 13 l 1 0 0 1 -1 0 Z M 0 14 l 1 0 0 1 -1 0 Z  M 2 14 l 1 0 0 1 -1 0 Z  M 4 14 l 1 0 0 1 -1 0 Z   M 7 14 l 1 0 0 1 -1 0 Z M 8 14 l 1 0 0 1 -1 0 Z    M 12 14 l 1 0 0 1 -1 0 Z M 13 14 l 1 0 0 1 -1 0 Z M 14 14 l 1 0 0 1 -1 0 Z M 15 14 l 1 0 0 1 -1 0 Z M 16 14 l 1 0 0 1 -1 0 Z M 17 14 l 1 0 0 1 -1 0 Z M 18 14 l 1 0 0 1 -1 0 Z M 19 14 l 1 0 0 1 -1 0 Z    M 23 14 l 1 0 0 1 -1 0 Z      M 0 15 l 1 0 0 1 -1 0 Z   M 3 15 l 1 0 0 1 -1 0 Z   M 6 15 l 1 0 0 1 -1 0 Z M 7 15 l 1 0 0 1 -1 0 Z  M 9 15 l 1 0 0 1 -1 0 Z M 10 15 l 1 0 0 1 -1 0 Z  M 12 15 l 1 0 0 1 -1 0 Z  M 14 15 l 1 0 0 1 -1 0 Z      M 20 15 l 1 0 0 1 -1 0 Z M 21 15 l 1 0 0 1 -1 0 Z   M 24 15 l 1 0 0 1 -1 0 Z  M 26 15 l 1 0 0 1 -1 0 Z  M 28 15 l 1 0 0 1 -1 0 Z    M 3 16 l 1 0 0 1 -1 0 Z    M 7 16 l 1 0 0 1 -1 0 Z M 8 16 l 1 0 0 1 -1 0 Z M 9 16 l 1 0 0 1 -1 0 Z M 10 16 l 1 0 0 1 -1 0 Z M 11 16 l 1 0 0 1 -1 0 Z M 12 16 l 1 0 0 1 -1 0 Z M 13 16 l 1 0 0 1 -1 0 Z  M 15 16 l 1 0 0 1 -1 0 Z  M 17 16 l 1 0 0 1 -1 0 Z M 18 16 l 1 0 0 1 -1 0 Z    M 22 16 l 1 0 0 1 -1 0 Z M 23 16 l 1 0 0 1 -1 0 Z M 24 16 l 1 0 0 1 -1 0 Z M 25 16 l 1 0 0 1 -1 0 Z M 26 16 l 1 0 0 1 -1 0 Z  M 28 16 l 1 0 0 1 -1 0 Z M 0 17 l 1 0 0 1 -1 0 Z M 1 17 l 1 0 0 1 -1 0 Z  M 3 17 l 1 0 0 1 -1 0 Z  M 5 17 l 1 0 0 1 -1 0 Z M 6 17 l 1 0 0 1 -1 0 Z   M 9 17 l 1 0 0 1 -1 0 Z M 10 17 l 1 0 0 1 -1 0 Z M 11 17 l 1 0 0 1 -1 0 Z   M 14 17 l 1 0 0 1 -1 0 Z M 15 17 l 1 0 0 1 -1 0 Z M 16 17 l 1 0 0 1 -1 0 Z  M 18 17 l 1 0 0 1 -1 0 Z M 19 17 l 1 0 0 1 -1 0 Z M 20 17 l 1 0 0 1 -1 0 Z    M 24 17 l 1 0 0 1 -1 0 Z  M 26 17 l 1 0 0 1 -1 0 Z M 27 17 l 1 0 0 1 -1 0 Z   M 1 18 l 1 0 0 1 -1 0 Z M 2 18 l 1 0 0 1 -1 0 Z M 3 18 l 1 0 0 1 -1 0 Z M 4 18 l 1 0 0 1 -1 0 Z M 5 18 l 1 0 0 1 -1 0 Z   M 8 18 l 1 0 0 1 -1 0 Z  M 10 18 l 1 0 0 1 -1 0 Z M 11 18 l 1 0 0 1 -1 0 Z M 12 18 l 1 0 0 1 -1 0 Z  M 14 18 l 1 0 0 1 -1 0 Z M 15 18 l 1 0 0 1 -1 0 Z    M 19 18 l 1 0 0 1 -1 0 Z M 20 18 l 1 0 0 1 -1 0 Z M 21 18 l 1 0 0 1 -1 0 Z M 22 18 l 1 0 0 1 -1 0 Z M 23 18 l 1 0 0 1 -1 0 Z  M 25 18 l 1 0 0 1 -1 0 Z M 26 18 l 1 0 0 1 -1 0 Z   M 0 19 l 1 0 0 1 -1 0 Z M 1 19 l 1 0 0 1 -1 0 Z   M 4 19 l 1 0 0 1 -1 0 Z M 5 19 l 1 0 0 1 -1 0 Z M 6 19 l 1 0 0 1 -1 0 Z   M 9 19 l 1 0 0 1 -1 0 Z M 10 19 l 1 0 0 1 -1 0 Z M 11 19 l 1 0 0 1 -1 0 Z M 12 19 l 1 0 0 1 -1 0 Z M 13 19 l 1 0 0 1 -1 0 Z   M 16 19 l 1 0 0 1 -1 0 Z  M 18 19 l 1 0 0 1 -1 0 Z  M 20 19 l 1 0 0 1 -1 0 Z     M 25 19 l 1 0 0 1 -1 0 Z M 26 19 l 1 0 0 1 -1 0 Z    M 1 20 l 1 0 0 1 -1 0 Z M 2 20 l 1 0 0 1 -1 0 Z M 3 20 l 1 0 0 1 -1 0 Z M 4 20 l 1 0 0 1 -1 0 Z M 5 20 l 1 0 0 1 -1 0 Z  M 7 20 l 1 0 0 1 -1 0 Z M 8 20 l 1 0 0 1 -1 0 Z  M 10 20 l 1 0 0 1 -1 0 Z M 11 20 l 1 0 0 1 -1 0 Z  M 13 20 l 1 0 0 1 -1 0 Z  M 15 20 l 1 0 0 1 -1 0 Z  M 17 20 l 1 0 0 1 -1 0 Z M 18 20 l 1 0 0 1 -1 0 Z M 19 20 l 1 0 0 1 -1 0 Z      M 25 20 l 1 0 0 1 -1 0 Z  M 27 20 l 1 0 0 1 -1 0 Z M 28 20 l 1 0 0 1 -1 0 Z M 0 21 l 1 0 0 1 -1 0 Z M 1 21 l 1 0 0 1 -1 0 Z M 2 21 l 1 0 0 1 -1 0 Z M 3 21 l 1 0 0 1 -1 0 Z M 4 21 l 1 0 0 1 -1 0 Z M 5 21 l 1 0 0 1 -1 0 Z M 6 21 l 1 0 0 1 -1 0 Z M 7 21 l 1 0 0 1 -1 0 Z  M 9 21 l 1 0 0 1 -1 0 Z M 10 21 l 1 0 0 1 -1 0 Z       M 17 21 l 1 0 0 1 -1 0 Z M 18 21 l 1 0 0 1 -1 0 Z M 19 21 l 1 0 0 1 -1 0 Z  M 21 21 l 1 0 0 1 -1 0 Z M 22 21 l 1 0 0 1 -1 0 Z M 23 21 l 1 0 0 1 -1 0 Z  M 25 21 l 1 0 0 1 -1 0 Z           M 7 22 l 1 0 0 1 -1 0 Z  M 9 22 l 1 0 0 1 -1 0 Z  M 11 22 l 1 0 0 1 -1 0 Z  M 13 22 l 1 0 0 1 -1 0 Z  M 15 22 l 1 0 0 1 -1 0 Z  M 17 22 l 1 0 0 1 -1 0 Z  M 19 22 l 1 0 0 1 -1 0 Z  M 21 22 l 1 0 0 1 -1 0 Z  M 23 22 l 1 0 0 1 -1 0 Z  M 25 22 l 1 0 0 1 -1 0 Z M 26 22 l 1 0 0 1 -1 0 Z  M 28 22 l 1 0 0 1 -1 0 Z  M 1 23 l 1 0 0 1 -1 0 Z M 2 23 l 1 0 0 1 -1 0 Z M 3 23 l 1 0 0 1 -1 0 Z M 4 23 l 1 0 0 1 -1 0 Z M 5 23 l 1 0 0 1 -1 0 Z  M 7 23 l 1 0 0 1 -1 0 Z M 8 23 l 1 0 0 1 -1 0 Z    M 12 23 l 1 0 0 1 -1 0 Z     M 17 23 l 1 0 0 1 -1 0 Z M 18 23 l 1 0 0 1 -1 0 Z M 19 23 l 1 0 0 1 -1 0 Z  M 21 23 l 1 0 0 1 -1 0 Z M 22 23 l 1 0 0 1 -1 0 Z M 23 23 l 1 0 0 1 -1 0 Z     M 28 23 l 1 0 0 1 -1 0 Z  M 1 24 l 1 0 0 1 -1 0 Z    M 5 24 l 1 0 0 1 -1 0 Z  M 7 24 l 1 0 0 1 -1 0 Z M 8 24 l 1 0 0 1 -1 0 Z M 9 24 l 1 0 0 1 -1 0 Z M 10 24 l 1 0 0 1 -1 0 Z    M 14 24 l 1 0 0 1 -1 0 Z M 15 24 l 1 0 0 1 -1 0 Z M 16 24 l 1 0 0 1 -1 0 Z M 17 24 l 1 0 0 1 -1 0 Z M 18 24 l 1 0 0 1 -1 0 Z M 19 24 l 1 0 0 1 -1 0 Z      M 25 24 l 1 0 0 1 -1 0 Z M 26 24 l 1 0 0 1 -1 0 Z M 27 24 l 1 0 0 1 -1 0 Z   M 1 25 l 1 0 0 1 -1 0 Z    M 5 25 l 1 0 0 1 -1 0 Z  M 7 25 l 1 0 0 1 -1 0 Z  M 9 25 l 1 0 0 1 -1 0 Z  M 11 25 l 1 0 0 1 -1 0 Z  M 13 25 l 1 0 0 1 -1 0 Z M 14 25 l 1 0 0 1 -1 0 Z M 15 25 l 1 0 0 1 -1 0 Z M 16 25 l 1 0 0 1 -1 0 Z   M 19 25 l 1 0 0 1 -1 0 Z M 20 25 l 1 0 0 1 -1 0 Z M 21 25 l 1 0 0 1 -1 0 Z      M 27 25 l 1 0 0 1 -1 0 Z M 28 25 l 1 0 0 1 -1 0 Z  M 1 26 l 1 0 0 1 -1 0 Z    M 5 26 l 1 0 0 1 -1 0 Z  M 7 26 l 1 0 0 1 -1 0 Z M 8 26 l 1 0 0 1 -1 0 Z M 9 26 l 1 0 0 1 -1 0 Z   M 12 26 l 1 0 0 1 -1 0 Z M 13 26 l 1 0 0 1 -1 0 Z  M 15 26 l 1 0 0 1 -1 0 Z  M 17 26 l 1 0 0 1 -1 0 Z   M 20 26 l 1 0 0 1 -1 0 Z M 21 26 l 1 0 0 1 -1 0 Z M 22 26 l 1 0 0 1 -1 0 Z M 23 26 l 1 0 0 1 -1 0 Z    M 27 26 l 1 0 0 1 -1 0 Z   M 1 27 l 1 0 0 1 -1 0 Z M 2 27 l 1 0 0 1 -1 0 Z M 3 27 l 1 0 0 1 -1 0 Z M 4 27 l 1 0 0 1 -1 0 Z M 5 27 l 1 0 0 1 -1 0 Z  M 7 27 l 1 0 0 1 -1 0 Z  M 9 27 l 1 0 0 1 -1 0 Z     M 14 27 l 1 0 0 1 -1 0 Z     M 19 27 l 1 0 0 1 -1 0 Z   M 22 27 l 1 0 0 1 -1 0 Z M 23 27 l 1 0 0 1 -1 0 Z  M 25 27 l 1 0 0 1 -1 0 Z M 26 27 l 1 0 0 1 -1 0 Z  M 28 27 l 1 0 0 1 -1 0 Z        M 7 28 l 1 0 0 1 -1 0 Z   M 10 28 l 1 0 0 1 -1 0 Z    M 14 28 l 1 0 0 1 -1 0 Z M 15 28 l 1 0 0 1 -1 0 Z M 16 28 l 1 0 0 1 -1 0 Z  M 18 28 l 1 0 0 1 -1 0 Z M 19 28 l 1 0 0 1 -1 0 Z   M 22 28 l 1 0 0 1 -1 0 Z M 23 28 l 1 0 0 1 -1 0 Z   M 26 28 l 1 0 0 1 -1 0 Z  M 28 28 l 1 0 0 1 -1 0 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z M 2 0 l 1 0 0 1 -1 0 Z M 3 0 l 1 0 0 1 -1 0 Z M 4 0 l 1 0 0 1 -1 0 Z M 5 0 l 1 0 0 1 -1 0 Z M 6 0 l 1 0 0 1 -1 0 Z   M 9 0 l 1 0 0 1 -1 0 Z   M 12 0 l 1 0 0 1 -1 0 Z   M 15 0 l 1 0 0 1 -1 0 Z M 16 0 l 1 0 0 1 -1 0 Z  M 18 0 l 1 0 0 1 -1 0 Z M 19 0 l 1 0 0 1 -1 0 Z   M 22 0 l 1 0 0 1 -1 0 Z M 23 0 l 1 0 0 1 -1 0 Z M 24 0 l 1 0 0 1 -1 0 Z M 25 0 l 1 0 0 1 -1 0 Z M 26 0 l 1 0 0 1 -1 0 Z M 27 0 l 1 0 0 1 -1 0 Z M 28 0 l 1 0 0 1 -1 0 Z M 0 1 l 1 0 0 1 -1 0 Z      M 6 1 l 1 0 0 1 -1 0 Z  M 8 1 l 1 0 0 1 -1 0 Z   M 11 1 l 1 0 0 1 -1 0 Z M 12 1 l 1 0 0 1 -1 0 Z M 13 1 l 1 0 0 1 -1 0 Z M 14 1 l 1 0 0 1 -1 0 Z M 15 1 l 1 0 0 1 -1 0 Z       M 22 1 l 1 0 0 1 -1 0 Z      M 28 1 l 1 0 0 1 -1 0 Z M 0 2 l 1 0 0 1 -1 0 Z  M 2 2 l 1 0 0 1 -1 0 Z M 3 2 l 1 0 0 1 -1 0 Z M 4 2 l 1 0 0 1 -1 0 Z  M 6 2 l 1 0 0 1 -1 0 Z  M 8 2 l 1 0 0 1 -1 0 Z M 9 2 l 1 0 0 1 -1 0 Z M 10 2 l 1 0 0 1 -1 0 Z M 11 2 l 1 0 0 1 -1 0 Z M 12 2 l 1 0 0 1 -1 0 Z    M 16 2 l 1 0 0 1 -1 0 Z M 17 2 l 1 0 0 1 -1 0 Z  M 19 2 l 1 0 0 1 -1 0 Z M 20 2 l 1 0 0 1 -1 0 Z  M 22 2 l 1 0 0 1 -1 0 Z  M 24 2 l 1 0 0 1 -1 0 Z M 25 2 l 1 0 0 1 -1 0 Z M 26 2 l 1 0 0 1 -1 0 Z  M 28 2 l 1 0 0 1 -1 0 Z M 0 3 l 1 0 0 1 -1 0 Z  M 2 3 l 1 0 0 1 -1 0 Z M 3 3 l 1 0 0 1 -1 0 Z M 4 3 l 1 0 0 1 -1 0 Z  M 6 3 l 1 0 0 1 -1 0 Z   M 9 3 l 1 0 0 1 -1 0 Z M 10 3 l 1 0 0 1 -1 0 Z M 11 3 l 1 0 0 1 -1 0 Z    M 15 3 l 1 0 0 1 -1 0 Z M 16 3 l 1 0 0 1 -1 0 Z  M 18 3 l 1 0 0 1 -1 0 Z    M 22 3 l 1 0 0 1 -1 0 Z  M 24 3 l 1 0 0 1 -1 0 Z M 25 3 l 1 0 0 1 -1 0 Z M 26 3 l 1 0 0 1 -1 0 Z  M 28 3 l 1 0 0 1 -1 0 Z M 0 4 l 1 0 0 1 -1 0 Z  M 2 4 l 1 0 0 1 -1 0 Z M 3 4 l 1 0 0 1 -1 0 Z M 4 4 l 1 0 0 1 -1 0 Z  M 6 4 l 1 0 0 1 -1 0 Z  M 8 4 l 1 0 0 1 -1 0 Z     M 13 4 l 1 0 0 1 -1 0 Z  M 15 4 l 1 0 0 1 -1 0 Z  M 17 4 l 1 0 0 1 -1 0 Z M 18 4 l 1 0 0 1 -1 0 Z  M 20 4 l 1 0 0 1 -1 0 Z  M 22 4 l 1 0 0 1 -1 0 Z  M 24 4 l 1 0 0 1 -1 0 Z M 25 4 l 1 0 0 1 -1 0 Z M 26 4 l 1 0 0 1 -1 0 Z  M 28 4 l 1 0 0 1 -1 0 Z M 0 5 l 1 0 0 1 -1 0 Z      M 6 5 l 1 0 0 1 -1 0 Z  M 8 5 l 1 0 0 1 -1 0 Z M 9 5 l 1 0 0 1 -1 0 Z  M 11 5 l 1 0 0 1 -1 0 Z   M 14 5 l 1 0 0 1 -1 0 Z M 15 5 l 1 0 0 1 -1 0 Z M 16 5 l 1 0 0 1 -1 0 Z M 17 5 l 1 0 0 1 -1 0 Z M 18 5 l 1 0 0 1 -1 0 Z M 19 5 l 1 0 0 1 -1 0 Z M 20 5 l 1 0 0 1 -1 0 Z  M 22 5 l 1 0 0 1 -1 0 Z      M 28 5 l 1 0 0 1 -1 0 Z M 0 6 l 1 0 0 1 -1 0 Z M 1 6 l 1 0 0 1 -1 0 Z M 2 6 l 1 0 0 1 -1 0 Z M 3 6 l 1 0 0 1 -1 0 Z M 4 6 l 1 0 0 1 -1 0 Z M 5 6 l 1 0 0 1 -1 0 Z M 6 6 l 1 0 0 1 -1 0 Z  M 8 6 l 1 0 0 1 -1 0 Z  M 10 6 l 1 0 0 1 -1 0 Z  M 12 6 l 1 0 0 1 -1 0 Z  M 14 6 l 1 0 0 1 -1 0 Z  M 16 6 l 1 0 0 1 -1 0 Z  M 18 6 l 1 0 0 1 -1 0 Z  M 20 6 l 1 0 0 1 -1 0 Z  M 22 6 l 1 0 0 1 -1 0 Z M 23 6 l 1 0 0 1 -1 0 Z M 24 6 l 1 0 0 1 -1 0 Z M 25 6 l 1 0 0 1 -1 0 Z M 26 6 l 1 0 0 1 -1 0 Z M 27 6 l 1 0 0 1 -1 0 Z M 28 6 l 1 0 0 1 -1 0 Z         M 8 7 l 1 0 0 1 -1 0 Z M 9 7 l 1 0 0 1 -1 0 Z   M 12 7 l 1 0 0 1 -1 0 Z     M 17 7 l 1 0 0 1 -1 0 Z M 18 7 l 1 0 0 1 -1 0 Z           M 0 8 l 1 0 0 1 -1 0 Z M 1 8 l 1 0 0 1 -1 0 Z  M 3 8 l 1 0 0 1 -1 0 Z   M 6 8 l 1 0 0 1 -1 0 Z M 7 8 l 1 0 0 1 -1 0 Z   M 10 8 l 1 0 0 1 -1 0 Z  M 12 8 l 1 0 0 1 -1 0 Z  M 14 8 l 1 0 0 1 -1 0 Z  M 16 8 l 1 0 0 1 -1 0 Z    M 20 8 l 1 0 0 1 -1 0 Z  M 22 8 l 1 0 0 1 -1 0 Z M 23 8 l 1 0 0 1 -1 0 Z M 24 8 l 1 0 0 1 -1 0 Z  M 26 8 l 1 0 0 1 -1 0 Z M 27 8 l 1 0 0 1 -1 0 Z   M 1 9 l 1 0 0 1 -1 0 Z M 2 9 l 1 0 0 1 -1 0 Z M 3 9 l 1 0 0 1 -1 0 Z M 4 9 l 1 0 0 1 -1 0 Z    M 8 9 l 1 0 0 1 -1 0 Z  M 10 9 l 1 0 0 1 -1 0 Z M 11 9 l 1 0 0 1 -1 0 Z  M 13 9 l 1 0 0 1 -1 0 Z M 14 9 l 1 0 0 1 -1 0 Z  M 16 9 l 1 0 0 1 -1 0 Z    M 20 9 l 1 0 0 1 -1 0 Z M 21 9 l 1 0 0 1 -1 0 Z M 22 9 l 1 0 0 1 -1 0 Z M 23 9 l 1 0 0 1 -1 0 Z  M 25 9 l 1 0 0 1 -1 0 Z   M 28 9 l 1 0 0 1 -1 0 Z  M 1 10 l 1 0 0 1 -1 0 Z M 2 10 l 1 0 0 1 -1 0 Z M 3 10 l 1 0 0 1 -1 0 Z M 4 10 l 1 0 0 1 -1 0 Z M 5 10 l 1 0 0 1 -1 0 Z M 6 10 l 1 0 0 1 -1 0 Z M 7 10 l 1 0 0 1 -1 0 Z M 8 10 l 1 0 0 1 -1 0 Z M 9 10 l 1 0 0 1 -1 0 Z M 10 10 l 1 0 0 1 -1 0 Z   M 13 10 l 1 0 0 1 -1 0 Z M 14 10 l 1 0 0 1 -1 0 Z     M 19 10 l 1 0 0 1 -1 0 Z M 20 10 l 1 0 0 1 -1 0 Z M 21 10 l 1 0 0 1 -1 0 Z M 22 10 l 1 0 0 1 -1 0 Z  M 24 10 l 1 0 0 1 -1 0 Z M 25 10 l 1 0 0 1 -1 0 Z M 26 10 l 1 0 0 1 -1 0 Z M 27 10 l 1 0 0 1 -1 0 Z  M 0 11 l 1 0 0 1 -1 0 Z M 1 11 l 1 0 0 1 -1 0 Z   M 4 11 l 1 0 0 1 -1 0 Z M 5 11 l 1 0 0 1 -1 0 Z  M 7 11 l 1 0 0 1 -1 0 Z M 8 11 l 1 0 0 1 -1 0 Z   M 11 11 l 1 0 0 1 -1 0 Z M 12 11 l 1 0 0 1 -1 0 Z M 13 11 l 1 0 0 1 -1 0 Z     M 18 11 l 1 0 0 1 -1 0 Z M 19 11 l 1 0 0 1 -1 0 Z M 20 11 l 1 0 0 1 -1 0 Z M 21 11 l 1 0 0 1 -1 0 Z M 22 11 l 1 0 0 1 -1 0 Z M 23 11 l 1 0 0 1 -1 0 Z   M 26 11 l 1 0 0 1 -1 0 Z M 27 11 l 1 0 0 1 -1 0 Z       M 5 12 l 1 0 0 1 -1 0 Z M 6 12 l 1 0 0 1 -1 0 Z  M 8 12 l 1 0 0 1 -1 0 Z         M 17 12 l 1 0 0 1 -1 0 Z M 18 12 l 1 0 0 1 -1 0 Z   M 21 12 l 1 0 0 1 -1 0 Z M 22 12 l 1 0 0 1 -1 0 Z M 23 12 l 1 0 0 1 -1 0 Z  M 25 12 l 1 0 0 1 -1 0 Z  M 27 12 l 1 0 0 1 -1 0 Z M 28 12 l 1 0 0 1 -1 0 Z M 0 13 l 1 0 0 1 -1 0 Z  M 2 13 l 1 0 0 1 -1 0 Z M 3 13 l 1 0 0 1 -1 0 Z  M 5 13 l 1 0 0 1 -1 0 Z   M 8 13 l 1 0 0 1 -1 0 Z  M 10 13 l 1 0 0 1 -1 0 Z  M 12 13 l 1 0 0 1 -1 0 Z M 13 13 l 1 0 0 1 -1 0 Z M 14 13 l 1 0 0 1 -1 0 Z M 15 13 l 1 0 0 1 -1 0 Z    M 19 13 l 1 0 0 1 -1 0 Z M 20 13 l 1 0 0 1 -1 0 Z          M 1 14 l 1 0 0 1 -1 0 Z  M 3 14 l 1 0 0 1 -1 0 Z  M 5 14 l 1 0 0 1 -1 0 Z M 6 14 l 1 0 0 1 -1 0 Z   M 9 14 l 1 0 0 1 -1 0 Z M 10 14 l 1 0 0 1 -1 0 Z M 11 14 l 1 0 0 1 -1 0 Z         M 20 14 l 1 0 0 1 -1 0 Z M 21 14 l 1 0 0 1 -1 0 Z M 22 14 l 1 0 0 1 -1 0 Z  M 24 14 l 1 0 0 1 -1 0 Z M 25 14 l 1 0 0 1 -1 0 Z M 26 14 l 1 0 0 1 -1 0 Z M 27 14 l 1 0 0 1 -1 0 Z M 28 14 l 1 0 0 1 -1 0 Z  M 1 15 l 1 0 0 1 -1 0 Z M 2 15 l 1 0 0 1 -1 0 Z  M 4 15 l 1 0 0 1 -1 0 Z M 5 15 l 1 0 0 1 -1 0 Z   M 8 15 l 1 0 0 1 -1 0 Z   M 11 15 l 1 0 0 1 -1 0 Z  M 13 15 l 1 0 0 1 -1 0 Z  M 15 15 l 1 0 0 1 -1 0 Z M 16 15 l 1 0 0 1 -1 0 Z M 17 15 l 1 0 0 1 -1 0 Z M 18 15 l 1 0 0 1 -1 0 Z M 19 15 l 1 0 0 1 -1 0 Z   M 22 15 l 1 0 0 1 -1 0 Z M 23 15 l 1 0 0 1 -1 0 Z  M 25 15 l 1 0 0 1 -1 0 Z  M 27 15 l 1 0 0 1 -1 0 Z  M 0 16 l 1 0 0 1 -1 0 Z M 1 16 l 1 0 0 1 -1 0 Z M 2 16 l 1 0 0 1 -1 0 Z  M 4 16 l 1 0 0 1 -1 0 Z M 5 16 l 1 0 0 1 -1 0 Z M 6 16 l 1 0 0 1 -1 0 Z        M 14 16 l 1 0 0 1 -1 0 Z  M 16 16 l 1 0 0 1 -1 0 Z   M 19 16 l 1 0 0 1 -1 0 Z M 20 16 l 1 0 0 1 -1 0 Z M 21 16 l 1 0 0 1 -1 0 Z      M 27 16 l 1 0 0 1 -1 0 Z    M 2 17 l 1 0 0 1 -1 0 Z  M 4 17 l 1 0 0 1 -1 0 Z   M 7 17 l 1 0 0 1 -1 0 Z M 8 17 l 1 0 0 1 -1 0 Z    M 12 17 l 1 0 0 1 -1 0 Z M 13 17 l 1 0 0 1 -1 0 Z    M 17 17 l 1 0 0 1 -1 0 Z    M 21 17 l 1 0 0 1 -1 0 Z M 22 17 l 1 0 0 1 -1 0 Z M 23 17 l 1 0 0 1 -1 0 Z  M 25 17 l 1 0 0 1 -1 0 Z   M 28 17 l 1 0 0 1 -1 0 Z M 0 18 l 1 0 0 1 -1 0 Z      M 6 18 l 1 0 0 1 -1 0 Z M 7 18 l 1 0 0 1 -1 0 Z  M 9 18 l 1 0 0 1 -1 0 Z    M 13 18 l 1 0 0 1 -1 0 Z   M 16 18 l 1 0 0 1 -1 0 Z M 17 18 l 1 0 0 1 -1 0 Z M 18 18 l 1 0 0 1 -1 0 Z      M 24 18 l 1 0 0 1 -1 0 Z   M 27 18 l 1 0 0 1 -1 0 Z M 28 18 l 1 0 0 1 -1 0 Z   M 2 19 l 1 0 0 1 -1 0 Z M 3 19 l 1 0 0 1 -1 0 Z    M 7 19 l 1 0 0 1 -1 0 Z M 8 19 l 1 0 0 1 -1 0 Z      M 14 19 l 1 0 0 1 -1 0 Z M 15 19 l 1 0 0 1 -1 0 Z  M 17 19 l 1 0 0 1 -1 0 Z  M 19 19 l 1 0 0 1 -1 0 Z  M 21 19 l 1 0 0 1 -1 0 Z M 22 19 l 1 0 0 1 -1 0 Z M 23 19 l 1 0 0 1 -1 0 Z M 24 19 l 1 0 0 1 -1 0 Z   M 27 19 l 1 0 0 1 -1 0 Z M 28 19 l 1 0 0 1 -1 0 Z M 0 20 l 1 0 0 1 -1 0 Z      M 6 20 l 1 0 0 1 -1 0 Z   M 9 20 l 1 0 0 1 -1 0 Z   M 12 20 l 1 0 0 1 -1 0 Z  M 14 20 l 1 0 0 1 -1 0 Z  M 16 20 l 1 0 0 1 -1 0 Z    M 20 20 l 1 0 0 1 -1 0 Z M 21 20 l 1 0 0 1 -1 0 Z M 22 20 l 1 0 0 1 -1 0 Z M 23 20 l 1 0 0 1 -1 0 Z M 24 20 l 1 0 0 1 -1 0 Z  M 26 20 l 1 0 0 1 -1 0 Z           M 8 21 l 1 0 0 1 -1 0 Z   M 11 21 l 1 0 0 1 -1 0 Z M 12 21 l 1 0 0 1 -1 0 Z M 13 21 l 1 0 0 1 -1 0 Z M 14 21 l 1 0 0 1 -1 0 Z M 15 21 l 1 0 0 1 -1 0 Z M 16 21 l 1 0 0 1 -1 0 Z    M 20 21 l 1 0 0 1 -1 0 Z    M 24 21 l 1 0 0 1 -1 0 Z  M 26 21 l 1 0 0 1 -1 0 Z M 27 21 l 1 0 0 1 -1 0 Z M 28 21 l 1 0 0 1 -1 0 Z M 0 22 l 1 0 0 1 -1 0 Z M 1 22 l 1 0 0 1 -1 0 Z M 2 22 l 1 0 0 1 -1 0 Z M 3 22 l 1 0 0 1 -1 0 Z M 4 22 l 1 0 0 1 -1 0 Z M 5 22 l 1 0 0 1 -1 0 Z M 6 22 l 1 0 0 1 -1 0 Z  M 8 22 l 1 0 0 1 -1 0 Z  M 10 22 l 1 0 0 1 -1 0 Z  M 12 22 l 1 0 0 1 -1 0 Z  M 14 22 l 1 0 0 1 -1 0 Z  M 16 22 l 1 0 0 1 -1 0 Z  M 18 22 l 1 0 0 1 -1 0 Z  M 20 22 l 1 0 0 1 -1 0 Z  M 22 22 l 1 0 0 1 -1 0 Z  M 24 22 l 1 0 0 1 -1 0 Z   M 27 22 l 1 0 0 1 -1 0 Z  M 0 23 l 1 0 0 1 -1 0 Z      M 6 23 l 1 0 0 1 -1 0 Z   M 9 23 l 1 0 0 1 -1 0 Z M 10 23 l 1 0 0 1 -1 0 Z M 11 23 l 1 0 0 1 -1 0 Z  M 13 23 l 1 0 0 1 -1 0 Z M 14 23 l 1 0 0 1 -1 0 Z M 15 23 l 1 0 0 1 -1 0 Z M 16 23 l 1 0 0 1 -1 0 Z    M 20 23 l 1 0 0 1 -1 0 Z    M 24 23 l 1 0 0 1 -1 0 Z M 25 23 l 1 0 0 1 -1 0 Z M 26 23 l 1 0 0 1 -1 0 Z M 27 23 l 1 0 0 1 -1 0 Z  M 0 24 l 1 0 0 1 -1 0 Z  M 2 24 l 1 0 0 1 -1 0 Z M 3 24 l 1 0 0 1 -1 0 Z M 4 24 l 1 0 0 1 -1 0 Z  M 6 24 l 1 0 0 1 -1 0 Z     M 11 24 l 1 0 0 1 -1 0 Z M 12 24 l 1 0 0 1 -1 0 Z M 13 24 l 1 0 0 1 -1 0 Z       M 20 24 l 1 0 0 1 -1 0 Z M 21 24 l 1 0 0 1 -1 0 Z M 22 24 l 1 0 0 1 -1 0 Z M 23 24 l 1 0 0 1 -1 0 Z M 24 24 l 1 0 0 1 -1 0 Z    M 28 24 l 1 0 0 1 -1 0 Z M 0 25 l 1 0 0 1 -1 0 Z  M 2 25 l 1 0 0 1 -1 0 Z M 3 25 l 1 0 0 1 -1 0 Z M 4 25 l 1 0 0 1 -1 0 Z  M 6 25 l 1 0 0 1 -1 0 Z  M 8 25 l 1 0 0 1 -1 0 Z  M 10 25 l 1 0 0 1 -1 0 Z  M 12 25 l 1 0 0 1 -1 0 Z     M 17 25 l 1 0 0 1 -1 0 Z M 18 25 l 1 0 0 1 -1 0 Z    M 22 25 l 1 0 0 1 -1 0 Z M 23 25 l 1 0 0 1 -1 0 Z M 24 25 l 1 0 0 1 -1 0 Z M 25 25 l 1 0 0 1 -1 0 Z M 26 25 l 1 0 0 1 -1 0 Z   M 0 26 l 1 0 0 1 -1 0 Z  M 2 26 l 1 0 0 1 -1 0 Z M 3 26 l 1 0 0 1 -1 0 Z M 4 26 l 1 0 0 1 -1 0 Z  M 6 26 l 1 0 0 1 -1 0 Z    M 10 26 l 1 0 0 1 -1 0 Z M 11 26 l 1 0 0 1 -1 0 Z   M 14 26 l 1 0 0 1 -1 0 Z  M 16 26 l 1 0 0 1 -1 0 Z  M 18 26 l 1 0 0 1 -1 0 Z M 19 26 l 1 0 0 1 -1 0 Z     M 24 26 l 1 0 0 1 -1 0 Z M 25 26 l 1 0 0 1 -1 0 Z M 26 26 l 1 0 0 1 -1 0 Z  M 28 26 l 1 0 0 1 -1 0 Z M 0 27 l 1 0 0 1 -1 0 Z      M 6 27 l 1 0 0 1 -1 0 Z  M 8 27 l 1 0 0 1 -1 0 Z  M 10 27 l 1 0 0 1 -1 0 Z M 11 27 l 1 0 0 1 -1 0 Z M 12 27 l 1 0 0 1 -1 0 Z M 13 27 l 1 0 0 1 -1 0 Z  M 15 27 l 1 0 0 1 -1 0 Z M 16 27 l 1 0 0 1 -1 0 Z M 17 27 l 1 0 0 1 -1 0 Z M 18 27 l 1 0 0 1 -1 0 Z  M 20 27 l 1 0 0 1 -1 0 Z M 21 27 l 1 0 0 1 -1 0 Z   M 24 27 l 1 0 0 1 -1 0 Z   M 27 27 l 1 0 0 1 -1 0 Z  M 0 28 l 1 0 0 1 -1 0 Z M 1 28 l 1 0 0 1 -1 0 Z M 2 28 l 1 0 0 1 -1 0 Z M 3 28 l 1 0 0 1 -1 0 Z M 4 28 l 1 0 0 1 -1 0 Z M 5 28 l 1 0 0 1 -1 0 Z M 6 28 l 1 0 0 1 -1 0 Z  M 8 28 l 1 0 0 1 -1 0 Z M 9 28 l 1 0 0 1 -1 0 Z  M 11 28 l 1 0 0 1 -1 0 Z M 12 28 l 1 0 0 1 -1 0 Z M 13 28 l 1 0 0 1 -1 0 Z    M 17 28 l 1 0 0 1 -1 0 Z   M 20 28 l 1 0 0 1 -1 0 Z M 21 28 l 1 0 0 1 -1 0 Z   M 24 28 l 1 0 0 1 -1 0 Z M 25 28 l 1 0 0 1 -1 0 Z  M 27 28 l 1 0 0 1 -1 0 Z "
                    fill="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="register_AboutDesc flex">
          <div className="about_event">
            <p className="font-sans">About the event</p>
            <h1 className="font-sans text-xl mt-2 md:text-2xl font-bold">
              {myData?.title}
            </h1>
            <p className="font-sans text-3xl mt-2 font-bold">
              {myData?.position}
            </p>
          </div>
          <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>
          <div className="Register_sideAbout_div">
            <p>{myData?.reg_desc}</p>
          </div>
        </div>

        <div className="register_evtDescSec justify-center">
          <h1 className="font-bold text-2xl pt-5 register_head">
            Why should you attend our events?
          </h1>
          <p className="text-center text-wrap p_here text-lg opacity-80 text-secondary">
            Elevate your skills, expand your horizons, and connect with a
            vibrant community full of like minded
            <br />
            individuals by joining our events, masterclasses, and contests.
            <br />
            Learn from industry experts, dive deep into focused subjects, and
            showcase your talents for a chance to
            <br />
            win exciting prizes. Unleash your potential and embark on a journey
            of growth and excellence with us.
          </p>

          <div className="register_event_div mt-7 mb-16 justify-center justify-evenly flex">
            <div className="register_part_div flex">
              <div className="register_Particon_div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon part_svg css-28pedn"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
                </svg>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-xl register_participants">10000+</p>
                <p className="text-xl">Participants</p>
              </div>
            </div>

            <div className="register_speaker_div flex">
              <div className="register_Speakericon_div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon part_svg css-28pedn"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 11c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V13c0-1.33 2.67-2 4-2zm0-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 .2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
                </svg>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-xl register_speaker">100+</p>
                <p className="text-xl">Speakers</p>
              </div>
            </div>

            <div className="register_hrs_div flex">
              <div className="register_Hrsicon_div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  focusable="false"
                  class="chakra-icon part_svg css-28pedn"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.333 80h-87.35C310.879 52.396 285.821 32 256 32s-54.879 20.396-61.983 48h-87.35C83.198 80 64 99.198 64 122.667v314.665C64 460.801 83.198 480 106.667 480h298.666C428.802 480 448 460.801 448 437.332V122.667C448 99.198 428.802 80 405.333 80zM256 80c11.729 0 21.333 9.599 21.333 21.333s-9.604 21.334-21.333 21.334-21.333-9.6-21.333-21.334S244.271 80 256 80zm152 360H104V120h40v72h224v-72h40v320z"></path>
                </svg>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-xl register_hrs">200+</p>
                <p className="text-xl">Hrs of content</p>
              </div>
            </div>

            <div className="register_workshop_div flex">
              <div className="register_Workshopicon_div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  focusable="false"
                  class="chakra-icon part_svg css-28pedn"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"></path>
                </svg>
              </div>
              <div className="ml-4 mt-1">
                <p className="text-xl register_workshop">150+</p>
                <p className="text-xl">Workshops</p>
              </div>
            </div>
          </div>
        </div>

        <div className="intrstuctor_desc flex justify-center">
          <div className="flex inside_div justify-center">
            <div className="about_event">
              <p className="font-sans">Know Your Speaker</p>
              <h1 className="font-sans text-xl mt-2 md:text-2xl font-bold">
                Meet
              </h1>
              <p className="font-sans text-3xl mt-2 font-bold">
                {myData?.speaker}
              </p>
            </div>

            <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>

            <div className="sideAbout_div">
              <p className="font-medium text-lg mt-20">
                {myData?.instructor_desc}
              </p>
            </div>
          </div>

          <div>
            <img
              src={myData?.instructor_img}
              width={300}
              alt="instructor_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
