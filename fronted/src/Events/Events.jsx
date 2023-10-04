import React from 'react'
import "../Style/Events.css"
const Events = () => {
  return (
    <div>
      <div className="container-fluid cont">
        <div className="row" style={{ minHeight: "510px" }}>
          <div className="col-12">
            <h1 className="fw-bold display-5 head">Webinars & Masterclasses</h1>
            <p className="text-center text-wrap p_here fs-5 text-secondary">
              Learn from industry experts and test your skills against peers
              <br />
              during our comprehensive events, masterclasses & contests.
              <br />
              Experience impactful learning with Masai by your side.
            </p>
          </div>
          <div className="col btns_div">
            <button
              type="button"
              class="btn btn-light border border-secondary p-3 pe-4 ps-4 me-3"
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-light border border-secondary p-3 me-3"
            >
              Webinars
            </button>
            <button
              type="button"
              class="btn btn-light border border-secondary p-3 me-3"
            >
              MasterClasses
            </button>
          </div>
          <div className="col">
            <form class="d-flex my_form" role="search">
              <input
                class="form-control me-2 p-3 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="child-1 border">
          <h3 className=".text-secondary">17</h3>
          <p className="fw-bolder">September</p>
        </div>
        <div className="child-2 border">
          <div className="img_div">
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aman_Singhal_Website_Desktop_Thumbnail_ad2ba88280.png"
              width={500}
              className="img-fluid"
              // className="w-50"
              alt=""
            />
          </div>

          <div className="data_div">
            <p className="fs-5 fw-bolder">Webinar with our Co-founder</p>
            <p className="fw-bold fs-3 ">FOUNDER WEBINAR</p>
            <div className="myData_div">
             <div>

             
          
            <p className="hour_p fs-6 fw-medium">1 h</p>

            <div className="time_data">
              <div className="time-1">
                <p className="fs-6 fw-medium">07:00</p>
                <p className="fs-6 fw-medium pm-1">pm</p>
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
              <hr class="border border-success border-2 opacity-50 my_hr"></hr>

              <div className="time-2">
                <p className="fs-6 fw-medium">08:00</p>
                <p className="fs-6 fw-medium pm-2">pm</p>
              </div>
              
             
              
            </div>

            <p className="duration_p fs-6 fw-medium">Duration</p>
                </div>
                {/* <div className="rec_div">
              <button type="button" class="btn fw-medium rec_btn">RECORDING</button>
              </div> */}
            </div>
            <hr className='hr_here'/>
            <div className="btm_div">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-fire text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
              </svg>

              <p className="text-danger std_num fs-6 fw-medium">1814</p>
              <p className="my_txt fs-6 fw-medium">people have registered</p>
              
            </div>
          </div>

            <div className="rec_div">
              <button type="button" class="btn fw-medium rec_btn">RECORDING</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Events