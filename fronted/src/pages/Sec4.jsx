import React from "react";
import SubSec4 from "./subPart/SubSec4";
import SubSec4b from "./subPart/SubSec4b";
import { Box, Heading, Text } from "@chakra-ui/react";

const Sec4 = () => {
  return (
    <div id='curriculum' className="overflow-hidden">
      {/* <div className="flex justify-center font-bold text-2xl "  >
       <span > Best-in-Class</span><span className="text-red-600 mx-3  cir ">Curriculum</span>&
        <span className="text-red-600 mx-">Pedagogy</span>
      </div> */}
       <Box className='text-center' py='5%' px='7%'>
                
                <Text className='font-bold text-2xl'>Best-in-Class<span className='text-red-600'>Curriculum</span > & <span className='text-red-600'>Pedagogy</span ></Text>
               
            </Box>
      <div className="flex justify-between subb44">
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
