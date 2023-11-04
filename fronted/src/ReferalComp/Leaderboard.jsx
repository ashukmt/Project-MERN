import React, { useState } from "react";
import Invite from "./Invite";

import AddressPage from "./Addresspage";

function Leaderboard() {
  const [page,setPage]=useState(1)
  return (
    <div className="">
      <Invite/>
      <AddressPage/>
    </div>
  );
}

export default Leaderboard;
