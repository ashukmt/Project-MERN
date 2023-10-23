import React from 'react'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


function AccordioCard({Que,Ans}) {
    console.log('Masai')
  return (
    <Box width={{ base: "100%", md: "80%" }} margin="auto">
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" py={2} fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
            {Que}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {Ans}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</Box>
  )
}

export default AccordioCard
