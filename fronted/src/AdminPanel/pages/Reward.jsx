import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const REACT_APP_BASEURL=process.env.REACT_APP_BASEURL;
const Reward = () => {
    const[graph,setGraph]=useState([0,0]);
    const data = {
     labels: ['FOUNDER WEBINAR','MASTERCLASS'],
     datasets: [
       {
         label: '# of Votes',
         data: graph,
         backgroundColor: [
           
            'red',
            'green',
           
         ],
         borderColor: [
           'red',
           'green',
          
         ],
         borderWidth: 1,
       },
     ],
   };

    const[events,setEvents]=useState([]);
    useEffect(async()=>{
      try{
        const data=await axios.get(`${REACT_APP_BASEURL}/event/getevents`);
        setEvents(data.data);
        data.data.map((e)=>{
            if(e.position=='FOUNDER WEBINAR'){
              let temp=graph;
              temp[0]++;
              setGraph(temp);
            }
            if(e.position=='MASTERCLASS'){
                let temp=graph;
                temp[1]++;
                setGraph(temp);
              }
           
          })
       console.log(data);
       
       
      }catch(error){
        console.log(error);
      }
    },[])
   
  return (
    <><Heading textAlign='center' marginTop='2rem' marginBottom='3rem'>Events</Heading><Box display="flex" boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
    <Box overflow="auto" height="78rem" width="70%" margin='auto'>
      <Box margin='auto' width='max-content'>
        {events.map((e, idx) => {

        

        })}
      </Box>
    </Box>

    <Box width='30%' height="78rem">
      <Box width='max-content' margin='auto'>
      <Pie data={data}/>
      </Box>
    </Box>
  </Box></>
  )
}

export default Reward
