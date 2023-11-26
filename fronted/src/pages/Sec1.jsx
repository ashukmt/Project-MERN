import React from 'react'
import '../Style/homes.css'
import { Link } from 'react-router-dom'
function Sec1() {
  return (
    <div className='topsec1 block'>
     <div>
        <h1 className='font-bold sizes'>Realise Your Potential With <span>Assured Outcomes </span>  Delivered.</h1>
        <p className='text-sn mb-5'>India’s only outcome-based career institute.
Enter the tech workforce industry-ready.</p>
<Link to={'/courses'}><button>GET YOUR DREAM JOB</button></Link>
     </div>
     <div>
       <img src="https://harringtonhousing.com/uploads/0003/3066/2023/05/01/the-must-have-moving-in-toolkit-for-college-students.jpeg" alt="profile" />
       {/* <div className='title'>
        hello
       </div> */}
     </div>
    </div>
  )
}

export default Sec1
