import React, { useEffect, useState } from "react";
import "../Style/Events.css";
import { Link, useNavigate } from "react-router-dom";
const Events = () => {
  const [eventData, setEventData] = useState([]);
  const[filterBy,setFilterBy] = useState("");
  const[searchBy,setSearchBy] = useState("");

  const myApi = (url,filterBy)=>{
      if(filterBy){
        return `${url}?position=${filterBy}`
      }
      else if(searchBy){
        return `${url}/searchevents?q=${searchBy}`
      }
      else{
        return `${url}/getevents`
      }
  }



  const fetchingEventData = async () => {
    try {
      const myUrl = myApi(`http://localhost:8080/event/`,filterBy,searchBy)
      const response = await fetch(myUrl);
      const data = await response.json();
      console.log(data);
      setEventData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingEventData();
  }, [filterBy,searchBy]);

  const navigate = useNavigate();
  const redirect_details = (id) => {
    navigate(`/event/getevents/${id}`);
  };

 
  return (
    <div>
      <div className="cont" style={{ minHeight: "510px" }}>
        <div>
          <h1 className="font-bold text-5xl pt-20 head">
            Webinars & Masterclasses
          </h1>
          <p className="text-center text-wrap p_here text-2xl opacity-80 text-secondary">
            Learn from industry experts and test your skills against peers
            <br />
            during our comprehensive events, masterclasses & contests.
            <br />
            Experience impactful learning with Masai by your side.
          </p>
        </div>

        <div className="flex mt-20 search_class">
          <div className=" btns_div">
            <button
              onClick={()=>setFilterBy("")}
              type="button"
              class=" hover:text-white hover:bg-red-400 focus:ring-2 border focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2   focus:outline-none dark:focus:ring-red-600"
            >
              All
            </button>
            <button
              onClick={()=>setFilterBy("FOUNDER WEBINAR")}
              type="button"
              class=" hover:text-white hover:bg-red-400 focus:ring-2 border focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2   focus:outline-none dark:focus:ring-red-600"
            >
              Webinars
            </button>
            <button
              onClick={()=>setFilterBy("MASTERCLASS")}
              type="button"
              class=" hover:text-white hover:bg-red-400 focus:ring-2 border focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2   focus:outline-none dark:focus:ring-red-600"
            >
              MasterClasses
            </button>
          </div>

          <div class="max-w-md mx-auto">
            <div class="pr-28 relative flex items-center w-full h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-14 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                onChange={(e)=>setSearchBy(e.target.value)}
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>

      {eventData?.map((elem) => (
        <div className="parent">
          <div className="child-1 border">
            <h3 className=".text-secondary">{elem.date}</h3>
            <p className="font-bold ">{elem.month}</p>
          </div>

          <div className="child-2">
            <div className="img_div">
              <img
                src={elem.img}
                width={500}
                className="myImage"
                // className="w-50"
                alt=""
              />
            </div>

            <div className="data_div">
              <p className="fs-5 font-bold text-xl">{elem.title}</p>
              <p className="font-bold text-3xl posi_tion ">{elem.position}</p>
              <div className="myData_div">
                <div className="mt-4">
                  <p className="hour_p font-medium">{elem.duration}</p>

                  <div className="time_data">
                    <div className="time-1">
                      <p className="font-medium">{elem.start_time}</p>
                      <p className="font-medium pm-1">{elem.type1}</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      fill="currentColor"
                      class="bi bi-circle-fill mt-1"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <hr class="border-2 opacity-200 my_hr"></hr>

                    <div className="time-2">
                      <p className="font-medium">{elem.end_time}</p>
                      <p className="font-medium pm-2">{elem.type2}</p>
                    </div>
                  </div>

                  <p className="duration_p font-medium">Duration</p>
                </div>
                {/* <div className="rec_div">
                <button type="button" class="btn fw-medium rec_btn">RECORDING</button>
                </div> */}
              </div>
              <hr className="hr_here" />
              <div className="btm_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                </svg>

                <p className=" std_num font-medium">{elem.people}</p>
                <p className="my_txt font-medium">people have registered</p>
              </div>
            </div>

            <div className="rec_div">
              <button
                type="button"
                onClick={() => redirect_details(elem._id)}
                class="text-white bg-red-700 hover:bg-red-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-500 focus:outline-none "
              >
                RECORDING
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
