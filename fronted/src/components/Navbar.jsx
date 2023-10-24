import React from 'react'
import '../Style/navbar.css'
import { Link, useNavigate } from 'react-router-dom'




function Navbar() {
  const Navigate = useNavigate();
  const edit=[
    {path:'/courses',title:'COURSES'},
    {path:'/events',title:'EVENTS'},
    {path:'/fees',title:'FEES'},
    {path:'/learn',title:'LEARN'},
    {path:'/success',title:'SUCCESS STORIES'},
    {path:'/hirefromus',title:'HIRE FROM US'},
  ]
  return (
    <div className='main'>
     <div>
     <Link to={'/'}><img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png" alt="masai images"/></Link>
     </div>
     <div className='middle'>
      {edit?.map((el)=>(
        <Link className='link' to={el.path}>{el.title}</Link>
      ))}  
     </div>
     <div className='last'>   
         <button
         onClick={()=>{
          Navigate('/Referal')
         }}
         ><Link  to={'/Refer'}>REFER & EARN</Link></button>

         <button>SIGN UP</button>
     </div>
    </div>
  )
}

export default Navbar
