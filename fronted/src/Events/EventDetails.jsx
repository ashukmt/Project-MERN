import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Style/Events.css";
import { animateScroll } from "react-scroll";
const EventDetails = () => {
  let { id } = useParams();
  const [myDetailsData, setMyDetailsData] = useState({});

  const fetchingMyDetailsData = async () => {
    try {
      const myResponse = await fetch(
        `http://localhost:8080/event/getevents/${id}`
      );
      const myData = await myResponse.json();
      setMyDetailsData(myData.one_event);
      console.log(myData.one_event);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingMyDetailsData();
  }, []);

  useEffect(() => {
    animateScroll.scrollToTop({ smooth: true })
}, [])

console.log("random clg")

  return (
    <div>
      <div className="edParent grid grid-cols gap-20 place-content-center">
        <div className="video_div flex justify-center">
          <iframe
            className="rounded-md custom-iframe"
            width="1400"
            height="600"
            poster={myDetailsData.img}
            src={myDetailsData.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="masai_desc flex">
          <div className="about_event">
            <p className="font-sans about_p">About the event</p>
            <h1 className="font-sans about_h1 text-xl mt-2 md:text-2xl font-bold">
              {myDetailsData.title}
            </h1>
            <p className="font-sans about_p2 text-3xl mt-2 font-bold">
              {myDetailsData.position}
            </p>
          </div>
          <div class="inline-block h-[250px] min-h-[1em] str_line w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>
          <div className="aboutDesc_div">
            <p className="font-medium">
              Pondering a career as a Software Developer? Not sure where to
              begin or what to expect? Dive into this enlightening session with
              Aman Singhal, a tech expert and Co-Founder of Prepleaf by Masai,as
              he shares the roadmap to becoming a successful Software Developer.
            </p>
            <p className="font-medium mt-3">Join us to:</p>
            <p className="font-medium">
              🔑 Decode the key skills (tech skills &amp; soft skills) needed in
              the current market.
            </p>
            <p className="font-medium">
              💡 Enhance and future-proof your skills with Gen AI.
            </p>
            <p className="font-medium">
              🚀 Learn how to build projects and take actionable steps to
              kick-start your career.
            </p>
            <p className="font-medium">
              💼 Navigate the job market with insider tips.
            </p>
            <p className="font-medium mt-5">
              Join the session to learn from his industry experiences &amp;
              amplify your chances in the tech industry.
            </p>
          </div>
        </div>

        <div className="intrstuctor_desc flex justify-center">
          <div className="flex inside_div justify-center">
            <div className="about_event_spk flex justify-center items-center">
              <div>
              <p className="font-sans inst_p">Know Your Speaker</p>
              <h1 className="font-sans inst_h2 text-xl mt-2 md:text-2xl font-bold">
                Meet
              </h1>
              <p className="font-sans inst_p2 text-3xl mt-2 font-bold">
                {myDetailsData.speaker}
              </p>
              </div>
            </div>

            <div class="inline-block h-[250px] min-h-[1em] w-0.5 inst_line self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>

            <div className="sideAbout_div">
              <p className="font-medium text-lg mt-20">
                {myDetailsData.instructor_desc}
              </p>
            </div>
          </div>
          
            
          <div className="inst_img_div">
            <img
              className="inst_img_class"
              src={myDetailsData.instructor_img}
              width={300}
              alt="instructor_img"
            />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
