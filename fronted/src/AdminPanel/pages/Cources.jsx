import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CourseCard from './CourseCard'
import EventCard from './EventCard';
ChartJS.register(ArcElement, Tooltip, Legend);

const REACT_APP_BASEURL=process.env.REACT_APP_BASEURL;

const Cources = () => {
  const[graph,setGraph]=useState([0,0,0,0,0]);
   const data = {
    labels: ['Backend Developer','Data Analyist', 'Full Stack Web Developer', 'QA Tester','App Developer'],
    datasets: [
      {
        label: '# of Votes',
        data: graph,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(100, 255, 50, 1)',
          
        ],
        borderColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'rgba(100, 255, 50, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  const[course,setCourse]=useState([]);
  const[events,setEvents]=useState([]);
  useEffect(async()=>{
    try{
      const data=await axios.get(`${REACT_APP_BASEURL}/course`);
      setCourse(data.data);
      data.data.map((e)=>{
        if(e.role=='Full Stack Web Developer'){
          let temp=graph;
          temp[2]++;
          setGraph(temp);
        }
        if(e.role=='Backend Developer'){
          let temp=graph;
          temp[0]++;
          setGraph(temp);
        }
        if(e.role=='Data Analyist'){
          let temp=graph;
          temp[1]++;
          setGraph(temp);
        }
        if(e.role=='QA Tester'){
          let temp=graph;
          temp[3]++;
          setGraph(temp);
        }
        if(e.role=='App Developer'){
          let temp=graph;
          temp[4]++;
          setGraph(temp);
        }
      })
      console.log(data);
    }catch(error){
      console.log(error);
    }
  },[])


  return (
   <>
   <Heading textAlign='center' marginBottom='3rem'>Courses</Heading>
   <Box display="flex"  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >
      <Box  overflow="auto" height="45rem" width="70%" margin='auto' >
        <Box margin='auto' width='max-content'>
        {course.map((e,idx)=>{
         
        return <CourseCard key={idx} e={e}/>
          
})}
        </Box>
      </Box>
      
      <Box width='30%' height="45rem">
      <Box width='max-content' margin='auto' >
      <Pie data={data}/>
      </Box>
      </Box>
   </Box>
  
   </>
  )
}




export default Cources
