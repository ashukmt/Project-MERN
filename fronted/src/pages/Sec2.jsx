import React, { useState } from "react";
import '../style/homes.css'
import Contain1 from "../container/Contain1";

function Sec2() {
  const[num,setNum]=useState(1);
  console.log(num);
  return (
    <div className="mb-44">
      <div className="sec2Main">
        <div>
          <h1 className="text-3xl mt-6">
            Driven By <span>Outcomes</span> To Launch Your Career In Tech
          </h1>
        </div>
      </div>
      <div className="hel">
        <div>
        <button onClick={(e)=>setNum(1)} className="brt flex ml-32 hover:bg-red-50 hover:text-red-400">
          <div className="p-2 bg-red-200 px-4 ml-3 rounded-lg">1</div>
          <div className="p-2 font-bold ml-2 hover:text-red-600">
            Career Launchpad
          </div>
        </button>
        <button onClick={(e)=>setNum(2)} className="brt flex ml-32 hover:bg-red-50 hover:text-red-400">
          <div className="p-2 bg-red-200 px-4 ml-3 rounded-lg">2</div>
          <div className="p-2 font-bold ml-2 hover:text-red-600">
            Nurture Ambition
          </div>
        </button>
        <button onClick={(e)=>setNum(3)} className="brt flex ml-32 hover:bg-red-50 hover:text-red-400">
          <div className="p-2 bg-red-200 px-4 ml-3 rounded-lg">3</div>
          <div className="p-2 font-bold ml-2 hover:text-red-600">
            Practice Based
          </div>
        </button>
        <button onClick={(e)=>setNum(4)} className="brt flex ml-32 hover:bg-red-50 hover:text-red-400">
          <div className="p-2 bg-red-200 px-4 ml-3 rounded-lg">4</div>
          <div className="p-2 font-bold ml-2 hover:text-red-600">
            Industry Readiness
          </div>
        </button>
        <button onClick={(e)=>setNum(5)} className="brt flex ml-32 hover:bg-red-50 hover:text-red-400 ">
          <div className="p-2 bg-red-200 px-4 ml-3 rounded-lg">5</div>
          <div className="p-2 font-bold ml-2 hover:text-red-600">
            Holistic Development
          </div>
        </button>
        </div>
        <div className=" mt-9 ml-10 dat  py-6 px-4">

        
       {num===1?<Contain1/>:<></>}
       {num===2?"h2":<></>}
       {num===3?"h3":<></>}
       {num===4?"h4":<></>}
       {num===5?"h5":<></>} 
        </div>
      </div>
    </div>
  );
}

export default Sec2;
