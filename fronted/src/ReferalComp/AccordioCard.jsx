import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccordioCard({Que,Ans}) {
    console.log('Masai')
  return (
    <div style={{width:"50%", margin:"auto"}}>
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='QUE'>{Que}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
        {Ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    



    </div>
  )
}

export default AccordioCard
