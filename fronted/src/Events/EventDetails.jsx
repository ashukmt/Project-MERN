import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const EventDetails = () => {
  let {id} = useParams();
  const [myDetailsData, setMyDetailsData] = useState({});

  const fetchingMyDetailsData = async () => {
    try {
      const myResponse = await fetch(`http://localhost:3000/events/${id}`);   
      const myData = await myResponse.json();
      console.log(myData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingMyDetailsData();
  }, []);
  
  return (
    <div>
      <h1>HI</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7iFTsdUrFuk?si=6LQr2xXkhQwzkzsI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8ynGpt9hk9k?si=Q8TnXIXSDzeyvd5p"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default EventDetails;
