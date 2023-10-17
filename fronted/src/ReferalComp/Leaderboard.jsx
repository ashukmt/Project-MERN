import React, { useState } from "react";
import Invite from "./Invite";
import Profile_Rewards from "./Profile_Rewards";
import RewardsLeaderBoards from "./RewardsLeaderBoards";

function Leaderboard() {
  const [page,setPage]=useState(1)
  return (
    <div>
      <div className="w-100" style={{width:"100%"}} >
       
          <div className="flex"  style={{ border: "1px solid red", width: "100%" }}>
            <div>
              <button className="border-solid border-black hover:bg-red-50 hover:text-red-400 p-2 font-bold ml-2 hover:text-red-600 focus:text-[#777bf2]"
             onClick={()=>setPage(1)}
              >
                Invite
              </button>
            </div>
            <div>
              <button className=" hover:bg-red-50 hover:text-red-400 p-2 font-bold ml-2 hover:text-red-600 focus:text-[#777bf2]"
              onClick={()=>setPage(2)}
              >
                Rewards
              </button>
            </div>
            <div>
              <button className=" hover:bg-red-50 hover:text-red-400 p-2 font-bold ml-2 hover:text-red-600 focus:text-[#777bf2]"
                   onClick={()=>setPage(3)}
              >
                referrals
              </button>
            </div>
          </div>
        
        <div>
        {page===1?<Invite/>:<></>}
       {page===2?<RewardsLeaderBoards/>:<></>}
       {page===3?<Profile_Rewards/>:<></>}
      
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
