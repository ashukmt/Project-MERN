import React from "react";
import SubSec4 from "./subPart/SubSec4";
import SubSec4b from "./subPart/SubSec4b";

const Sec4 = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-2xl">
        Best-in-Class<span className="text-red-600 mx-3">Curriculum</span>&
        <span className="text-red-600 mx-3">Pedagogy</span>
      </div>
      <div className="flex justify-between">
        <div className="wd3 mx-9 ml-28">
         <SubSec4/>
        </div>
        <div className="widts">
          <SubSec4b/>
        </div>
      </div>
      <div className="bg-red-600 text-white font-bold text-lg w-56 m-auto p-3 my-4 rounded-lg flex justify-center">
        <button className="">GET YOUR DREAM JOB</button>
      </div>
    </div>
  );
};

export default Sec4;
